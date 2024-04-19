<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
const container = ref(null);

onMounted(()=>{
 //创建场景
  const screen = new THREE.Scene();
  //创建相机(PerspectiveCamera 透视摄像机)
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);//设置渲染器大小
  document.body.appendChild(renderer.domElement);

  //创建立方体模型
   const geometry = new THREE.BoxGeometry(1, 1, 1,9,9,9);

  camera.position.z = 3;

  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});
    const cube = new THREE.Mesh(geometry, material);
    screen.add(cube);
    cube.position.x = x;
    return cube;
  }


  //创建灯光
  const color = 0xFFFFFF;
  const intensity = 5;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  screen.add(light)


  function animate(time) {
    time *= 0.001;
    cubes.forEach( ( cube, ndx ) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    } );
    renderer.render( screen, camera );
    requestAnimationFrame( animate );
  }
  animate(1);
})

</script>

<template>
  <div ref="container"></div>
</template>

<style scoped>

</style>
