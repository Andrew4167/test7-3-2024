const classA = new Clazz("classA");
const classB = new Clazz("classB");

function pripravTlacitko(clazz) {
    const buttonPridej = document.createElement("button");
    buttonPridej.innerText = "Přidej studenta " + clazz.nazev
    buttonPridej.onclick = function() { pridejStudenty(clazz); }

    const buttonVypis = document.createElement("button");
    buttonVypis.innerText = "Vypiš studenty " + clazz.nazev
    buttonVypis.onclick = function() { vypisStudenty(clazz); }

    document.body.appendChild(buttonPridej);
    document.body.appendChild(buttonVypis);
}

function pridejStudenty(clazz) {
    const jmeno = prompt("Zadej jméno studenta");
    const prijmeni = prompt("Zadej příjmení studenta")
    const vek = prompt("Zadej věk");
    const nazev = prompt("Zadej název třídy")
    const student = new Student(jmeno, prijmeni, vek, nazev);
    clazz.student.push(student);
}

function vypisStudenty(clazz) {
    const h3 = document.createElement("h3")
    h3.innerText = "Studenti" + "ㅤ" + clazz.nazev
    const seznam = document.createElement("ul");
    for (const student of clazz.student) {
        seznam.innerHTML += `<li><strong>Jméno</strong>: ${student.jmeno}</li>`;
        seznam.innerHTML += `<li><strong>Příjmení</strong>: ${student.prijmeni}</li>`;
        seznam.innerHTML += `<li><strong>Věk</strong>: ${student.vek}</li>`;
        seznam.innerHTML += `<li><strong>Název třídy</strong>: ${student.nazev}</li>`;
    }
    document.body.appendChild(seznam);
}

pripravTlacitko(classA)
pripravTlacitko(classB)