'use strict';

const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');

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
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=80192&name=[name].[ext]'
			}
		]
	},
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
};