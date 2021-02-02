// Geometry
var geoB1 = new THREE.BoxGeometry(1, 2, 1);
var geoB2 = new THREE.BoxGeometry(1, 2.5, 1);
var geoB3 = new THREE.BoxGeometry(1, 3, 1);
var geoB4 = new THREE.BoxGeometry(1, 4, 1);

// Textures
const textureBSide = new THREE.TextureLoader().load( 'textures/b1.jpg' );
const textureB2Side = new THREE.TextureLoader().load( 'textures/b2.jpg' );
const textureB3Side = new THREE.TextureLoader().load( 'textures/b3.jpg' );
const textureB4Side = new THREE.TextureLoader().load( 'textures/b4.jpg' );
const textureRoof = new THREE.TextureLoader().load( 'textures/roof.jpg' );
const textureRoof2 = new THREE.TextureLoader().load( 'textures/roof2.jpg' );
const textureRoof3 = new THREE.TextureLoader().load( 'textures/roof3.jpg' );
const textureRoof4 = new THREE.TextureLoader().load( 'textures/roof4.jpg' );

// Materials
const materialB = 
[
    new THREE.MeshBasicMaterial({ map: textureBSide }), // right side
    new THREE.MeshBasicMaterial({ map: textureBSide }), // left side
    new THREE.MeshBasicMaterial({ map: textureRoof }), // top side
    new THREE.MeshBasicMaterial({ map: textureRoof }), // bottom side
    new THREE.MeshBasicMaterial({ map: textureBSide }), // front side
    new THREE.MeshBasicMaterial({ map: textureBSide }), // back side
];
const materialB2 = 
[
    new THREE.MeshBasicMaterial({ map: textureB2Side }), // right side
    new THREE.MeshBasicMaterial({ map: textureB2Side }), // left side
    new THREE.MeshBasicMaterial({ map: textureRoof2 }), // top side
    new THREE.MeshBasicMaterial({ map: textureRoof2 }), // bottom side
    new THREE.MeshBasicMaterial({ map: textureB2Side }), // front side
    new THREE.MeshBasicMaterial({ map: textureB2Side }), // back side
];
const materialB3 = 
[
    new THREE.MeshBasicMaterial({ map: textureB3Side }), // right side
    new THREE.MeshBasicMaterial({ map: textureB3Side }), // left side
    new THREE.MeshBasicMaterial({ map: textureRoof3 }), // top side
    new THREE.MeshBasicMaterial({ map: textureRoof3 }), // bottom side
    new THREE.MeshBasicMaterial({ map: textureB3Side }), // front side
    new THREE.MeshBasicMaterial({ map: textureB3Side }), // back side
];
const materialB4 = 
[
    new THREE.MeshBasicMaterial({ map: textureB4Side }), // right side
    new THREE.MeshBasicMaterial({ map: textureB4Side }), // left side
    new THREE.MeshBasicMaterial({ map: textureRoof4 }), // top side
    new THREE.MeshBasicMaterial({ map: textureRoof4 }), // bottom side
    new THREE.MeshBasicMaterial({ map: textureB4Side }), // front side
    new THREE.MeshBasicMaterial({ map: textureB4Side }), // back side
];

// Constants
const Z_LIMIT_FRONT = 4.5;
const Z_LIMIT_BACK = -4.4;
const Z_START_MIDDLE = -3.1;
const Z_STOP_MIDDLE = 3.5;

// Creates each building object
var createBMesh = function (x, z) {
    var y, geo, material;
    var rotation = 0;
    var c = Math.floor((Math.random() * 4));
    if (c == 0) {
        y = 1;
        geo = geoB1;
        material = materialB;
    } else if (c == 1) {
        y = 1.25;
        geo = geoB2;
        material = materialB2;
    } else if (c == 2) {
        var r = Math.floor(Math.random() * 3);
        if (r == 0 || r == 1) {
            y = 1.5;
            geo = geoB3;
            material = materialB3;
        } else {
            y = 1;
            geo = geoB1;
            material = materialB;
        }
    } else {
        var r = Math.floor(Math.random() * 2);
        if (r == 0) {
            y = 2;
            geo = geoB4;
            material = materialB4;
        } else {
            y = 1;
            geo = geoB1;
            material = materialB;
        }
    }

    B = new THREE.Mesh(geo, material);
    B.position.x += x;
    B.position.y += y;
    B.position.z += z;
    var r = Math.floor(Math.random() * 4);
    rotation = r * 90;
    B.rotation.y = rotation;
    console.log("Rotation", B.rotation.y);

    if (Math.floor(Math.random() * 2) == 0) {
        var change = Math.random() * 0.8;
        B.scale.y += change;
        B.position.y = y + (y * change);
    }

    return B;
}

// Populates grid with buildings
var generateBuildings = function(scene) {
    // Front row buildings
    var x_pos = -8.4;
    while (x_pos < 8.6) {
        B = createBMesh(x_pos, Z_LIMIT_FRONT);
        x_pos += 1.3;
        scene.add(B);
    }

    // Back row buildings
    x_pos = -8.4;
    while (x_pos < 8.6) {
        B = createBMesh(x_pos, Z_LIMIT_BACK);
        var r = Math.floor((Math.random() * 2));
        x_pos += 1.3;
        scene.add(B);
    }

    // Left side buildings
    var x_pos = -8.45;
    while (x_pos < -3) {
        var z_pos = Z_START_MIDDLE;
        while (z_pos < Z_STOP_MIDDLE) {
            B = createBMesh(x_pos, z_pos);
            z_pos += 1.3;
            scene.add(B);
        }
        x_pos += 1.3;
    }

    // Right side buildings
    var x_pos = 3.25;
    while (x_pos < 8.6) {
        var z_pos = Z_START_MIDDLE;
        while (z_pos < Z_STOP_MIDDLE) {
            B = createBMesh(x_pos, z_pos);
            scene.add(B);
            z_pos += 1.3;
        }
        x_pos += 1.3;
    }
}