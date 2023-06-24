function largestAltitude(gain: number[]): number {
    let altitude = 0;
    let currentMax = 0;
    for (let i = 0; i <= gain.length; i++) {
        if (altitude > currentMax) {
            currentMax = altitude;
        }
        altitude+=gain[i]
    }
    return currentMax;
};
