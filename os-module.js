const os = require('os')

//Informacije user-a
const user = os.userInfo()
console.log(user)

//Koliko se system pokrece u sekundama
const system = os.uptime()
console.log(system)
