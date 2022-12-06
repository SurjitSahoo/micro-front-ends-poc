const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

const deps = require("./package.json").dependencies;

module.exports = {
	output: {
		publicPath: 'auto',
	},

	entry: './src/index',
	mode: 'development',

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3000, // change me
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},

	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react', '@babel/preset-typescript'],
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'react-mf-template-v2', // change me
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
