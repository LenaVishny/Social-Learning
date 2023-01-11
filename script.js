function postSize(message) {
    newMass = message.split('https')[0];
    return newMass.length;
}
postSize('Всем привет!');
postSize('Привет! https://github.com');