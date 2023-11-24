const md5 = require('md5');

let string_to_encrypt = 'abcdef';

let encrypted_string = '';
let decrypted_string = '';

function encrypt_string(string) {
    return md5(string);
}

function decrypt_string(string) {
    return md5(string).decode;
}

//  Encrypt the string
encrypted_string = encrypt_string(string_to_encrypt);
console.log(encrypted_string);

// console.log("The encrypted string is " + encrypt_string(string_to_encrypt));


//  Decrypt the string
decrypted_string = decrypt_string(encrypted_string);
console.log(decrypted_string);
