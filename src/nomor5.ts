function angryProfessor(k: number, a: number[]): string {
    let onTimeStudents = a.filter(time => time <= 0).length;
    return onTimeStudents >= k ? "NO" : "YES";
}
console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));