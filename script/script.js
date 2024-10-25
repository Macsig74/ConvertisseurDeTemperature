function convertir() {
    let nombreaconvertir = parseFloat(document.getElementById("température1").value);
    let unité1 = document.getElementById("unité1").value;
    let unité2 = document.getElementById("unité2").value;

    // Vérification si la valeur saisie est un nombre
    if (isNaN(nombreaconvertir)) {
        document.getElementById("résultat").textContent = "Veuillez entrer une température valide.";
        return;
    }

    let résultat;

    if (unité1 === "Celsius") {
        if (unité2 === "Fahrenheit") {
            résultat = (nombreaconvertir * 9/5) + 32;
        } else if (unité2 === "Kelvin") {
            résultat = nombreaconvertir + 273.15;
        } else {
            résultat = nombreaconvertir; // Même unité
        }
    } else if (unité1 === "Fahrenheit") {
        if (unité2 === "Celsius") {
            résultat = (nombreaconvertir - 32) * 5/9;
        } else if (unité2 === "Kelvin") {
            résultat = (nombreaconvertir - 32) * 5/9 + 273.15;
        } else {
            résultat = nombreaconvertir; // Même unité
        }
    } else if (unité1 === "Kelvin") {
        if (unité2 === "Celsius") {
            résultat = nombreaconvertir - 273.15;
        } else if (unité2 === "Fahrenheit") {
            résultat = (nombreaconvertir - 273.15) * 9/5 + 32;
        } else {
            résultat = nombreaconvertir; // Même unité
        }
    }

    // Affichage des résultats
    document.getElementById("unitérésultat").innerText = unité2;
    document.getElementById("résultat").innerText = résultat.toFixed(2); // Affichage avec 2 décimales
}
