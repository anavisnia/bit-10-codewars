function pasisveikinimas(pasnekovas) {
    /*
    - issiaiskinti kokia kalba sneka mano pasnekovas
    - patikrinti ar as moku tokia kalba
        - jei taip:
            - issitraukiu sarasa galimu pasisveikinimu ta kalba
            - atsitiktine tvarka issirenku pasisveikinimo fraze
            - grazinu sveikinima
        -jei ne:
            - grazinu defoltini pasisveikinima 'Hi'
    */
    const pasnekovoKalba = pasnekovas.lang;
    console.log('pasnekovoKalba:', pasnekovoKalba);

    const manoMokamosKalbos = ['lt', 'en'];
    const pasisveikinimai = {
        lt: ['Labas', 'Labukas', 'Sveiki', 'Ka tu?'],
        en: ['Hi', 'Hello', 'Whats Up?', 'How are you?'],
    }

    if (manoMokamosKalbos.includes(pasnekovoKalba)) {

        const galimosFrazes = pasisveikinimai[pasnekovoKalba];
        console.log(galimosFrazes);

        const frazesIndex = Math.floor(Math.random() * galimosFrazes.length)
        const fraze = galimosFrazes[frazesIndex];
        return fraze;

    } else {
        return 'Hi';
    }
}

const drauge = {
    name: 'Vaida',
    lang: 'lt'
}

const response = pasisveikinimas(drauge);

console.log(response);