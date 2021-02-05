const path = require('path')
module.exports = async ({ config, mode }) => {
    console.log(mode);
    Object.assign(config.resolve.alias,{
        '@': path.resolve(__dirname, '../src')
    })
    config.module.rules.push({
        test:/\.(sass|scss)$/,
        use: ['style-loader', 'css-loader',{
            loader:'sass-loader',
            options:{}
        }],
        include: path.resolve(__dirname, '../src/'),
    })
    return config
}
