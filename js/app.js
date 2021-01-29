const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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

// controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

// create shape
var geometry = new THREE.BoxGeometry(1, 1, 1);

// create material or color texture
var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 4;

// logic
var update = function() {
	
};

// draw scene
var render = function() {
	renderer.render(scene, camera);
};

// update, render, repeat
var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();