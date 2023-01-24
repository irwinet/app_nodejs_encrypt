const crypto = require("crypto");

function encrypt(plainText, key, outputEncoding = "base64") {
    const cipher = crypto.createCipheriv("aes-256-ecb", key, null);
    let encrypted = cipher.update(plainText, 'utf8', outputEncoding)
    encrypted += cipher.final(outputEncoding);
    return encrypted;
}

function decrypt(cipherText, key, outputEncoding = "utf8") {
    const cipher = crypto.createDecipheriv("aes-256-ecb", key, null);
    let encrypted = cipher.update(cipherText)
    encrypted += cipher.final(outputEncoding);
    return encrypted;
}

const KEY = Buffer.from("b14ca5898a4e4133bbce2ea2315a1916", "utf8");

console.log("Key length (bits):", KEY.length * 8);
const encrypted = encrypt("Hola Mundo", KEY, "base64");
console.log("Encrypted string (base64):", encrypted);

// And if we wish to decrypt as well:
const decrypted = decrypt(Buffer.from(encrypted, "base64"), KEY, "utf8")
console.log("Decrypted string:", decrypted);
