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


/** Decrypting the secret message */
const decryptedString = new NodeRSA(privateKey).
    decrypt(encryptedString, 'utf8');

console.log("Decrypting using correct key");
console.log("Decryption suceeded: ", decryptedString);
console.log();


/** Decrypting the secret message using wrong private address */
try {
    const key2 = new NodeRSA({ b: 1024 });
    const privateKey2 = key2.exportKey('private');

    console.log("Decrypting using wrong key");
    new NodeRSA(privateKey2).
        decrypt(encryptedString, 'utf8');

    console.error("Decryption suceeded: This shouldn't happen!");

} catch (e) {
    console.log(`Decryption failed: ${e.message}`);
}