// Main module responsible for setting up the scene

// Creates scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;
camera.position.y = 6;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
	var width = window.innerWidth;
	var height  = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
})

// Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = (Math.PI/2) - 0.01; // prevents rotating down of scene
controls.minZoom = 1;
controls.maxZoom = 1;

// Create shapes
var mainGeometry = new THREE.BoxGeometry(18.1, 0.1, 10.2);
var parkGemoetry = new THREE.BoxGeometry(5.2, 0.1, 7.2);
var waterGeometry = new THREE.BoxGeometry(1000, 0.1, 1000);
var sunGeometry = new THREE.SphereGeometry(1, 40, 40);

// Create materials or color textures
var material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'textures/concrete.png' )});
var materialParkGround = new THREE.MeshBasicMaterial({color: 0x046e02, wireframe: false});
var materialWater = new THREE.MeshBasicMaterial({color: 0x1a8cff, wireframe: false});
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});

// Objects
var plane = new THREE.Mesh(mainGeometry, material);
scene.add(plane);

var parkPlane = new THREE.Mesh(parkGemoetry, materialParkGround);
parkPlane.position.y = 0.1
scene.add(parkPlane);

var waterPlane = new THREE.Mesh(waterGeometry, materialWater);
waterPlane.position.y = -0.1
scene.add(waterPlane);

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.x = -20
sun.position.y = 10
sun.position.z = -4
scene.add(sun);

generateBuildings(scene);
generateTrees(scene);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // soft white light
scene.add( ambientLight );

const light = new THREE.PointLight(0xf9d71c, 1, 100);
light.position.set(-20, 10, -4);
scene.add(light);

// Logic
var t = 0;
var update = function() {
	t += 0.008;
	sun.position.x = -20 * Math.cos(t) + 0;
	sun.position.y = 20 * Math.sin(t) + 7;

	light.position.set(sun.position.x, sun.position.y, sun.position.z);
	light.intensity = light.position.y / 20;
	console.log(light.intensity);
};

// Draw scene
var render = function() {
	renderer.render(scene, camera);
};

// Update, render, repeat
var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();