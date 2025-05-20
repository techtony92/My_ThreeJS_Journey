import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.1;
mesh.position.y = -1.2;
mesh.position.z = 1.2;
scene.add(mesh)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

function length(mesh){
    console.info(`Vector3.length() returns the distance between the center of the scene and our objects position`);
    console.log(mesh.position.length())
}

function distanceTo(sourceInstance, betweenInstance){
    console.info(`Vector3.distanceTo(): returns the distance between the center of the object and another object`)
    print('In this case, the camera');
    console.log(sourceInstance.position.distanceTo(new THREE.Vector3().set(...betweenInstance.position)));
    console.info("Generic Version");
    console.log(sourceInstance.position.distanceTo(betweenInstance.position));
}

function normalize(instance, propertyName){
    instance.position.normalize();
    console.info("Take a vector length and reduces it to 1");
    console.log(instance[propertyName].length());
}

function set(mesh, x ,y,z){
    mesh.position.set(x,y,z);
    console.info("set() sets the x,y & z axis ")
    console.table(mesh.position);
}

length(mesh);
distanceTo(mesh, camera);
normalize(mesh, "position");
set(mesh, 0.1,1.1,0.9);
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)