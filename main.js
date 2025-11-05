import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create particle system
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Create geometric shapes
const geometries = [];

// Torus
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(-20, 0, -20);
scene.add(torus);
geometries.push(torus);

// Icosahedron
const icoGeometry = new THREE.IcosahedronGeometry(7, 0);
const icoMaterial = new THREE.MeshStandardMaterial({
    color: 0xff006e,
    wireframe: true,
    transparent: true,
    opacity: 0.4
});
const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
icosahedron.position.set(20, 10, -15);
scene.add(icosahedron);
geometries.push(icosahedron);

// Octahedron
const octGeometry = new THREE.OctahedronGeometry(6, 0);
const octMaterial = new THREE.MeshStandardMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const octahedron = new THREE.Mesh(octGeometry, octMaterial);
octahedron.position.set(-15, -15, -25);
scene.add(octahedron);
geometries.push(octahedron);

// Add lights
const pointLight = new THREE.PointLight(0x00d4ff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xff006e, 1);
pointLight2.position.set(-20, -20, -20);
scene.add(pointLight2);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Scroll animation
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = 30 + t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate particles
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;

    // Animate geometric shapes
    geometries.forEach((geo, index) => {
        geo.rotation.x += 0.01 * (index + 1);
        geo.rotation.y += 0.005 * (index + 1);
        geo.rotation.z += 0.005 * (index + 1);

        // Floating effect
        geo.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
    });

    // Camera movement based on mouse
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Make hero section visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}
