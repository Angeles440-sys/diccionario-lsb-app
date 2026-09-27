const dictionary = [
    { word: "Hola", category: "Saludos", description: "Seña de saludo inicial extendiendo la mano." },
    { word: "Gracias", category: "Cortesía", description: "Seña de agradecimiento tocando la barbilla hacia adelante." },
    { word: "Por favor", category: "Cortesía", description: "Mano sobre el pecho realizando un movimiento circular." },
    { word: "Familia", category: "Social", description: "Ambas manos formando la F girando en círculo." },
    { word: "Amigo", category: "Social", description: "Manos entrelazadas en palmeo de amistad." }
];

function renderCards(words) {
    const grid = document.getElementById("dictionaryGrid");
    grid.innerHTML = "";
    words.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.word}</h3>
            <p><strong>Categoría:</strong> ${item.category}</p>
            <p>${item.description}</p>
        `;
        grid.appendChild(card);
    });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = dictionary.filter(item => 
        item.word.toLowerCase().includes(searchTerm) || 
        item.category.toLowerCase().includes(searchTerm)
    );
    renderCards(filtered);
});

// Carga inicial
renderCards(dictionary);
