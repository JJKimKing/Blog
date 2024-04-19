
<script setup>
import {useAppStore} from "@/store/modules/app";
const appStore = useAppStore();

</script>

<template>
<!--  <el-config-provider :locale="appStore.locale" :size="appStore.size">-->
<!--  </el-config-provider>-->
      <router-view/>
</template>

<style scoped>

</style>
