const fs = require('fs')

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(`Error reading file: ${err}`)
        return;
    }
    const first = result
    fs.readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log(`Error reading file: ${err}`)
        }
        const second = result
        fs.writeFile('./content/async.txt',
        `Ovo su oba texta: ${first}, ${second}.`,
        (err, result) => {
            if(err) {
                console.log(err)
            }
            console.log(result)
        })
    })
})