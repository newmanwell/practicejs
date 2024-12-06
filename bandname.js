const band = document.getElementById('bandBtn');
const name = document.getElementById('bandName');

band.onclick = function() {
    let first = Math.ceil(Math.random() * 7);
    let second = Math.ceil(Math.random() * 7);

    if (first === 1) {
        first = 'Inspired';
    } else if (first === 2) {
        first = 'Bored';
    } else if (first === 3) {
        first = 'Waxy'
    } else if (first === 4) {
        first = 'Clunky'
    } else if (first === 5) {
        first = 'Fatty'
    } else if (first === 6) {
        first = 'Weathered'
    } else if (first === 7) {
        first = 'Bonerific'
    }

    if (second === 1) {
        second = 'Squirrels';
    } else if (second === 2) {
        second = 'Clouds';
    } else if (second === 3) {
        second = 'Shades';
    } else if (second === 4) {
        second = 'Tubas'
    } else if (second === 5) {
        second = 'Handpies'
    } else if (second === 6) {
        second = 'Souls'
    } else if (second === 7) {
        second = 'Mastiffs'
    }
    name.innerHTML = `${first} ${second}`;
    console.log(`${first} ${second}`);
}

//generator();