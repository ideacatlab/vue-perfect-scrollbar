const { uglify } = require("@blaumaus/rollup-plugin-uglify");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const pkg = require("./package.json");

const browser = {
    input: "src/index.js",
    output: {
        format: "umd",
        name: "Vue3PerfectScrollbar",
        file: pkg.browser,
    },
    plugins: [
        resolve({
            browser: true,
            jsnext: true,
            main: true,
        }),
        commonjs(),
    ],
};

const browserMin = {
    input: "src/index.js",
    output: {
        format: "umd",
        name: "Vue3PerfectScrollbar",
        file: "dist/vue3-perfect-scrollbar.umd.min.js",
    },
    plugins: [
        resolve({
            browser: true,
            jsnext: true,
            main: true,
        }),
        commonjs(),
        uglify(),
    ],
};

const nodeModules = {
    input: "src/index.js",
    output: [
        {
            format: "cjs",
            file: pkg.main,
        },
        {
            format: "esm",
            file: pkg.module,
        },
    ],
    plugins: [],
    external: ["perfect-scrollbar"],
};

module.exports = [browser, browserMin, nodeModules];
