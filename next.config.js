const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
require("dotenv").config();

function HACK_removeMinimizeOptionFromCssLoaders(config) {
    console.warn(
        'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
    );
    config.module.rules.forEach(rule => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach(u => {
                if (u.loader === 'css-loader' && u.options) {
                    delete u.options.minimize;
                }
            });
        }
    });
}

module.exports = withPlugins([
    [withCSS({
        webpack(config) {
            config.node = {
              fs : 'empty'
            };
            HACK_removeMinimizeOptionFromCssLoaders(config);
            return config;
        },
        env : {
            backendhost : process.env.backendhost,
            backendport : process.env.backendport,
        }
    })],
    [withImages],
]);
