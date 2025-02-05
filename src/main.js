import {createApp} from "vue";
import App from './App'
import router from './router';
import store from "./store";
//阿里icon
import '@/assets/css/icon/iconfont.css'
import "@/permission";
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import SvgIcon from '@/components/svgIcon'
import elementIconsPlugin from '@/components/svgIcon/SvgIcon';

//导入svg
import 'virtual:svg-icons-register';
import settings from "@/settings";

const app = createApp(App);
document.title = settings.title;
app.use(store);
app.use(router);
app.use(elementIconsPlugin)
app.component('svg-icon', SvgIcon)
app.mount("#app");




