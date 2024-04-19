import {defineConfig, loadEnv} from "vite";
import {resolve} from "path";
import createVitePlugins from "./vite/plugins";

export default defineConfig(({mode, command}) => {
    const env = loadEnv(mode, process.cwd())
    const {VITE_APP_ENV, VITE_APP_BASE_API, VITE_TOKEN_KEY} = env
    return {
        base: VITE_APP_ENV === 'production' ? "/" : "/",
        plugins: createVitePlugins(env, command === 'build'),
        mode: VITE_APP_ENV,
        define: {
            _VITE_ENV_: JSON.stringify(VITE_APP_ENV).toLocaleString(),
            __BASE_URL__: JSON.stringify(VITE_APP_BASE_API).toLocaleString(),
            __TOKEN__: JSON.stringify(VITE_TOKEN_KEY).toLocaleString(),
            __VUE_PROD_DEVTOOLS__: true,
        },
        //存储缓存文件的目录
        cacheDir: "node_modules/.vite",
        //日志打印级别  'info' | 'warn' | 'error' | 'silent'
        logLevel: "info",
        resolve: {
            alias: {
                // 设置路径
                '~': resolve(__dirname, './'),
                // 设置别名
                '@': resolve(__dirname, './src')
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        //vite相关配置
        server: {
            port: 80,
            host: true,
            //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
            strictPort: true,
            //自动打开浏览器
            open: VITE_APP_ENV === 'development',
            //跨域 cors
            // proxy: {
            //     '/dev-api': {
            //         target: 'http://localhost:50007',
            //         changeOrigin: true,
            //         rewrite: (p) => p.replace(/^\/dev-api/, '')
            //     }
            // }
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `$injectedColor: orange;`
                },
            }
        }
    }
})

