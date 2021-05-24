import './style.css'
import * as THREE from 'three'

console.log("hello")

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


//group
const group = new THREE.Group()
group.position.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue'})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'purple'})
)
cube2.position.x = -1.5
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'purple'})
)
cube3.position.x = 1.5
group.add(cube3)

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Position
 */
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = -2

mesh.position.set(0.7, -0.6, 1)

//scale
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5

//mesh.scale.set(2, 0.5, 0.5)

mesh.rotation.reorder("YXZ")
//makes the rotation happen in a specific sequence

mesh.rotation.y = 1
mesh.rotation.x = 1


//axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

console.log(mesh.position.length()) 

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
//camera.position.y = 1
//camera.position.x = 1
scene.add(camera)

camera.lookAt(mesh.position)
//mesh is object type of vector3

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)