const { dependencies } = require('./package.json');

module.exports = {
	name: 'cra-mf-template', // change me
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			import: 'react', // fallback is also react
			shareScope: 'default',
			requiredVersion: dependencies.react,
		},
		"react-dom": {
			singleton: true,
			requiredVersion: dependencies["react-dom"],
		},
	}
}