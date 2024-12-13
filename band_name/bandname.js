//getting the HTML IDs
const band = document.getElementById('bandBtn');
const name = document.getElementById('bandName');
const play = document.getElementById('instrument');
const opener = document.getElementById('opens');

band.onclick = function() {
    // getting random!
    let first = Math.ceil(Math.random() * 7);
    let second = Math.ceil(Math.random() * 7);
    let instrument = Math.ceil(Math.random() * 6);
    let openers = Math.ceil(Math.random() * 6);

    // adjective section of the band name
    if (first === 1) {
        first = 'Inspired';
    } else if (first === 2) {
        first = 'Bored';
    } else if (first === 3) {
        first = 'Waxy';
    } else if (first === 4) {
        first = 'Clunky';
    } else if (first === 5) {
        first = 'Fatty';
    } else if (first === 6) {
        first = 'Weathered';
    } else if (first === 7) {
        first = 'Bonerific';
    }

    // noun scetion of the band name
    if (second === 1) {
        second = 'Squirrels';
    } else if (second === 2) {
        second = 'Clouds';
    } else if (second === 3) {
        second = 'Shades';
    } else if (second === 4) {
        second = 'Tubas';
    } else if (second === 5) {
        second = 'Handpies';
    } else if (second === 6) {
        second = 'Souls';
    } else if (second === 7) {
        second = 'Mastiffs';
    }

    // position in band section (also getting better at switch)
    switch (instrument) {
        case 1:
            instrument = 'Lead Singer';
            break;
        case 2:
            instrument = 'Lead Guitar';
            break;
        case 3:
            instrument = 'Rhythm Guitar';
            break;
        case 4:
            instrument = 'Bass Guitar';
            break;
        case 5:
            instrument = 'Drums';
            break;
        case 6:
            instrument = 'Tambourine';
            break;
    }

    // who we are opening for
    switch (openers) {
        case 1:
            openers = 'Guns n Roses';
            break;
        case 2:
            openers = 'AC/DC';
            break;
        case 3:
            openers = 'Tupac';
            break;
        case 4:
            openers = 'Imagine Dragons';
            break;
        case 5:
            openers = 'Nickleback';
            break;
        case 6:
            openers = 'Rolling Stones';
            break;
    }

    // pushing strings to bandname.html
    name.innerHTML = `${first} ${second}`;
    play.innerHTML = `${instrument}`;
    opener.innerHTML = `${openers}`;
    console.log(`${first} ${second}`);
    console.log(`${instrument}`);
    console.log(`${openers}`);
}

//generator();