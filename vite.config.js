const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        format: 'esm', // Ensure you are using ESM output
      },
    },
  },
   server: {
    port: 8080
  },
};
