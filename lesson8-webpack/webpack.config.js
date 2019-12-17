const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',

	entry: {
		index: './src/index.ts'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [new VueLoaderPlugin(),new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: [/node_modules/],
				options: {
					esModule: true
				}
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: [/node_modules/],
				options: { appendTsSuffixTo: [/\.vue$/] }
			},


		]
	},

	devServer: {
		open: true
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js",".vue"]
	}
};
