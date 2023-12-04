document.getElementById("mehet").addEventListener("click", szamol)
function szamol() {
    let ar = 0
    let meret = Number(document.getElementById("meret").value)
    let ap = document.getElementById("alaprajzt").checked
    let latvanyt = document.getElementById("latvanyt").checked
    let hs = document.getElementById("homes").checked
    let lakb = document.getElementById("lakb").checked

    if (ap == true) { ar = ar + meret * 3000 }
    if (latvanyt == true) { ar = ar + meret * 3500 }
    if (hs == true) { ar = ar + meret * 1000 }
    if (lakb == true) { ar = ar + meret * 1500 }

    if (ap == true && latvanyt == true && hs == true && lakb == true) { ar = ar+ 8000 * meret }

    let hely = document.getElementById("hely").value
    if (hely !== "Győr") { ar = ar * 1.1 }

    let surgos = document.getElementById("surgosseg").value
    switch (surgos) {
        case 5: ar = ar * 1.1;
            break;
        case 4: ar = ar * 1.08;
            break;
        case 3: ar = ar * 1.05;
            break;
        case 2: ar = ar * 1.02;
            break;
    }

    if(document.getElementById("bau").checked){ar= ar *1.02}
    if(document.getElementById("industrial").checked){ar= ar *1.04}
    if(document.getElementById("skandi").checked){ar= ar *1.02}
    if(document.getElementById("artdeco").checked){ar= ar *1.04}
    if(document.getElementById("japan").checked){ar= ar *1.02}
    if(document.getElementById("retro").checked){ar= ar *1.04}

    let sajatbutor = document.getElementById('no').checked
    if (sajatbutor == true) { ar = ar * 1.08; }

    let regivendeg = document.getElementById('regi').checked
    if (regivendeg == true) { ar = ar * 0.9; }

    let db = document.getElementById("szam").value
    ar = ar + db * 3000

    let index = document.getElementById('jelleg').selectedIndex
    if (index == 2 || index == 3) { ar = ar * 1.05; }

    document.getElementById("kiiras").innerHTML = `A projekt elkészítésének várható ára: ${ar} Ft!`;

}
