function handlerPalindrome() {
    // Get input data and manipulate them
    const word = document.getElementById('input-box').value;

    // Remove non-alphanumeric characters and convert to lowercase
    const str = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reverse
    const str2 = str.split('').reverse().join('');

    if (str === str2) {
        document.getElementById('alert').innerHTML = ` Yes, <span>${word}</span> is a palindrome!`
    } else {
        document.getElementById('alert').innerHTML = ` No, <span>${word}</span> is not a palindrome.`
    }
}
