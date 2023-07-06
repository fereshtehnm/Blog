const daisyui = require('daisyui');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  mode: 'jit',
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ['luxury', 'retro', 'autumn'],
  },
};
