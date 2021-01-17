const joinNames = (namesObj) => {
     let allNames = namesObj.map(element => element.name);
    if 
     (allNames <= 2) {
            return `${allNames[0]} & ${allNames}[1]`;
    } 
    else {
        const nextName = `${allNames.pop()}`;
        return `${allNames.join(", ")} & ${nextName}`;
    }
};

module.exports = joinNames;
