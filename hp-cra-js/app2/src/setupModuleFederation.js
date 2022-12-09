const { dependencies } = require('../package.json');

module.exports = {
	name: "app2",
	filename: "remoteEntry.js",
	exposes: {
		'./hello': "./src/mf/hello.js",
		'./AppRoutes': "./src/mf/routes.js"
	},
	// remotes: {
	// 	app1: "app1@http://localhost:3001/remoteEntry.js"
	// },
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