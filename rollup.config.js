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
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        // plugins: [
        //   typescript({
        //     tsconfig: "./tsconfig.json",
        //     declaration: true,
        //     declarationDir: 'dist/esm/types'
        //   }),
        // ]
      },
    ],
    plugins: [
      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'],
      }),
      // babel({
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   babelHelpers: 'bundled',
      //   presets: ['@babel/preset-react', '@babel/preset-typescript']
      // }),
      // nodeResolve({
      //   extensions: ['.ts', '.tsx', '.js', '.jsx']
      // }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: 'dist/esm/types'
      }),
      postcss({
        extract: true,
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
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