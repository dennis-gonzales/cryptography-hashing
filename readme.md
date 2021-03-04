## CRYPTOGRAPHY
- Cryptography converts data into a particular form so that only those for whom it is intended can read and process it. The converted data is however unreadable for an unauthorized user

    ### 1. SYMMETRIC ENCRYPTION/DECRYPTION
    - A symmetric key algorithm requires the same key for both encryption of a plaintext and decryption of a cipher text.
    - This same key is also called a shared secret.
    - Symmetric key algorithms are generally much faster to encrypt and decrypt a message than asymmetric key algorithms.
    - AES (Advanced Encryption Standard), Triple DES (Data Encryption Standard) uses this algorithm

    ### 2. ASYMMETRIC ENCRYPTION/DECRYPTION
    - An asymmetric key algorithm requires two keys called a public and a private key.
    One of the key is used for encryption of a plaintext and the other key is used for
    decryption of the cipher text
    - A big disadvantage is that asymmetric key algorithms are generally much slower to encrypt and decrypt a message than symmetric key
    algorithms
    - The advantage of using an asymmetric key algorithm is that any sender can encrypt a
    message using the receiver public key, but only the receiver can decrypt the cipher
    text using its private key
    - A public key and private key are mathematically interconnected. Meaning each public
    key has only one corresponding private key.
    -  RSA (Rivest Shamir Adleman), ECDSA (Elliptic Curve Digital Signature Algorithm) uses this algorithm
    - In Blockchain the Elliptic Curve Digital Signature Algorithm is often used.

## HASH
- A hash function converts data of any size into a string of a fixed size
- A small change in the data will result in a complete different hash
- When to different inputs produces the same hash, it is called a hash collision
- A hash function is considered **“collision resistant”** when it is very hard to find two inputs that hash to the same output
- There are many different hash functions. Here are just a few:

 | Hash function | Hash length | Secure |
 | :--- | :--- | :--- |
 | md5 | 128 bits (32 symbols) | `No` |
 | ripemd160 | 160 bits (40 symbols) | `Yes` |
 | sha1 | 160 bits (40 symbols) | `No`  |
 | sha256 | 256 bits (64 symbols) | `Yes` |
 | keccak-256 | 256 bits (64 symbols) | `Yes` |


*md = message digest*

*ripemd = RACE integrity primitives evaluation message digest*

*sha = secure hash algorithm*


## Digital Signature
- A digital signature is equivalent of a handwritten signature but it is much more secure, a handwritten signature can be faked
- A digital signature provides the recipient the following information:
   1. the message was created by a known sender **(authentication)**,
   2. the sender cannot deny having sent the message **(non-repudiation)**,
   3. the message was not altered in transit **(integrity)**


> Resources credit: [Mobile Fish](https://www.mobilefish.com)