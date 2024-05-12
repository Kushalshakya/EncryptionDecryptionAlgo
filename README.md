# JavaScript Encryption and Decryption Algorithm

This is a basic encryption and decryption algorithm implemented with pure JavaScript. It utilizes a simple shifting algorithm to encrypt text, and the same algorithm in reverse to decrypt it.

## Usage

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser.
3. Enter the text you wish to encrypt or decrypt into the provided input field.
4. Click the "Encrypt" button to encrypt the entered text.
5. Click the "Decrypt" button to decrypt the encrypted text.
6. You can copy the encrypted or decrypted text to your clipboard by clicking the "Copy" button.

## Algorithm

The encryption algorithm shifts each character in the input text by adding 5 to its ASCII value, while the decryption algorithm reverses this process by subtracting 5 from each character's ASCII value.

```javascript
// You can shift the value 5 to dynamic value for better encryption/decryption

const str = arr[i].charCodeAt() + 5; //Line 20

const dec = decryptionData[d].charCodeAt() - 5; //line 45
```

## Example

```
User Input:
    This is an encryption decryption algorithm focused on exploring the limitations of javascript concepts.

    MySecretPassword@964Kush

Encrypted Output:
    Ymnx%nx%fs%jshw~uynts%ijhw~uynts%fqltwnymr%kthzxji%ts%j}uqtwnsl%ymj%qnrnyfyntsx%tk%of{fxhwnuy%htshjuyx3

    R~XjhwjyUfxx|twiE>;9Pzxm
```

## Dependencies

This project does not have any external dependencies and does not require any installation steps other than cloning the repository.

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please feel free to open an issue or submit a pull request.
