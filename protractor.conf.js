const crew = require('serenity-js/lib/stage_crew');

exports.config = {

    directConnect: true,
    framework: 'custom',
    //restartBrowserBetweenTests:true,
    frameworkPath: require.resolve('serenity-js'),
    serenity: {
        crew: [

        ],
        stageCueTimeout: 30 * 1000,
        dialect: 'cucumber'
    },

    specs: ['features/**/*.feature'],

    cucumberOpts: {
        require: ['features/**/*.ts', 'features/**/*.js'], // loads step definitions
        format: 'pretty',               // enable console output
        compiler: 'ts:ts-node/register'   // interpret step definitions as TypeScript
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--start-maximized',
                // "--headless",
                // "--disable-gpu",
                //"--window-size=1024x768"
                //'--incognito'
                // '--disable-extensions',
                // '--show-fps-counter=true'
            ]
        }
    }    
}
