

export default function GenerateCode() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // GENERATE A RANDOM 4 DIGIT CODE!

    // FORMAT: first is digit, then alphabet, then digit , then alphabet like 0c1a

    // index 0 to 25
    //   Math.floor(Math.random()*letters.length) // GENERATES A RANDOM NUMBER B/W 0-25 
    // Math.floor(Math.random()*10).toString() generates a digit between 0 to 9 and converts it into string
    // then this code is combined
    const code = letters[Math.floor(Math.random() * letters.length)] + Math.floor(Math.random() * 10).toString() + letters[Math.floor(Math.random() * letters.length)] + Math.floor(Math.random() * 10)
    // console.log(code)
    return code;
}
