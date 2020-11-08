import { meniu } from "./meniudata";

function generateMeniu(data) {
    console.log(data);
    let HTML = '';
    let ivert = meniu.aprasymas.ivertinimas;
    let aler = meniu.aprasymas.alergenai;

    for (let i = 0; i < data.length; i++) {
        const meniu = data[i]

        HTML += ` <div>
    patiekalas ${meniu.name}
</div>
<div>
    kaina ${meniu.price}
</div>
<div>
    aprasymas ${ivert}, ${aler} 
</div>`
    }
    const DOM = document.querySelector('div');
    DOM.innerHTML = HTML








}






















export { generateMeniu }