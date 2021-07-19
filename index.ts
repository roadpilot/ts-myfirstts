// looks like ts is just like javascript except the data type constructors
// have to be made differently:

    let hash : {[key:string]:string; } = {}
    inputLines.forEach((el,i) => {
        if (i>0){
            if (!hash[el]){
                hash[el]=el
                console.log(el)
            }
        }
    })
    // console.log(inputLines)