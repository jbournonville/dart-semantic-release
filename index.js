import prepareDart from "./lib/prepare.js";
import successDart from "./lib/success.js";


let prepared;


 async function prepare(pluginConfig, context) {

    await prepareDart(pluginConfig, context);

    prepared = true;
}

 async function success(pluginConfig, context) {
     if (prepared) {
         await successDart(pluginConfig, context);
     }
}


module.exports = { prepare, success };