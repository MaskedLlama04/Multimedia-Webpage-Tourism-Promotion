import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "./Adventure.css";
import anchorImage from "../../assets/images/anchor.jpg";

function Adventure() {
  const navigate = useNavigate();
  const arrowCanvasRef = useRef(null);

  const handleStartAdventure = () => {
    navigate("/adventure-selector");
  };

  useEffect(() => {
  // ========== 3D ARROW ANIMATION (FIXED) ==========
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({
    canvas: arrowCanvasRef.current,
    alpha: true,
    antialias: true
  });
  renderer.setSize(150, 150);

  // ===== Arrow group =====
  const arrowGroup = new THREE.Group();

  // Shaft (main body)
  const shaftGeometry = new THREE.CylinderGeometry(0.12, 0.12, 3, 16);
  const shaftMaterial = new THREE.MeshStandardMaterial({
    color: 0xffc107,
    emissive: 0xffa000,
    emissiveIntensity: 0.4
  });
  const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
  shaft.rotation.z = Math.PI / 2;
  arrowGroup.add(shaft);

  // Head (cone)
  const headGeometry = new THREE.ConeGeometry(0.45, 1, 20);
  const headMaterial = new THREE.MeshStandardMaterial({
    color: 0xffc107,
    emissive: 0xffa000,
    emissiveIntensity: 0.5
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.x = 1.8;
  head.rotation.z = -Math.PI / 2;
  arrowGroup.add(head);

  // Rotate whole arrow → right + slightly down
  arrowGroup.rotation.z = -Math.PI / 6;

  scene.add(arrowGroup);

  // ===== Lights =====
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // ===== Animation =====
  let time = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    time += 0.03;

    // Gentle floating motion (points toward the button)
    arrowGroup.position.y = Math.sin(time) * 0.3;
    arrowGroup.position.x = Math.cos(time) * 0.15;

    renderer.render(scene, camera);
  };

  animate();

  // Cleanup
  return () => {
    renderer.dispose();
  };
}, []);

  return (
    <section className="adventure">
      <div className="adventure-container">
        {/* Left side - 3D Arrow */}
        <div className="adventure-arrow">
          <canvas ref={arrowCanvasRef} />
        </div>

        {/* Center content */}
        <div className="adventure-content">
          {/* Section title */}
          <h2>Make your own adventure</h2>

          {/* Short description */}
          <p>
            Choose the activities you like the most and create your own
            personalized experience in Sant Feliu de Guíxols.
          </p>

          {/* Button that navigates to the adventure selector page */}
          <button className="adventure-btn" onClick={handleStartAdventure}>
            Start your adventure
          </button>
        </div>

        {/* Right side - Anchor image */}
        <div className="adventure-anchor">
          <img src={anchorImage} alt="Nautical anchor" />
        </div>
      </div>
    </section>
  );
}

export default Adventure;