import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/sass/_index";',
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '/src'),
            "~@": path.resolve(__dirname, '/src')
        }
    }
})
