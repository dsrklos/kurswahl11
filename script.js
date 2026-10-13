// Globale Variablen
let totalWeeks = 0;
let totalSubjects = 0;
let pflicht = 0;


document.addEventListener('DOMContentLoaded', () => {
    // Event Listener für die Wahlbelegung hinzufügen
    const wahlbelegungRows = document.querySelectorAll('#wahlbelegung .checkbox');
    wahlbelegungRows.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log("Wahlfach Checkbox geändert!"); // Debugging-Hilfe
            updateWahlSum(); // Sofortige Aktualisierung der Wahlstunden
        });
    });

    // Event Listener für die Pflichtbelegung hinzufügen
    const pflichtbelegungRows = document.querySelectorAll('table:nth-of-type(1) .checkbox');
    pflichtbelegungRows.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSum(); // Sofortige Aktualisierung der Pflichtstunden
        });
    });

});

function updateIaSelection() {
    const iamValue = document.getElementById('iam').value;
    const biphiSelect = document.getElementById('biphi');
    const gitCheckbox = document.getElementById('gitCheckbox');
console.log("IA  geändert!"); // Debugging-Hilfe

    // Setze die Optionen für BiPhi, Ethik und Religion basierend auf der Auswahl von IaM oder IaF
    if (iamValue === "IaM") {
        biphiSelect.innerHTML = `
            <option value="BiPhi">BiPhi</option>
        `;
        gitCheckbox.checked = true; // GIT wird ausgewählt
        gitCheckbox.disabled = true; // GIT wird deaktiviert
    } else if (iamValue === "IaF") {
        biphiSelect.innerHTML = `
            <option value="">Bitte wählen</option>
            <option value="Ethik">Ethik</option>
            <option value="Religion">Religion</option>
        `;
        gitCheckbox.checked = false; // GIT wird nicht ausgewählt
        gitCheckbox.disabled = true; // GIT bleibt deaktiviert
    } else {
        biphiSelect.innerHTML = `
            <option value="">Bitte wählen</option>
            <option value="BiPhi">BiPhi</option>
            <option value="Ethik">Ethik</option>
            <option value="Religion">Religion</option>
        `;
        gitCheckbox.checked = false; // GIT wird nicht ausgewählt
        gitCheckbox.disabled = false; // GIT wird aktiviert
    }
}

function updateNawi1SelectionOLD() {

    console.log("Update Nawi1"); // Debugging-Hilfe
    const Nawi1Value = document.getElementById('nawi').value;
    const Nawi2Value = document.getElementById('nawi2');
    
    // Setze die Optionen für Nawi 1 und Nawi 2
    if (Nawi1Value ===  "Physik") {
        Nawi2Value.innerHTML = `
            <option value="">Bitte wählen</option>
            <option value="Biologie">Biologie</option>
            <option value="Chemie">Chemie</option>
        `;
    } else if (Nawi1Value === "Biologie") {
        Nawi2Value.innerHTML = `
            <option value="">Bitte wählen</option>
            <option value="Physik">Physik</option>
            <option value="Chemie">Chemie</option>
        `;
    } else if (Nawi1Value === "Chemie") {
        Nawi2Value.innerHTML = `
            <option value="">Bitte wählen</option>
            <option value="Biologie">Biologie</option>
            <option value="Physik">Physik</option>
        `;
    } 

    
        // Aktualisiere die Summe, wenn die Auswahl für IaM oder IaF geändert wird
    updateSum();
}

