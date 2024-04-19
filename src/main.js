import {createApp} from "vue";
import App from './App'
import router from './router';
import store from "./store";
//阿里icon
import '@/assets/css/icon/iconfont.css'
import "@/permission";
import SvgIcon from '@/components/svgIcon'
import elementIconsPlugin from '@/components/svgIcon/SvgIcon';




//导入svg
import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(elementIconsPlugin)
app.component('svg-icon', SvgIcon)
app.mount("#app");




