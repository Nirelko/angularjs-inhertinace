var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: {
		index: './client/app.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].[hash].js'
	},
	module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                },
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less?$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.html$/,
                loader: ['html-loader']
            }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	resolve: {
        extensions: ['.js', '.less', '.css', '.html']
	},
	devtool: 'source-map',
    watch: true,
    mode: 'development',
    devServer: {
        port: 8080,
        inline: true,
        historyApiFallback: true,
    }
};