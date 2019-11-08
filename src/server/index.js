 require('@babel/register')({
     ignore: [/(node_modeles)/],
     presets: ['@babel/preset-env','@babel/preset-react'],
     only: [__dirname + "/../../"],
     ignore: [__dirname + "/../../**/node_modules"],
 });

 require('./server.js');