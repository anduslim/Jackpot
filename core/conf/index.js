var tool = require('cloneextend'),
    conf = {};
    conf.production = {
        application:    {
            errorHandler: {},
            username    : 'demo',
            password    : 'Que62msjiDU0b2yYvi2zbavw' // bEdESpuGU3rewasaphEfaKedR7r=M#fU
        },
        server:         {
            port        : '80'
        }
    };
    conf.development = {
        db:             {
            mysql:          {
                host        : 'localhost',
                port        : 3306,
                user        : 'user',
                password    : 'pass',
                database    : 'jackpot'
            }
        },
        application:    {
            errorHandler: { dumpExceptions: true, showStack: true }
        }
    };
    conf.defaults = {
        application:    {
            salt        : '1234567890QWERTY',
            username    : 'user',
            password    : 'password',
            realm       : 'Authenticated',
            routes      : ['prize', 'list'],
            middleware  : ['compress','json','urlencoded','logger']
        },
        server:         {
            host        : 'localhost',
            port        : 80
        }
    };

exports.get = function get(env, obj){

    var settings = tool.cloneextend(conf.defaults, conf[env]);
    return ('object' === typeof obj) ? tool.cloneextend(settings, obj) : settings;
}