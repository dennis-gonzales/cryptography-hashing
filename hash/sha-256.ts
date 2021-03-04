/** Secure Hash Algorithm */

import { sha256, sha224 } from 'js-sha256';

const message = "I love thicc thigs";
const key = "key";

console.log();
console.log("--------------------------------------------");
console.log("Standard");
console.log("--------------------------------------------");
console.log();

console.log("sha-256: ", sha256(message));
console.log("sha-224: ", sha224(message));


console.log();
console.log("--------------------------------------------");
console.log("SHA256 Instantiation");
console.log("--------------------------------------------");
console.log();


const sha256Hash = sha256.create();
sha256Hash.update(message);
sha256Hash.hex();
console.log("sha-256(hex): ", sha256Hash.hex());
console.log("sha-256(array): ", sha256Hash.array());


console.log();
console.log("--------------------------------------------");
console.log("SHA256 HMAC Instantiation");
console.log("--------------------------------------------");
console.log();

 
/** Keyed-Hashing for Message Authentication (HAMC) */
console.log("sha-256 hmac: ", sha256.hmac(key, message));
console.log("sha-224 hmac: ", sha224.hmac(key, message));
 
const sha256HMACHash = sha256.hmac.create(key);
sha256HMACHash.update(message);
console.log("sha-256 hmac(hex): ", sha256HMACHash.hex());
console.log("sha-256 hmac(array): ", sha256HMACHash.array());