import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Append Renderer to the Document Body
    document.body.appendChild(renderer.domElement);

    // Create Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to remove the canvas when component unmounts
    return () => {
      document.body.removeChild(renderer.domElement);
    };

  }, []);

  return null; // No need to return a canvas element manually
};

export default ThreeJSViewer;