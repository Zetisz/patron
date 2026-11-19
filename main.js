let adatok = [];

async function Init() {
    const response = await fetch("./patrons.json");
    adatok = await response.json();

    createTable();
}

function createTable() {
    const tbody = document.getElementById("tbody");
    for (const adat of adatok) {
        const tr = document.createElement("tr");
        const sub = document.createElement("td");
        const prem = document.createElement("td");
        const paid = document.createElement("td");

        sub.textContent = adat.subscriber;
        paid.textContent = "$" + adat.paid_total;

        if (adat.premium == true){
            prem.textContent = "✅";
        }
        else {
            prem.textContent = "❌";
        }

        if (adat.paid_total > 800){
            tr.classList.add("gold");
        }

        prem.addEventListener('click', () => {
            const alert = document.getElementById("alert");
            alert.style.display = "block";

            if (prem.textContent == "✅") {
                adat.premium = false;
            }
            else {
                adat.premium = true;
            }

            tbody.innerHTML = "";
            createTable();

            setTimeout(() => {
                alert.style.display = "none";
            }, 5000)
        })
 
        tr.appendChild(sub);
        tr.appendChild(prem);
        tr.appendChild(paid);
        tbody.appendChild(tr);
    }
}

Init();