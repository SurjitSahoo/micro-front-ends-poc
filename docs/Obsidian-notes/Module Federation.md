Webpack’s `ModuleFederationPlugin` allows a build to provide or consume modules with other independent builds at runtime.

To use this feature just add the plugin in webpack config as follows

```js
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
	...rest of the configs
	plugins: [
		new ModuleFederationPlugin({
			name: 'app1', // name of the [[container]]
			fileName: 'remoteEntry.js',
			remotes: {
				app2Alias: 'app2@http://app2.com/remoteEntry.js',
			},
			exposes: {
				'./ModuleName': './path/to/module',
			}
		})
	]
}
```


## Concepts

### [[Remote Module]]
Remote modules are loaded asynchronously during next chunk load operation. Chunk load operation is loading a javascript chunk, which is also asynchronous, e.g lazy loading. But on initial app load, there's no lazy loading, so we've to put a deliberate async loading to put a promise in between or we have to lazy load the remote module.

### Host
Any application that loads first when we launch an application in the browser is **host**, then host loads the remote modules through `remoteEntry` 

## Module Federation Config Options

* #### runtime
	* Entry
	* Create a new runtime chunk with the specified name??
	* I have no idea what the hell is this!!!! 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨
	  
```js
new ModuleFederationPlugin({
	runtime: 'some-runtime'
})
```

* #### shared
	* With this option a [[remote]] can opt in to share it's dependencies required for the exposed modules.
	* There are many ways to share dependencies.
```js
new ModuleFederationPlugin({
  // moment and lodash are added to shared library
  // There wont be any version checks, highest available will be used.
  // available version will be infered from what's installed, 
  // and not from the wepack application's package.json, 
  // because what your package.json says is not the same as installed bersion.
  // YEAH.. IT DOESN'T GIVE A LOT OF CONTROL
	shared: ['moment', 'lodash']
})
```

```js
new ModuleFederationPlugin({
	shared: {
		// npm style required version mentioning.
		// available lodash version will be infered from lodash's package.json file
		lodash: '^4.23.0'
	}
})
```

```js
const deps = require('./package.json').dependencies

new ModuleFederationPlugin({
	shared: {
		// MORE CONTROLL
		// available lodash version will be infered from lodash's package.json file
		// it'll not throw error, if the available version doesn't match 
		// the requiredVersion. it'll only print a warning.
		react: {
			requiredVersion: deps.react, // use what my package.json says
			singleton: true, // we dont want multiple instances of react in the dom
		}
	}
})
```

#####  Shared libraries config options
	All these options act as hints for webpack to share/pick the correct version of the shared libraries. 

- `requiredVersion: string`
  Give a hint to webpack about required version of the shared library, it'll use the highest version available which is also acceptable according to the `requiredVersion`.

- `singleton: boolean`
  Always have single instance of the library. `singleton` + `requiredVersion` will always use shared version of the lib to ensure single instance in the DOM, but if the shared version doesn't match the `requiredVersion`, it'll print a warning.

- `eager: boolean`
  download the provided module and fallback module directly, don't download asynchronously on demand.
  
- `strictVersion: boolean`
  when `strictVersion` is true, webpack will will reject the shared library if version is not valid. It defaults to `true` when the library is locally available to fallback and the shared library is not `singleton`.
  If the shared lib is `singleton` and `strictVersion` is true, then webpack has to pick the highest compatible version available else throw error when available version is not compatible.
  
- `version: string | false`
  I have no idea what the hell is this!!!! 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨

- `shareScope: string`
  Put a scope in the shared library. It's like namespace. The library will be shared within a certain scope, not globally.

- `shareKey: string`
  Alias the shared library, share `react` as `my-react` or `react-18`

- `packageName: string`
  I have no idea what the hell is this!!!! 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨

- `import: string | false`
  I have no idea what the hell is this!!!! 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨

### More Examples
```js
new ModuleFederationPlugin({
	shared: {
		// there is no local version provided
		// it will emit a warning if the shared vue is < 2.6.5 or >= 3
		vue: {
			import: false,
			requiredVersion: '^2.6.5',
		},
	},
})
```

