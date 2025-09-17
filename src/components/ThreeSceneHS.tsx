"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Removing unused import
// import { OrbitControls } from "three/addons";

// Changed to function declaration style per ESLint rule
function ThreeSceneHS(): JSX.Element {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect((): (() => void) => {
        if (!mountRef.current) return () => {}; // Return empty cleanup function if no ref
        
        // Store a reference to the current DOM node
        const currentRef = mountRef.current;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add objects to the scene (e.g., a cube)
        const torusGeometry = new THREE.TorusGeometry(1.7, 0.1, 16, 100);
        const torusMaterialTexture = new THREE.TextureLoader().load('3d/saturn.jpeg');
        const geo = new THREE.MeshStandardMaterial({
            map: torusMaterialTexture,
        });

        const Torus = new THREE.Mesh(torusGeometry, geo);
        Torus.position.set(0, 0, 0);
        scene.add(Torus);

        camera.position.z = 5;

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(20, 20, 20);
        pointLight.intensity = 2000;

        const ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = 2;
        ambientLight.position.set(20, 20, 20);
        scene.add(pointLight, ambientLight);

        const addStar = (): void => {
            const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
            const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(starGeometry, starMaterial);

            const [x, y, z] = Array(3)
                .fill(0)
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        };

        Array(200).fill(0).forEach(addStar);

        const spaceTexture = new THREE.TextureLoader().load('3d/sp.svg');
        spaceTexture.minFilter = THREE.NearestFilter;
        spaceTexture.magFilter = THREE.NearestFilter;
        scene.background = spaceTexture;
        spaceTexture.needsUpdate = true;
        scene.background = spaceTexture;

        const moonGeometry = new THREE.SphereGeometry(0.5, 64, 64); // Increase segments for better mapping
        const moonTexture = new THREE.TextureLoader().load('3d/p2.jpeg');
        const norm = new THREE.TextureLoader().load('3d/p1.jpg');
        const moonMaterial = new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: norm,
        });

        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        moonMesh.position.set(0, 0, 0); // Move it so it's visible
        scene.add(moonMesh);

        // Animation loop
        const animate = (): void => {
            requestAnimationFrame(animate);
            Torus.rotation.x += 0.01;
            Torus.rotation.y += 0.01;
            moonMesh.rotation.x -= 0.01;
            moonMesh.rotation.y -= 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        const handleResize = (): void => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Split cleanup into function declaration
        function cleanup() {
            window.removeEventListener('resize', handleResize);
            if (currentRef) {
                currentRef.removeChild(renderer.domElement);
            }
        }
        
        return cleanup;
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeSceneHS;