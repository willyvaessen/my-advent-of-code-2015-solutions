const md5 = require('md5');
// const input = 'abcdef';
// const input = 'abcdef609043';
// const secret = 'pqrstuv';
const secret = 'yzbqklnj';
// let counter = 1048970;
let answer = '';
let string_to_check = '';
let input_string = '';



for (let counter = 0; counter <= 9999999; counter++){
    // console.log(checkMD5(secret, counter));
    if (checkMD5(secret, counter) === "00000") {
        answer = counter;
        break;
        // console.log(counter);

    }
    // console.log(counter);
    // console.log("Final answer is " + answer);
}


console.log("Final answer is " + answer);



function checkMD5(secret, counter) {
    input_string = secret + counter.toString();
    // console.log("Now checking: " + input_string);
    let md5hash = md5(input_string);
    string_to_check = md5hash.charAt(0) + md5hash.charAt(1) + md5hash.charAt(2) + md5hash.charAt(3) + md5hash.charAt(4) + md5hash.charAt(5);
    // console.log("Now checking string " + string_to_check);
    if (string_to_check === '000000') {
        // console.log("Found it!!!");
        answer = counter;
        console.log("The answer is " + counter);
        return counter;
    }
    // else {
    //     console.log("That's not the answer")
    // }
}
//
// checkMD5(secret, 1048961);
// // checkMD5(secret, 1048962);
// // checkMD5(secret, 1048963);
// // checkMD5(secret, 1048964);
// // checkMD5(secret, 1048965);
// // checkMD5(secret, 1048966);
// // checkMD5(secret, 1048967);
// // checkMD5(secret, 1048968);
// checkMD5(secret, 1048969);
// checkMD5(secret, 1048970);
