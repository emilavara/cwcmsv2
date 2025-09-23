import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
        alias: {
            '$cmscss': path.resolve(__dirname, 'src/routes/dashboard/css'),
            '$cmslib': path.resolve(__dirname, 'src/routes/dashboard/lib'),
            '$cmscomponents': path.resolve(__dirname, 'src/routes/dashboard/lib/components'),
            '$cmsserver': path.resolve(__dirname, 'src/routes/dashboard/server'),
            '$stores': path.resolve(__dirname, 'src/lib/stores'),
            '$components': path.resolve(__dirname, 'src/lib/components')
        }
    }
});
