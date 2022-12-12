const { ModuleFederationPlugin } = require('webpack').container;
const fs = require('fs');
const path = require('path');

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const { FederatedTypesPlugin } = require('@module-federation/typescript');

const override = config => {
  const mfConfigPath = '../../moduleFederation.config.js'

  if (fs.existsSync(path.join(__dirname, mfConfigPath))) {
    const federationConfig = require(mfConfigPath);
    config.plugins.push(new FederatedTypesPlugin({ federationConfig }));
    config.output.publicPath = 'auto';
  }

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
