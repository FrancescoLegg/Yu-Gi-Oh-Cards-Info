const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const container = document.getElementById("baseCardsContainer")
CardsManage(URL);

function CardsManage(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let cardsArray = [];
        let cardArraysSliced = [];
        cardsArray = data.data;
        cardArraysSliced = cardsArray.slice(0,100);
        console.log(data);
        
        container.innerHTML = '';

        const createCard = (dataItem) =>{
            const card = document.createElement("div");
            card.setAttribute("dataID", dataItem.id)
            card.classList.add("card");
            card.innerHTML = `
            <div><img src=${dataItem.card_images[0].image_url}></div>
            <div><h2>${dataItem.name}</h2></div>
            `;
                
            card.addEventListener("click",() =>{
                fatchCardDetails(dataItem.id);
            });

            return card;
        };
        cardArraysSliced.forEach(dataItem => {
            const card = createCard(dataItem);
            container.appendChild(card);
        });
    });
}