import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

import packageJson from './package.json'

const { description, author } = packageJson

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'Bing Chat Font Optimize',
                namespace: 'me.relicx',
                description,
                author,
                match: ['https://www.bing.com/*'],
                'run-at': 'document-body',
                icon: 'https://www.bing.com/favicon.ico',
                source: 'https://github.com/Nicify/bing-chat-font-optimize',
                supportURL:
                    'https://github.com/Nicify/bing-chat-font-optimize/issues',
                updateURL:
                    'https://cdn.jsdelivr.net/gh/Nicify/bing-chat-font-optimize/dist/bing-chat-font-optimize.user.js',
                downloadURL:
                    'https://cdn.jsdelivr.net/gh/Nicify/bing-chat-font-optimize/dist/bing-chat-font-optimize.user.js',
            },
            build: {
                // externalGlobals: {},
            },
        }),
    ],
    build: {
        minify: false,
        target: 'ES2015',
        rollupOptions: {
            treeshake: true,
        },
    },
})
