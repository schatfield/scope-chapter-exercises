
// c is for cookie exercise"

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// conjunction function exercise//

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}
// ' "Master, "Card" ' are the arguments being passed into the function (firstWord, secondWord) on the defined variable 'const conjunction'//
conjunction("Master", "Card")
// console.log(conjoinedWord)

// see above: the console.log(conjoinedWord). this is in the example (see chapter exercise call "conjunction function") is outside of the scope that the defined variable "const conjoinedWord = `${firstWord} ${secondWord}`" is currently in- conjoinedWorld is inside the curly brackets which is the local scope of the function //


// // Mod Squad exercise: original code from chapter//

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// Move the documents.query selector into the scope of the original and main function body (inside the castle) so that const HTMLRepresentation can be accessed by the query selector.


// Mod Squad: exercise solution

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }

    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`

        // this is the original code for the forEach function above. const HTMLRepresentation += `<div>${member}</div>`.... we removed the "const" from inside the function. leaving it there makes it that we're trying to declare another variable inside the function. We declared the variable already right above the forEach loop (let HTMLRepresentation = `<h1>The Mod Squad</h1>`)//
        // the "+=" in HTMLRepresentation += `<div>${member}</div>` is VERY important. this is what makes the loop display the whole array on the dom and not just the last item in the array. if we use ONLY "=" the loop would only display the last item in the array because it runs through the whole array on the loop without ADDING them to the dom first?//

    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation

}

// // document.querySelector(".show-info").innerHTML = HTMLRepresentation//

// Moved the document.query selector into the scope of the original and main function body (inside the castle) so that const HTMLRepresentation can be accessed by the query selector.



// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

// this is a variable storing an array or arrays, note there are 2 sets of index positions: one for the array and another for each array inside it//

let invalids = 0;

// this variable, "let invalids", that we created is in global scope. It needs to be in the global scope because the console.log targeting this variable at the bottom of this exercise is also in global scope. if the variable was made inside the scope of the "for" or either of the "if" statements, the consolelog wouldn't be able to see it.//

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    // locations[k] is referring to each small array inside the array- confirm this.
    
    //directly below in the first "if" conditional, "currentLocation[0]" is reffering to the "0" index position of each small array. for example, the 3rd index position array's 0 index position is "2"//

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        invalids += 1;
        // this is where you need to put your newly created variable so that it is run through the "for" loopalong with the variable "invalidLocation". This has to do with scope. This first "if" statement is run through the for loop. you want += here so that itterates through everything in the array and keeps counting on top of each other. if you just put a + here it woul count but it would increasingly increment on itself. if you only use a n equal sign it wouldn't count it would only cancel itself out to that number you equal it to.//

        // Also, you use "1" because we count by ones and wwe want to count each one //
        console.log("invalid location", invalidLocation)

        // if the zero position of each array (in the array) is greater than 2, the variable "invalidLocation" will be equal to true//

        if (invalidLocation) {
            console.log("This location is invalid")
        }

        // this second "if" statement only happens if the first one is true? //

    }
}

console.log(`There were ${invalids} invalid locations`)

// what we need to do is to create another variable that can count independently of the for loop- but it also has to be inside the for loop //

// should this be an else if?

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
