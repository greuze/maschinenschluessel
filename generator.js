const days = 30;
const rotors = ['I', 'II', 'III', 'IV', 'V'];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const separator = ' | ';

for (let i = days; i > 0; i--) {
    let info = '';

    // Print days
    info += (i + '.').padStart(3);
    info += separator;

    // Print rotors
    const ro = [...rotors];
    const rotor1 = ro.splice(Math.floor(Math.random() * ro.length), 1)[0];
    const rotor2 = ro.splice(Math.floor(Math.random() * ro.length), 1)[0];
    const rotor3 = ro.splice(Math.floor(Math.random() * ro.length), 1)[0];
    info += rotor1.padStart(3) + rotor2.padStart(4) + rotor3.padStart(4);
    info += separator;

    // Print ring settings (letters)
    const ri = [...alphabet];
    const ring1 = ri.splice(Math.floor(Math.random() * ri.length), 1)[0];
    const ring2 = ri.splice(Math.floor(Math.random() * ri.length), 1)[0];
    const ring3 = ri.splice(Math.floor(Math.random() * ri.length), 1)[0];
    info += ring1.padStart(1) + ring2.padStart(2) + ring3.padStart(2);
    info += separator;

    // Print connections
    const c = [...alphabet];
    let connections = '';
    for (let j = 0; j < 10; j++) {
        const letter1 = c.splice(Math.floor(Math.random() * c.length), 1)[0];
        const letter2 = c.splice(Math.floor(Math.random() * c.length), 1)[0];
        if (connections.length > 0) {
            connections += ' ';
        }
        connections += letter1 + letter2;
    }
    info += connections;

    // Print day info
    console.log(info);
}

