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
var geometry = new THREE.BoxGeometry(10, 0, 10);
var geoB1 = new THREE.BoxGeometry(1, 2, 1);
var geoB2 = new THREE.BoxGeometry(1, 3, 1);
var geoB3 = new THREE.BoxGeometry(1, 1, 1);


// create material or color texture
var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
var materialB = new THREE.MeshBasicMaterial({color: 0xBEBEBE, wireframe:false});
var materialB2 = new THREE.MeshBasicMaterial({color: 0xA52A2A, wireframe:false});


// Objects
var cube = new THREE.Mesh(geometry, material);


scene.add(cube);

// Front row buildings
var x_pos = -4.5;
while(x_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+=x_pos;
		B.position.z+=4.3;
		x_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+=x_pos;
		B.position.z+=4.3;
		x_pos += 1.3;
		scene.add(B);
	}
}


// Back row buildings
x_pos = -4.5;
while(x_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+=x_pos;
		B.position.z+=-4.3;
		x_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+=x_pos;
		B.position.z+=-4.3;
		x_pos += 1.3;
		scene.add(B);
	}
}

// Left side buildings
var z_pos = -3.5;
while(z_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+= -4.5;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+= -4.5;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
}


// Right side buildings
var z_pos = -3.5;
while(z_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+= 4.5;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+= 4.5;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
}


// Right side buildings inside
var z_pos = -3.5;
while(z_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+= 3;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+= 3;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
}

// Left side buildings inside
var z_pos = -3.5;
while(z_pos < 5){
	var c = Math.floor((Math.random() * 3));
	if(c == 0){
		B = new THREE.Mesh(geoB1, materialB);
		B.position.y+=1;
		B.position.x+= -3;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
	else {
		B = new THREE.Mesh(geoB2, materialB2);
		B.position.y+=1.5;
		B.position.x+= -3;
		B.position.z+=z_pos;
		z_pos += 1.3;
		scene.add(B);
	}
}

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