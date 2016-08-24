import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  // Output format:
  //    'amd' would require an external loader to be provided
  //    'umd' would make a module that loads in browser, but..
  //    'es' does ES5 code that's just globally there - simplest? any reason not to?
  format: 'es',
  plugins: [ babel() ]
};
