import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  const htmlPluginSearchResult = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0];
  if (htmlPluginSearchResult) {
    const { plugin: HtmlWebpackPlugin } = htmlPluginSearchResult;
    HtmlWebpackPlugin.options.favicon = resolve(__dirname, './assets/favicon.ico');
  }

  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/assets`, from: `icon.png` }]));
}
