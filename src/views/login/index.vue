<template>
  <div class="login-box">
    <el-image :src="backgroundImg" fit="fill" class="login-bk-img"/>
    <div class="login-header">
      <!--      主题-->
      <el-switch v-model="isDark"
                 size="large"
                 inline-prompt
                 :active-icon="day"
                 :inactive-icon="dark"
                 @change="toggleDark">
      </el-switch>
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)"></component>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
// 导入背景图片
import backgroundImg from "@/assets/image/bg.png";
import dark from "@/assets/icons/svg/dark.svg";
import day from '@/assets/icons/svg/day.svg';
import illustration from '@/assets/image/illustration.svg'
import useAppStore from '@/store/modules/app';
import {storeToRefs} from "pinia";
import {toRaw} from "vue";

const {isDark, toggleDark} = storeToRefs(useAppStore());

</script>


<style lang="scss" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;


  .login-bk-img {
    position: absolute;
    height: 100%;
    width: 80%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  .login-header {
    position: fixed;
    right: 5vh;
    top: 1vw;
    z-index: 3;
  }

  .login-container {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 18rem;
    padding: 0 2rem;
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    left: -10vw;
    top: 2vh;
  }
}
</style>
