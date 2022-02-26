const {
    readdirSync
} = require("fs");
console.log("Welcome to the launching view!/--/ Discord: Iconical#9999".yellow);
module.exports = (client) => {
    try {
        let amount = 0;
        readdirSync("./commands/").forEach((dir) => {
            const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
            for (let file of commands) {
                let pull = require(`../commands/${dir}/${file}`);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                    amount++;
                } else {
                    console.log(file, `error -> missing a help.name, or help.name is not a string.`.brightRed);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
            }
        });
        console.log(`${amount} Commands Loaded`.brightGreen);
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
};
// Copyright © Iconical | Discord Music Bot by Iconical
// Github: https://github.com/iconicaal/
// Github Music-Bot Repository: https://github.com/iconicaal/Icosical