function solve(input) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}
solve(['alpha', 
'beta', 
'gamma']
);
solve(['test', 
'Deny', 
'omen', 
'Default']
);