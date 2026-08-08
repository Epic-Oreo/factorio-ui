import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        // file: packageJson.module,
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: false,
        // plugins: [
        //   typescript({
        //     tsconfig: "./tsconfig.json",
        //     declaration: true,
        //     declarationDir: 'dist/esm/types'
        //   }),
        // ]
      },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false
      }
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),

      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: 'dist/types'
      }),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'bundled',
        exclude: "node_modules/**"
      }),
      // nodeResolve({
      //   extensions: ['.ts', '.tsx', '.js', '.jsx']
      // }),
      commonjs(),

      terser(),
    ],
  },
  // {
  //   input: "dist/esm/types/src/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts.default()],
  //   external: [/\.css$/],
  // },
  {
    input: "src/global.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  }
];