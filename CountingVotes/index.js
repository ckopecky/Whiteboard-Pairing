const countingVotes = (arr) => {
    let counts = {};

    arr.forEach(item => {
        counts[item] = ++counts[item] || 1;
    });

    let max = -Infinity;
    let name = "";

    for(let item in counts) {
        if(counts[item] >= max) {
            max = counts[item];
            name = item;
        }
    }
    return name;
}

module.exports = countingVotes;