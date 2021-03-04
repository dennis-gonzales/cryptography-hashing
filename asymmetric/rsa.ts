import * as NodeRSA from 'node-rsa';

console.log("Generating Keys...");
const key = new NodeRSA({ b: 2048 });
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

console.log(privateKey);
console.log();
console.log(publicKey);
console.log();

/** Declaration of secret */
const secret = 'Hello World!';

console.log("Encrypting the secret...");
const encryptedString = new NodeRSA({ b: 2048 })
    .importKey(publicKey).encrypt(secret, 'base64');

console.log("Encrypted Secret: ", encryptedString);
console.log();


/** Decrypting the secret */
console.log("Decrypting using correct key");
const decryptedString = new NodeRSA({ b: 2048 })
    .importKey(privateKey).decrypt(encryptedString, 'utf8');

console.log("Decryption suceeded: ", decryptedString);
console.log();


/** Decrypting the secret message using wrong private address */
try {
    console.log("Decrypting using wrong key");
    const key2 = new NodeRSA({ b: 1024 });
    const privateKey2 = key2.exportKey('private');

    new NodeRSA(privateKey2).
        decrypt(encryptedString, 'utf8');

    console.error("Decryption suceeded: This shouldn't happen!");

} catch (e) {
    console.log(`Decryption failed as expected with error:\n${e.message}`);
}