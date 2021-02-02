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

// create shapes
var mainGeometry = new THREE.BoxGeometry(18.1, 0.1, 10.2);
var parkGemoetry = new THREE.BoxGeometry(5.2, 0.1, 7.2);

// create materials or color textures
var material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'textures/concrete.png' )});
var materialParkGround = new THREE.MeshBasicMaterial({color: 0x046e02, wireframe: false});

// Objects
var plane = new THREE.Mesh(mainGeometry, material);
scene.add(plane);

var parkPlane = new THREE.Mesh(parkGemoetry, materialParkGround);
parkPlane.position.y = 0.1
scene.add(parkPlane);

generateBuildings(scene);
generateTrees(scene);

camera.position.z = 14;
camera.position.y = 3.5;

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