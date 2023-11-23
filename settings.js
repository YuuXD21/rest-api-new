const fs = require('fs')

global.creator = 'YuuXD'
global.deepaiapikey = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'
global.openaiapi = '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'
global.stableapi = 'hVBeyrikyYruPpJIW0pFKYJ2UDkULWFAk9zvw6WgA7MtEERVALvHa9XhO2d9'
global.MONGO_DB_URI = "mongodb+srv://YuuXD-Api:Bayujelek03@cluster0.ys3kg89.mongodb.net/?retryWrites=true&w=majority"
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" 
global.your_email = "yuuxdrestapi@gmail.com"
global.email_password = "ejiyridmrxeykwzb" 
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
