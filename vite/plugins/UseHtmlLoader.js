import { createHtmlPlugin } from "vite-plugin-html";


export default function htmlLoader(env) {
    const {VITE_APP_BASE_API} = env;
    return createHtmlPlugin({
        inject:{
            data:{
                _BASE_URL: VITE_APP_BASE_API,
            }
        }
    })
};
