module.exports = {
  content: [
    './resources/**/*.vue',
    './resources/**/*.js',
    './resources/**/*.blade.php',
  ],
  safelist: [
    'aspect-[9/16]',
    'aspect-[1/1]',
    'aspect-[4/3]',
    'aspect-[4/5]',
    'aspect-[16/9]',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
