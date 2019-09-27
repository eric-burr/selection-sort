console.log("hellow ")

let array = [4, 2, 6, 4, 343, 43, 232, 65, 34, 23, 1, 342,2432, 44]
let colors = [6, "red", 3, 6, 2, "blue", "squrril", "bear", 45]
newArray = []
let lowest = colors[0]
let index= 0;

//find smallest number in array
while(colors.length > 0){
    index = 0;
    lowest = colors[0];

    for(let i = 1; i < colors.length; i++) {
        if(colors[i] < lowest) {
            lowest = colors[i]
            index = i
            

        } 
    }
    console.log("the index", index)
    console.log("the lowest", lowest)
    newArray.push(lowest)
    colors.splice(index, 1)
    
    console.log("newArray: " + newArray)


}


//send item to start of new array

