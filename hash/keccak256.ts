import * as keccak256 from 'keccak256';
 
const message = 'I love thicc thigs';

console.log(keccak256(message).toString('hex'));

/** keccak256
 * Using buffer
 * Converting to string hex
 */
console.log(keccak256(Buffer.from(message)).toString('hex'));