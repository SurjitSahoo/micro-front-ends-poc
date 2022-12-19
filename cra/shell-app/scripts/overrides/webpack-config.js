const { ModuleFederationPlugin } = require('webpack').container;
const fs = require('fs');
const path = require('path');

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

/**
 * @returns {string}
 */
function getPublicPath() {
  let publicPath = 'auto';
  const providedPath = process.env.PUBLIC_URL;

  if (providedPath && providedPath.length >= 0 && providedPath.startsWith('http')) {
    publicPath = providedPath.endsWith('/') ? providedPath : providedPath + '/';
  }
  return publicPath
}

const override = config => {
  const mfConfigPath = '../../moduleFederation.config.js'

  if (fs.existsSync(path.join(__dirname, mfConfigPath))) {
    config.plugins.push(new ModuleFederationPlugin(require(mfConfigPath)));
    config.output.publicPath = getPublicPath();
  }

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
