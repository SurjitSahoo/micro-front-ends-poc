const { ModuleFederationPlugin } = require('webpack').container;
const fs = require('fs');
const path = require('path');

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const ExternalTemplateRemotesPlugin = require('../plugins/ExternalTemplateRemotesPlugin');

const override = config => {
  const mfConfigPath = '../../moduleFederation.config.js'

  if (fs.existsSync(path.join(__dirname, mfConfigPath))) {
    config.plugins.push(
      new ModuleFederationPlugin(require(mfConfigPath)),
      new ExternalTemplateRemotesPlugin()
    );
    config.output.publicPath = 'http://localhost:4000/';
  }

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);