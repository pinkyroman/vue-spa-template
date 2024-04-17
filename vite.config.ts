import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://vue-i18n.intlify.dev/guide/advanced/sfc.html#configure-plugin-for-vite
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./path/to/src/locales/**",
      ),
    }),
    // https://github.com/unplugin/unplugin-auto-import#configuration
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        "vue",
        // 'vue-router',
        // custom
        {
          "vue-i18n": ["createI18n", "useI18n"],
          // pinia: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'],
        },
      ],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        "./src/composables/**", // all nested modules
      ],

      dts: true, // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#typescript
      eslintrc: {
        enabled: true, // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
      },
    }),
    tsconfigPaths(),
  ],

  resolve: {
    // https://ko.vitejs.dev/config/shared-options.html#resolve-alias
    // alias: [
    //   {
    //     find: "@",
    //     replacement: fileURLToPath(new URL("./src", import.meta.url)),
    //   },
    //   {
    //     find: "@components",
    //     replacement: fileURLToPath(
    //       new URL("./src/components", import.meta.url),
    //     ),
    //   },
    // ],
  },
});
