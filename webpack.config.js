'use strict';

const DEV_SERVER_PORT = 8082;
const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');
const pkg = require('./package.json');

//const libs = Object.keys(pkg.dependencies)
//	.filter((dep) => dep !== 'bootstrap');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js'
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
				loader: "style!css?sourceMap"
			},
			{
				test: /\.less$/,
				loader: "style!css?sourceMap!less?sourceMap"
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=80192&name=[name].[ext]'
			},
			{
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	resolve: {
		root: path.join(__dirname, 'app'),
		extensions: ['', '.js']// you can now require('file') instead of require('file.js')
	},
	devtool: 'source-map',
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	],
	devServer: {
		port: DEV_SERVER_PORT,
		contentBase: './app',
		colors: true,
		noInfo: true,
		historyApiFallback: true
	}
};