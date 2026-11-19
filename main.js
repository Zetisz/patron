let adatok = [];
const main = document.getElementsByTagName("main")[0];

async function Init() {
    const response = await fetch("./patrons.json");
    adatok = await response.json();

    const tbody = document.getElementById("tbody");
    for (const adat of adatok) {
        const tr = document.createElement("tr");
        const sub = document.createElement("td");
        const prem = document.createElement("td");
        const paid = document.createElement("td");
        sub.textContent = adat.subscriber;
        prem.textContent = adat.premium;
        paid.textContent = adat.paid_total;
 
        tr.appendChild(sub);
        tr.appendChild(prem);
        tr.appendChild(paid);
        tbody.appendChild(tr)
    }
}

Init();