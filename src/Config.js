function isValidURL(config) {
    // cheapest URL validation I could think of
    var pattern = new RegExp('^(https?:\\/\\/)(.*?).json$','i'); 
    return !!pattern.test(config);
}

async function loadConfigFromURL(configURL) {
    let response = await fetch(configURL)
    let configJSON = await response.json();
    return configJSON;
}

function loadConfigFromLocal(configName) {
    // don't try to `../../file.js` me, boy!
    configName = configName.replace(/^.*[/]/, ''); 
    return require(`./config/${configName}.json`)
}

export function getConfig(config) {
    var configJSON = {};
    try {
        if (isValidURL(config)) {
            configJSON = loadConfigFromURL(config);
        } else {
            configJSON = loadConfigFromLocal(config);
        }
        if (!config.version) {
            // add version property if it's missing
            config.version = "X.Y.Z";
        }
        return configJSON;
    }
    catch(error){
        return null
    }
}