const fs = require('fs')

fs.readFile('thang.txt', (err, data) => {
    if (err) console.log(err)
    else {
        let arr = data.toString().split('\n')
        let tmp = []
        let res = {}
        for (let i of arr) {
            tmp.push(i.split('\t'))

        }
        for (let i of tmp) {
            let a=i[1]
            Object.assign(res,{[a]:i[3]})
        }
        let a = JSON.stringify(res, null, 2);
        fs.writeFile('res.json',a,(err)=>{
            if(err){console.log(err)}
            else{console.log('ko loi')}
        })
    }
})