import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  format: 'umd',
  plugins: [ babel() ]
};
