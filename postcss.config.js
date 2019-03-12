const tailwindcss = require('tailwindcss');
const postCssImport = require('postcss-import');

module.exports = {
  plugins: [
		require('postcss-import'),
		tailwindcss('./tailwind.js'),
		require('autoprefixer'),
	]
}
