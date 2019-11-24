import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';

const createBundle = ({minify} = {}) => {
	const bundle = {
		input: 'src/umd.js',
		output: {
			file: `dist/jquery-assert.umd.${minify ? 'min.js' : 'js'}`,
			format: 'umd',
			name: 'jquery-assert'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**' // Only transpile our source code
			})
		]
	};

	if (minify) {
		bundle.plugins.push(uglify());
	}

	return bundle;
};

export default [
	createBundle(),
	createBundle({minify: true})
];
