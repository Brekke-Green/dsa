function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandy = Math.max(...candies);
    const result = candies.map(num => (num + extraCandies >= maxCandy))
    return result
};
