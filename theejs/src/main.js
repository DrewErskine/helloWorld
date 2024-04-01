import * as THREE from "../node_modules/three/build/three.module.js"

const width = window.innerWidth, height = window.innerHeight;

// Create HTML elements programmatically
const head = document.head;
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
const title = document.createElement('title');
title.textContent = 'Three.js Animation';
const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        overflow: hidden;
    }
`;
const body = document.body;
const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', 'main.js');

// Append elements to the DOM
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);
head.appendChild(style);
body.appendChild(script);

// Init Three.js
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animation );
body.appendChild( renderer.domElement );

// Animation
function animation( time ) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
}
