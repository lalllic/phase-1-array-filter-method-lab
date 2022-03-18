const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(driverArray, name) {
    const matching = driverArray.filter(n => n.toLowerCase() == name.toLowerCase());
    return matching;
}

function fuzzyMatch(driverArray, letter) {
    const matching = driverArray.filter(n => n.slice(0, 2) == letter);
    return matching;
}

console.log(fuzzyMatch(drivers, "Sa"));