function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;

    while (original > 0) {
        reversed = reversed * 10 + (original % 10);
        original = Math.floor(original / 10);
    }

    return x === reversed;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));