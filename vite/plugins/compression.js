import compression from 'vite-plugin-compression'


export default function createCompression(env) {
    const plugins = [];
    const {VITE_BUILD_COMPRESS} = env;
    if (VITE_BUILD_COMPRESS) {
        const compressList = VITE_BUILD_COMPRESS.split(",");
        if (compressList.includes(".gzip")) {
            plugins.push(compression({
                ext: '.gz',
                deleteOriginFile: false
            }))
        }

        if (compressList.includes("brotli")) {
            plugins.push(compression({
                ext: '.br',
                algorithm: "brotliCompress",
                deleteOriginFile: false,
            }))
        }
    }

    return plugins;
};
