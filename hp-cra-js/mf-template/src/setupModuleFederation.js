const { dependencies } = require('../package.json');

module.exports = {
	name: "mf_template_js",
	filename: "remoteEntry.js",
	exposes: {
		'./hello': "./src/mf/hello.js",
		'./AppRoutes': "./src/mf/routes.js"
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