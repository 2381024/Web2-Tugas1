function birthdayCakeCandles(candles: number[]): number {
    let maxHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxHeight).length;
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));