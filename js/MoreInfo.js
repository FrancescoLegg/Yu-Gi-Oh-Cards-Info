function fatchCardDetails(cardID){
    const urlCard = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardID}`;
    console.log(urlCard);
    fetch(urlCard)
    .then(response => response.json())
    .then(details => {
        const card = details.data[0];
        const detailsContainer = document.getElementById("CardsDetails");
        console.log(card);

        detailsContainer.innerHTML = `
        <span id="closeBTN">&times;</span>
        <div><img src=${card.card_images[0].image_url} alt="${card.name}"></div>
        <div><h1>${card.name} - ${card.frameType}</h1></div>
        <p style="font-weight: bold;">Description:</p>
        <p>${card.desc}</p>
        `;

        detailsContainer.style.display = "block";

        document.getElementById("closeBTN").addEventListener("click", () => {
            detailsContainer.style.display = "none";
        });
    })
    .catch(error => console.error('Errore nel recupero dei dati della carta', error));
}