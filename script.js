function postSize(message) {
    newMass = message.split('https')[0];
    return newMass.length;
};
console.log(postSize('Всем привет!'));
console.log(postSize('Привет! https://github.com'));