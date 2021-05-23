console.log("hello 3js")
console.log(THREE)

//scene
const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)

//add it to the scene
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

//aspect ratio is size of scene width / height
//want to fill the viewport
scene.add(camera)

//new we have to render!!
// doing it i nthe html itself
const canvasA = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvasA
})

renderer.setSize(sizes.width, sizes.height)

//first render
renderer.render(scene, camera)

//by default the z-axis is forward and backward, not up and down

