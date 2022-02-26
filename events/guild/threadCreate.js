module.exports = async (client, thread) => {
    if(thread.joinable){
        try{
            await thread.join();
        }catch (e){
            console.log(e)
        }
    }
}
// Copyright © Iconical | Discord Music Bot by Iconical
// Github: https://github.com/iconicaal/
// Github Music-Bot Repository: https://github.com/iconicaal/Icosical
