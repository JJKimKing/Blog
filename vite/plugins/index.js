import vue from '@vitejs/plugin-vue'
import createAutoImport from "./auto-import";
import createCompression from "./compression";
import createSetUpExtend from "./setup-extend";
import createSvgIcon from "./svg-icon";
import htmlLoader from "./UseHtmlLoader";
import createVueComponents from "./vue-components";
import ViteSvgLoader from 'vite-svg-loader';

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetUpExtend());
    vitePlugins.push(createSvgIcon(isBuild));
    vitePlugins.push(htmlLoader(viteEnv))
    vitePlugins.push(createVueComponents());
    vitePlugins.push(ViteSvgLoader());
    isBuild && vitePlugins.push(...createCompression(viteEnv));
    return vitePlugins;
};
