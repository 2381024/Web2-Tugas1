function staircase(length: number): void {
    for (let i = 1; i <= length; i++) {
        let spaces = ' '.repeat(length - i);
        let hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}
staircase(6);