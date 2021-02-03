// Inspiration and base code taken from https://codepen.io/leomanlapera/pen/EWBZLW
var geometry = new THREE.BoxGeometry(1, 1, 1);
var logMaterial = new THREE.MeshPhongMaterial({color: 0x7D5A4F});
var leaveDarkMaterial = new THREE.MeshPhongMaterial({color: 0x91E56E});
var leaveLightMaterial = new THREE.MeshPhongMaterial({color: 0xA2FF7A});

var createTree = function () {
    var log = new THREE.Mesh(geometry, logMaterial);
    log.position.set(0, 0, 0);
    log.scale.set(0.3, 1.5, 0.3);

    var squareLeave01 = new THREE.Mesh(geometry, leaveDarkMaterial);
    squareLeave01.position.set(0.5, 1.1, 0.5);
    squareLeave01.scale.set(0.6, 0.6, 0.6);

    var squareLeave02 = new THREE.Mesh(geometry, leaveDarkMaterial);
    squareLeave02.position.set(-0.4, 1.3, -0.4);
    squareLeave02.scale.set(0.7, 0.7, 0.7);

    var squareLeave03 = new THREE.Mesh(geometry, leaveDarkMaterial);
    squareLeave03.position.set(0.4, 1.5, -0.5);
    squareLeave03.scale.set(0.5, 0.5, 0.5);

    var leaveDark = new THREE.Mesh(geometry, leaveDarkMaterial);
    leaveDark.position.set(0, 1.2, 0);
    leaveDark.scale.set(1, 1.2, 1);

    var leaveLight = new THREE.Mesh(geometry, leaveLightMaterial);
    leaveLight.position.set(0, 1.2, 0);
    leaveLight.scale.set(1.1, 0.5, 1.1);

    tree = new THREE.Group();
    tree.add(leaveDark);
    tree.add(leaveLight);
    tree.add(squareLeave01);
    tree.add(squareLeave02);
    tree.add(squareLeave03);
    tree.add(log);

    return tree
}

var rand = function(limit) {
    return Math.random() * limit;
}
var generateTrees = function(scene) {
    var x_pos = -2.2;
    while (x_pos < 2.4) {
        var z_pos = -3.2;
        while (z_pos < 3.2) {
            var r = Math.floor(rand(2));
            if (r == 0) { // only add 1 third of possible trees
                var tree = createTree();
                tree.position.set(x_pos, 0.4, z_pos);
                tree.scale.set(0.4, rand(0.4)+0.2, 0.4);
                tree.rotation.y = Math.random() * 1;
                scene.add(tree);
            }
            z_pos += Math.random() * 2;
        }
        x_pos += Math.random() * 2;
    }
    
}