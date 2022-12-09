const { dependencies } = require('../package.json');

module.exports = {
	name: "hp_cra_mf_template",
	filename: "remoteEntry.js",
	exposes: {
		'./App': "./src/App.tsx"
	},
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