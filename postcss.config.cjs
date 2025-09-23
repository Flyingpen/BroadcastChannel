module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nesting')({
      edition: '2021',
      noIsPseudoSelector: true,
    }),
    require('autoprefixer'),
    require('cssnano'),
  ],
}
