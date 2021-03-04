import * as NodeRSA from 'node-rsa';

/** Generating keys */
const key = new NodeRSA({ b: 1024 });
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

console.log(privateKey);
console.log();
console.log(publicKey);
console.log();

/** Declaration of secret message */
const secret = 'Hello World!';

/** Encrypting the secret message */
const encryptedString = new NodeRSA(publicKey)
    .encrypt(secret, 'base64');

console.log("encryptedString: ", encryptedString);
console.log();


/** Dncrypting the secret message */
const decryptedString = new NodeRSA(privateKey).
    decrypt(encryptedString, 'utf8');

console.log("decryptedString: ", decryptedString);
console.log();