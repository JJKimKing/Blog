import vue from '@vitejs/plugin-vue'
import createAutoImport from "./auto-import";
import createCompression from "./compression";
import createSetUpExtend from "./setup-extend";
import createSvgIcon from "./svg-icon";
import htmlLoader from "./UseHtmlLoader";


export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetUpExtend());
    vitePlugins.push(createSvgIcon(isBuild));
    vitePlugins.push(htmlLoader(viteEnv))
    isBuild && vitePlugins.push(...createCompression(viteEnv));
    return vitePlugins;
};
