function range(start, limit){
    let tab  = [];

    for (let i = start; i <= limit; i++){
        tab.push(i);
    }
    return (tab);
}

module.exports = range;
