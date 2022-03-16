export function getConfig(config){
    try{
        return require(`./config/${config}.json`)
    }
    catch(error){
        return null
    }
}