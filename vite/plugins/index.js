import vue from '@vitejs/plugin-vue'
import createAutoImport from "./auto-import";
import createCompression from "./compression";
import createSetUpExtend from "./setup-extend";
import createSvgIcon from "./svg-icon";

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetUpExtend());
    vitePlugins.push(createSvgIcon(isBuild));
    isBuild && vitePlugins.push(...createCompression(viteEnv));
    return vitePlugins;
};
