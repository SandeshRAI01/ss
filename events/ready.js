module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {

        console.log(`        
        
 
   ██████╗ ██████╗  █████╗ ███╗  ██╗ █████╗  █████╗ ██╗      █████╗    ██████╗████████╗ █████╗ ██████╗ ███████╗
   ██╔══██╗██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔══██╗██║     ██╔══██╗  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════ 
   ██████╦╝██████╔╝███████║██╔██╗██║██║  ╚═╝██║  ██║██║     ███████║  ╚█████╗    ██║   ██║  ██║██████╔╝█████╗
   ██╔══██╗██╔══██╗██╔══██║██║╚████║██║  ██╗██║  ██║██║     ██╔══██║   ╚═══██╗   ██║   ██║  ██║██╔══██╗██╔══╝
   ██████╦╝██║  ██║██║  ██║██║ ╚███║╚█████╔╝╚█████╔╝███████╗██║  ██║  ██████╔╝   ██║   ╚█████╔╝██║  ██║███████╗
   ╚═════╝ ╚═╝ ╚═╝ ╚═╝  ╚═╝╚═╝  ╚══╝ ╚════╝  ╚════╝ ╚══════╝╚═╝  ╚═╝  ╚═════╝    ╚═╝    ╚════╝ ╚═╝  ╚═╝╚══════╝ V1.6`)




    let green = '\x1b[32m',
    colorful = (color, string, reset = '\x1b[0m') => color + string + reset
    console.log(colorful(green, 
        
`✅ - [BOT] online!|${client.user.username}    
                      
✔ Discord: https://discord.gg/emF6bCJFdU `))   




        var compteurStatus = 1
        setInterval(async () => {
            status =  [`🔥 Brancola Community`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.youtube.com/watch?v=6GCHMSA8f_I&t"
                }],
                  status: "streaming"})
        }, 5000);
    }
}
