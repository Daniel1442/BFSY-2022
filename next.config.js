const path = require('path')
const getApplicationConfig = require('./application.config');
const publicRuntimeConfig = getApplicationConfig();

const nextConfig = {
    //assetPrefix: './',
    trailingSlash: true,
    reactStrictMode: false,
    poweredByHeader: false,
    publicRuntimeConfig,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')]
    }
}

module.exports = nextConfig
