var hiHiHi = function () {
    var currentClassName = document.getElementById('hiHi').className;
    if (currentClassName == 'hiHi') { 
        document.getElementById('hiHi').className = 'hiHi altr';
    } else {
        document.getElementById('hiHi').className = 'hiHi';
    }
}


// var hiHiHi = function () {
//     document.getElementById('hiHi').className= 'hiHi altr';
// }

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