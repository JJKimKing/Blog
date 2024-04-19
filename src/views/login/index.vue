<template>
  <div class="login">
    <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-from">
      <h3 class="title">{{ userStore.title }}</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  placeholder="账号"
                  v-model="loginForm.username"
                  auto-complete="off"
                  size="large">
        <template #prefix>
          <svg-icon icon-class="user" class="el-input__icon input-icon"/>
        </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            type="password"
            autocomplete="off"
            v-model="loginForm.password"
            placeholder="密码"
            size="large">
        <template #prefix>
          <svg-icon icon-class="password" class="el-input__icon input-icon"/>
        </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import useSettingsStore from "@/store/modules/settings";

const userStore = useSettingsStore();
import {ref} from "vue";
import {Minus} from "@element-plus/icons-vue";


const loginForm = ref({
  username: 'admin',
  password: 'admin123',
  rememberMe: false,
  code: "",
  uuid: ""
});


const loginRules = {}

</script>


<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("@/assets/image/bg.png");
  background-size: cover;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-from {
  border-radius: 6px;
  background-color: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 40px;

    input {
      height: 40px;
    }
    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 0px;
    }
  }
}
</style>
