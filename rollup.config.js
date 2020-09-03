'use strict';

module.exports = {
  input: './src/index.js',
  output: [
    {
      format: 'es',
      file: './dist/indexed-db.es.js',
    },
    {
      format: 'umd',
      file: './dist/indexed-db.umd.js',
      name: 'indexedDbUtils',
    },
  ],
};
