const { dependencies } = require('../package.json');

module.exports = {
	name: "shell_app",
	filename: "remoteEntry.js",
	exposes: {
		// './App': "./src/App.tsx"
	},
	remotes: {
		app1: 'app1@http://localhost:3001/remoteEntry.js',
		app2: 'app2@http://localhost:3002/remoteEntry.js',
	},
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