module.exports = {
    context : __dirname,
    entry : {
        javascript : './main.js'
    },
    output : {
        path : __dirname + '/build',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                query : {
                    optional : ['runtime'],
                    plugins : 'bem',
                    loose : ['es6.modules']
                }
            }
        ]
    }
};
