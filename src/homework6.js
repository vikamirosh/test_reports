
export const sumPoints = (studentPoints) => {
    const errors = Object.values(studentPoints).map(function(current) { 
        if (typeof current === 'number' && current >= 0) {
            return false
        } else {
            return true
        }
    });
    if (errors.includes(true)) {
        return 'invalid value'
    } else {
        const result = Object.values(studentPoints).reduce(function(sum, current) {
            return sum + current;
        }, 0);
        return result
    }
}
