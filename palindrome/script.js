document.getElementById('checkButton').addEventListener('click', () => {
    const input = document.getElementById('wordInput').value.trim();
    const result = document.getElementById('result');

    if (!input) {
        result.textContent = "Please enter a word.";
        result.style.color = "red";
        return;
    }

    const isPalindrome = input.toLowerCase() === input.split('').reverse().join('').toLowerCase();
    if (isPalindrome) {
        result.textContent = `"${input}" is a palindrome!`;
        result.style.color = "green";
    } else {
        result.textContent = `"${input}" is not a palindrome.`;
        result.style.color = "red";
    }
});
