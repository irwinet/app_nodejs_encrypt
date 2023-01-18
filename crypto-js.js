// Importing the crypto module
const crypto=require("crypto-js")
  
// Initializing the original data
var data = "Hola Mundo"
  
// Defining the secret key
var key = "pwd@1234"
  
// Encrypting the data using the password key
var encrypted = crypto.AES.encrypt(data, key).toString();
console.log("Encrypted data -- ")
  
// Printing the encrypted data
console.log(encrypted)
console.log("Decrypted data -- ")
  
// Decrypting the data using the same password key
var decrypted = crypto.AES.decrypt(encrypted, key)
  .toString(crypto.enc.Utf8)
console.log(decrypted)