//com var
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() 
funcs[8]() 

// com let
const funcsT = []

for (let t = 0; t < 10; t++) {
    funcsT.push(function() {
        console.log(t)
    })
}

funcsT[2]() 
funcsT[8]() 
funcsT[0]()

