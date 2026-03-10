import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Page1() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0x7df9ff, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0x8b5cf6, 1.5);
    backLight.position.set(-5, 3, -5);
    scene.add(backLight);
    const pointLight = new THREE.PointLight(0x7df9ff, 2, 10);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.minPolarAngle = Math.PI / 3;

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 15;
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ size: 0.03, color: 0x7df9ff, transparent: true, opacity: 0.6 })
    );
    scene.add(particles);

    const loader = new GLTFLoader();
    loader.load(
      "/computer.glb",
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.8 / maxDim;
        model.scale.set(scale, scale, scale);
        model.position.set(-center.x * scale, -center.y * scale + 0.2, -center.z * scale);
        scene.add(model);
      },
      undefined,
      () => {
        const group = new THREE.Group();
        const monitorMat = new THREE.MeshPhongMaterial({ color: 0x1a1a2e, shininess: 100 });
        const monitor = new THREE.Mesh(new THREE.BoxGeometry(2, 1.3, 0.1), monitorMat);
        monitor.position.set(0, 0.5, 0);
        group.add(monitor);
        const screen = new THREE.Mesh(
          new THREE.BoxGeometry(1.8, 1.1, 0.05),
          new THREE.MeshPhongMaterial({ color: 0x7df9ff, emissive: 0x7df9ff, emissiveIntensity: 0.3 })
        );
        screen.position.set(0, 0.5, 0.06);
        group.add(screen);
        const standMat = new THREE.MeshPhongMaterial({ color: 0x333355 });
        const stand = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.5, 0.1), standMat);
        stand.position.set(0, -0.35, 0);
        group.add(stand);
        const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 0.4), standMat);
        base.position.set(0, -0.6, 0);
        group.add(base);
        const keyboard = new THREE.Mesh(
          new THREE.BoxGeometry(1.4, 0.07, 0.5),
          new THREE.MeshPhongMaterial({ color: 0x222240 })
        );
        keyboard.position.set(0, -0.65, 0.6);
        group.add(keyboard);
        scene.add(group);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      particles.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    // overflow-hidden HATAYA — 
    <div
      style={{ minHeight: "100vh", paddingTop: "80px", position: "relative" }}
      className="flex flex-col md:flex-row items-center"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(125,249,255,0.04)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* Mobile: Model UPAR | Desktop: Right */}
      <div
        ref={mountRef}
        style={{ position: "relative", zIndex: 10 }}
        className="w-full md:flex-1 order-1 md:order-2"
        // inline height so it always works
        {...{ style: { height: "clamp(280px, 45vw, 600px)", position: "relative", zIndex: 10 } }}
      />

      {/* Text — Mobile: neeche center | Desktop: Left */}
      <div
        className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
        style={{ padding: "40px 48px", maxWidth: 600 }}
      >
        <p
          style={{
            color: "#7DF9FF",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontWeight: 600,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Hello, I'm
        </p>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Muhammad <br /> Mughira Asad
        </h1>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            marginBottom: "1.5rem",
          }}
        >
          Full Stack{" "}
          <span style={{ color: "#7DF9FF" }}>Developer</span>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: 420,
            marginBottom: "2.5rem",
          }}
        >
          I build exceptional digital experiences — fast, accessible, and beautifully crafted from
          frontend to backend.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "inherit" }}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "#7DF9FF",
              color: "#050510",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#ffffff")}
            onMouseOut={(e) => (e.target.style.background = "#7DF9FF")}
          >
            Contact Me
          </button>
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "#7DF9FF";
              e.target.style.color = "#7DF9FF";
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.2)";
              e.target.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            My Work
          </button>
        </div>
      </div>
    </div>
  );
}