function updateNawi2Selection() {

    console.log("Update Nawi 2"); // Debugging-Hilfe
    const Nawi2Value = document.getElementById('nawi2').value;
    const Nawi1Value = document.getElementById('nawi').value;
    const Nawi1Select = document.getElementById('nawi');
    
    // Setze die Optionen für Nawi 1 und Nawi 2
    if (Nawi2Value ===  "Physik" ) {
        if (Nawi1Value ===  "Physik" || Nawi1Value === "")
            Nawi1Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Biologie">Biologie</option>
                <option value="Chemie">Chemie</option>
        `;
    } else if (Nawi2Value === "Biologie" ) {
        if (Nawi1Value ===  "Biologie" || Nawi1Value === "")
            Nawi1Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Physik">Physik</option>
                <option value="Chemie">Chemie</option>
            `;
    } else if (Nawi2Value === "Chemie") {
        if (Nawi1Value ===  "Chemie" || Nawi1Value === "")
            Nawi1Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Biologie">Biologie</option>
                <option value="Physik">Physik</option>
            `;
    } else 
    
        // Aktualisiere die Summe, wenn die Auswahl für IaM oder IaF geändert wird
    updateSum();
}

function updateNawi1Selection() {

    console.log("Update Nawi 1"); // Debugging-Hilfe
    const Nawi1Value = document.getElementById('nawi').value;
    const Nawi2Value = document.getElementById('nawi2').value;
    const Nawi2Select = document.getElementById('nawi2');
    
    // Setze die Optionen für Nawi 1 und Nawi 2
    if (Nawi1Value ===  "Physik") {
        if (Nawi2Value ===  "Physik" || Nawi2Value === "") 
            Nawi2Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Biologie">Biologie</option>
                <option value="Chemie">Chemie</option>
        `;
    } else if (Nawi1Value === "Biologie") {
        if (Nawi2Value ===  "Biologie" || Nawi2Value === "")
            Nawi2Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Physik">Physik</option>
                <option value="Chemie">Chemie</option>
        `;
    } else if (Nawi1Value === "Chemie"  ) {
        if (Nawi2Value ===  "Chemie" || Nawi2Value === "")
            Nawi2Select.innerHTML = `
                <option value="">Bitte wählen</option>
                <option value="Biologie">Biologie</option>
                <option value="Physik">Physik</option>
        `;
    }
    
        // Aktualisiere die Summe, wenn die Auswahl für IaM oder IaF geändert wird
    updateSum();
}



function updateSum() {
    totalWeeks = 0; // Gesamtwochenstunden mit D,M,E,G,SP
    totalSubjects = 0; // Gesamtanzahl der Fächer mit D,M,E,G,SP
    pflicht = 0;

    const rows = document.querySelectorAll('table:nth-of-type(1) tr'); // Pflichtbelegung
console.log("Anzahl ZEilen: ", rows.length); // Debugging-Hilfe
    rows.forEach((row, index) => {
        if (index > 0 && index < rows.length - 1) { // Skip header and last row
            const checkbox = row.querySelector('.checkbox');
            const woStunden = parseInt(row.cells[1].innerText);
            if (checkbox && checkbox.checked) { // Überprüfen, ob die Checkbox existiert
                totalWeeks += woStunden; // Addiere die Wochenstunden
                totalSubjects++; // Erhöhe die Anzahl der belegten Fächer
                if (index < 10){
                    pflicht += woStunden;
                }
            }
        }
    });

    // Check for selected options
    const nawiValue = document.getElementById('nawi').value;
    const nawi2Value = document.getElementById('nawi2').value;
    
    const iamValue = document.getElementById('iam').value;
    const kuValue = document.getElementById('ku').value;
    const biphiValue = document.getElementById('biphi').value;

    // Zähle die ausgewählten Fächer aus den Dropdown-Listen
    if (nawiValue) {
        totalWeeks += 3; // 1. NaWi
        totalSubjects++; // Erhöhe die Anzahl der belegten Fächer
        pflicht += 3;
    }
    if (nawi2Value) {
        totalWeeks += 3; // 1. NaWi
        totalSubjects++; // Erhöhe die Anzahl der belegten Fächer
        //pflicht += 3;
    }
    if (iamValue === "IaM") {
        totalWeeks += 4; // IaM Stunden 
        totalSubjects++; // IaM zählt als Fach 
        pflicht += 4; // 
    } else if (iamValue === "IaF") {
        totalSubjects++; // IaF zählt als Fach
        totalWeeks += 4;
        pflicht += 4;
    }
    if (kuValue) {
        totalWeeks += 2; // Ku oder Musik
        totalSubjects++; // Erhöhe die Anzahl der belegten Fächer
        pflicht += 2;
    }
    if (biphiValue) {
        totalWeeks += 2; // BiPhi oder Ethik oder Rel
        pflicht += 2;
        totalSubjects++; // Erhöhe die Anzahl der belegten Fächer
    }

    console.log("Aktuelle Summe der Pflichtstunden: ", pflicht); // Debugging-Hilfe
    document.getElementById('pflichtsumme').innerText = pflicht + ' Wochenstunden'; // Aktualisierte Anzeige
    document.getElementById('maxFaecher').innerText = totalSubjects; // Zeigt die Anzahl der belegten Fächer an
    document.getElementById('minWochenstunden').innerText = totalWeeks; // Zeigt die insgesamt belegten Wochenstunden an
}

function updateWahlSum() {
    let sum = 0;
    let selectedSubjects = 0; // Zähler für die Wahlfächer
    console.log(`updateWahlSum`); // Log, wenn die Funktion aufgerufen wird

    const rows = document.querySelectorAll('#wahlbelegung tr'); // Wahlbelegung
    console.log(`Anzahl der Wahlzeilen: ${rows.length}`); // Log zur Überprüfung der Anzahl der Zeilen

    rows.forEach((row, index) => {
        console.log(`Überprüfe Zeile ${index}: ${row.cells[0].innerText}`); // Log zur Überprüfung der Zeileninhalte
        if (index > 0 && index < rows.length - 1) { // Skip header and last two rows
            const checkbox = row.querySelector('.checkbox');
            const woStunden = parseInt(row.cells[1].innerText);
            if (checkbox) {
                console.log(`Checkbox für ${row.cells[0].innerText}: ${checkbox.checked}`); // Log zur Überprüfung des Checkbox-Status
                if (checkbox.checked) { // Überprüfen, ob die Checkbox existiert
                    sum += woStunden;
                    selectedSubjects++; // Erhöhe die Anzahl der belegten Wahlfächer
                }
            }
        }
    });

    console.log("Aktuelle Summe der Wahlstunden: ", sum); // Debugging-Hilfe
    //document.getElementById('wahlSumme').innerText = sum + ' Wochenstunden'; // Aktualisierte Anzeige
    console.log("Aktuelle Summe der Totalweeks: ", totalWeeks); // Debugging-Hilfe
    
    let pflicht = totalWeeks - sum;
    console.log("Aktuelle Summe der PFlicht: ", pflicht); // Debugging-Hilfe
    
    document.getElementById('pflichtsumme').innerText = pflicht + ' Wochenstunden'; // Aktualisierte Anzeige
    
    // Füge die Wahlstunden zur Gesamtstundenzahl hinzu
    totalWeeks += sum;
    totalSubjects += selectedSubjects; // Erhöhe die Gesamtanzahl der belegten Fächer
    document.getElementById('minWochenstunden').innerText = totalWeeks; // Aktualisiere die insgesamt belegten Wochenstunden
    document.getElementById('maxFaecher').innerText = totalSubjects; // Aktualisiere die Anzahl der belegten Fächer
}

function exportToFileOLD() {
    var box1 = document.getElementById('nawi').value;
    var box2 = document.getElementById('iam').value;
    var box3 = document.getElementById('ku').value;
    var box4 = document.getElementById('biphi').value;
    var box5 = document.getElementById('nawi2').value;
    var box5check = document.getElementById('nawi2').checked;
    var box6 = document.getElementById('franz').checked;
    var box6b = document.getElementById('latein').checked;
    console.log('Französisch Checkbox ist:', box6);
    var box7 = document.getElementById('eco').checked;
    var box8 = document.getElementById('geo').checked;
    var box9 = document.getElementById('info').checked;
    var box10 = document.getElementById('gitCheckbox').checked;
        
            
    var FileName = document.getElementById('myText').value;
    var SpeicherName = FileName + '.txt';

    var data =
        'Name: ' + FileName + '\n' + '\n' +
        'Deutsch: ' + 'Checked' + '\n' +
        'Englisch: ' + 'Checked'  + '\n' +
        'Geschichte: ' + 'Checked'  + '\n' +
        'Mathematik: ' +  'Checked'  + '\n' +
         box1 + ': '+ 'Checked' + '\n' +
         box2 + ': '+ 'Checked' + '\n' +
         box3 + ': '+ 'Checked' + '\n' +
         box4 + ': '+ 'Checked' + '\n' +
        'Sport: ' + 'Checked' + '\n' +
        '--------- Wahlfächer: --------------' + '\n' +
        (box6 ? 'Französisch: Checked' + '\n' : '')  +
        (box6b ? 'Latein: Checked' + '\n' : '')  +
        (box5check ? box5 + ': '+ 'Checked' + '\n' : '') +
        // (box5 != "" ? box5 + ' :'+ 'Checked' + '\n' ) +
        (box8 ? 'Erdkunde: Checked : ' + '\n' : '' )   +
        (box7 ? 'Economics: Checked' + '\n' : '') +
        (box9 ? 'Informatik: Checked' + '\n' : '')  +
        'Storia: ' + (box10 ? 'Checked' : 'Unchecked') + '\n' 
        ;

    var blob = new Blob([data], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);

    var link = document.createElement('a');
    link.download = SpeicherName;
    link.href = url;
    link.click();
}

function exportToFile() {
    var box1 = document.getElementById('nawi').value; // NaWi-Wert
    var box2 = document.getElementById('iam').value; // IaM-Wert
    var box3 = document.getElementById('ku').value; // Kunst oder Musik-Wert
    var box4 = document.getElementById('biphi').value; // BiPhi-Wert
    var box5 = document.getElementById('nawi2').value; // 2. NaWi-Wert
    //var box5check = document.getElementById('nawi2').checked; // Checkbox für 2. NaWi
    var box6 = document.getElementById('franz').checked; // Französisch-Checkbox
    var box6b = document.getElementById('latein').checked; // Latein-Checkbox
    var box7 = document.getElementById('eco').checked; // Economics-Checkbox
    var box8 = document.getElementById('geo').checked; // Geographie-Checkbox
    var box9 = document.getElementById('info').checked; // Informatik-Checkbox
    var box10 = document.getElementById('gitCheckbox').checked; // GIT-Checkbox

    console.log('Nawi 2 ist:', box5);
    //console.log('Nawi 2 Checked ist:', box5check);
    console.log('GIT Checked ist:', box10);

    var FileName = document.getElementById('myText').value; // Dateiname
    var SpeicherName = FileName + '.csv'; // CSV-Dateiname

    // Erstelle den Inhalt der CSV-Datei mit Fächern in der ersten Zeile
    var data = [
        ['Name', 'Deutsch', 'Englisch', 'Geschichte', 'Mathematik', box1, box2, box3, box4, 'Sport', 'Französisch', 'Latein',  'Erdkunde', 'Economics', 'Informatik', 'Storia', box5], // Header
        [FileName, 'Checked', 'Checked', 'Checked', 'Checked', 'Checked', 'Checked', 'Checked', 'Checked', 'Checked', box6 ? 'Checked' : 'Unchecked', box6b ? 'Checked' : 'Unchecked', box8 ? 'Checked' : 'Unchecked', box7 ? 'Checked' : 'Unchecked', box9 ? 'Checked' : 'Unchecked', box10 ? 'Checked' : 'Unchecked', box5 ? 'Checked' : ' ']
    ];

    // Konvertiere das Array in CSV-Format
    var csvContent = data.map(e => e.join(",")).join("\n");

    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }); // Erstelle ein Blob-Objekt
    var url = URL.createObjectURL(blob); // Erstelle eine URL für das Blob

    var link = document.createElement('a'); // Erstelle einen Link
    link.download = SpeicherName; // Setze den Download-Namen
    link.href = url; // Setze die URL
    link.click(); // Simuliere einen Klick auf den 
}