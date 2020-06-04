mirandaKnight = {
    eyes: 'Blue',
    hair: [
        'blonde', 
        'dyed'
    ],
    yearsAlive: 30,
    pretty: true,
    asleep: true,
    wakeUp: function () {
        this.asleep = false;
    },
    hug: function () {
        alert('HUG <3');
    },
    tuDors: function (grmbl) {
        console.log('Est-ce que tu dors bb? ' + grmbl + '!');
        if (grmbl == true) {
            this.asleep = true
        } else {
            this.asleep = false
        };
    }
};