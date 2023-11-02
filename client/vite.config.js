import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(( command, mode ) => {
	dotenv.config({ path: `${process.cwd()}/../.env`});
	return {
	  plugins: [react()],
	  server: {
	    port: parseInt(process.env.FRONTEND_PORT),
	    proxy: {
	      '/api': {
		target: `http://localhost:${process.env.API_PORT}`,
	      }
	    }
	  }
	}
})
