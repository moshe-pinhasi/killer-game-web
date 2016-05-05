'use strict';

const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');
const pkg = require('./package.json');

const libs = Object.keys(pkg.dependencies)
	.filter((dep) => dep !== 'bootstrap');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js',
		libs: libs
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	module: {
		preLoaders: [
			{test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
		],
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?sourceMap"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader?sourceMap!less-loader?sourceMap"
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader?limit=80192&name=[name].[ext]'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
};