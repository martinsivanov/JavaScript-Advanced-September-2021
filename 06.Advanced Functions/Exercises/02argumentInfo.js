function solve(...params) {

    let result = [];
    let counts = {};
    params.forEach(el => {
        let type = typeof (el);
        result.push(`${type}: ${el}`);
        counts[type] = counts[type] !== undefined ? counts[type] + 1 : 1;
    })

    Object.keys(counts)
        .sort((a, b) => (counts[b] - counts[a]))
        .forEach(key => result.push(`${key} = ${counts[key]}`));

    return result.join('\n')
}

console.log(solve('cat', 42, 42, function () { console.log('Hello world!'); }));