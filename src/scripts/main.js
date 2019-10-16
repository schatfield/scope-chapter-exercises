
// c is for cookie exercise"

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


for (let x = 1; x< cookies.length; x++) {
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


// Mod Squad exercise //

{
    const ModSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        }
    }
        const HTMLRepresentation;

    ModSquad.members.forEach(member => {
        const HTMLRepresentation = `<div>${member}</div>`

    })

}

console.log(HTMLRepresentation)

//     document.querySelector(".show-info").innerHTML = HTMLRepresentation
// }
// checkout dom student component exercise

