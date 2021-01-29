// Geometry
var geoB1 = new THREE.BoxGeometry(1, 2, 1);
var geoB2 = new THREE.BoxGeometry(1, 2.5, 1);
var geoB3 = new THREE.BoxGeometry(1, 3, 1);
var geoB4 = new THREE.BoxGeometry(1, 4, 1);

// Materials
var materialB = new THREE.MeshBasicMaterial({ color: 0xBEBEBE, wireframe: false });
var materialB2 = new THREE.MeshBasicMaterial({ color: 0xA52A2A, wireframe: false });
var materialB3 = new THREE.MeshBasicMaterial({ color: 0xe0c975, wireframe: false });
var materialB4 = new THREE.MeshBasicMaterial({ color: 0x6e96c4, wireframe: false });

// Constants
const Z_LIMIT_FRONT = 4.5;
const Z_LIMIT_BACK = -4.4;
const Z_START_MIDDLE = -3.1;
const Z_STOP_MIDDLE = 3.5;

// Creates each building object
var createBMesh = function (x, z) {
    var y, geo, material;
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