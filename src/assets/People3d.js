import * as THREE from './threejs/three.min'

const w = window.innerHeight
const h = window.innerWidth
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial()

const cube = new THREE.Mesh(geometry,material)
    scene.add(cube)

const light = new THREE.AmbientLight()
scene.add(light)

const camera = new THREE.PerspectiveCamera(75,w/h,0.1,100)

const renderer = new THREE.WebGL1Renderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)


