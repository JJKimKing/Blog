import autoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default function createAutoImport() {
    const autoImportInstance = autoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ],
        dts: false,
    });

    const componentsInstance = Components({
        resolvers: [
            ElementPlusResolver(),
        ],
    });

    const iconsInstance = Icons({
        resolvers: [IconsResolver({
            prefix: 'icon',
            enabledCollections: ['ep'],
        })],
        autoInstall: true,
    });

    return [autoImportInstance, componentsInstance, iconsInstance];
}
