var camera, scene, renderer;
var geometry, material, mesh;
var x_rot = 0.01;
var y_rot = 0.02;
var width = window.innerWidth / 3;
var height = window.innerHeight / 3;
var where = document.getElementById('where');

init();
animate();

window.onmousedown = handleMouseMove;

function handleMouseMove(event) {
    x_rot = -1.3 * x_rot;
    y_rot = -1.3 * y_rot;
}

function init() {

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.CubeGeometry( 600, 600, 600 );
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.CanvasRenderer({canvas: where});
    renderer.setSize( width, height);
    $("#control").append( renderer.domElement );

}

function animate() {

// note: three.js includes requestAnimationFrame shim
requestAnimationFrame( animate );

mesh.rotation.x += x_rot;
mesh.rotation.y += y_rot;

renderer.render( scene, camera );

}
