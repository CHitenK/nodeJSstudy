const path = require('path');
module.export ={
    entry:'./libs/es6/dome1.js',
    output:{
        path:'./libs/es5/',
        filename:'dome1.js'
    },
    module:{
        loader:[
            {
                test:'/\.js|jsx$/',
                loader:'bable',
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}
