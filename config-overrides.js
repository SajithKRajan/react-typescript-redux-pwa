const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/manifest.json',
                    transform(content, path)    {
                        return content
                            .toString()
                            .replace(
                                /%\w+%/g,
                                (m) => process.env[m.slice(1, m.length - 1)],
                            );
                    },
                },
            ],
        })
    );

    return config;
}
