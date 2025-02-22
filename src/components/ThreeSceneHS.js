"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/addons";

const ThreeSceneHS = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add objects to the scene (e.g., a cube)

        const geometry = new THREE.TorusGeometry(1.7, 0.1, 16, 100);
        const material = new THREE.TextureLoader().load('3d/saturn.jpeg');
        const geo = new THREE.MeshStandardMaterial({
            map: material,
        });

        const Torus = new THREE.Mesh(geometry, geo);
        Torus.position.set(0, 0, 0);
        scene.add(Torus);

        camera.position.z = 5;

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(20, 20, 20);
        pointLight.intensity = 2000;

        const ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = 2;
        ambientLight.position.set(20, 20, 20);
        scene.add(pointLight,ambientLight);


        const addStar= function () {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addStar);

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
        const animate = function () {
            requestAnimationFrame(animate);
            Torus.rotation.x += 0.01;
            Torus.rotation.y += 0.01;
            moonMesh.rotation.x -= 0.01;
            moonMesh.rotation.y -= 0.01;
            renderer.render(scene, camera);
        };

        animate();
        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeSceneHS;