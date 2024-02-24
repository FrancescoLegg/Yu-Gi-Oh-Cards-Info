const GetDataBTN = document.getElementById("APIButton");
const DataContainer = document.getElementById("DataContainer");

GetDataBTN.addEventListener("click", () =>{
    const URL = "https://flynn.boolean.careers/exercises/api/random/name";

    fetch (URL)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            nome = data.response;

            const dataParagraph = document.createElement("p");
            dataParagraph.textContent = JSON.stringify(nome);
            DataContainer.appendChild(dataParagraph);
        })
        .catch(error => {
            console.error();
            DataContainer.innerHTML = '<p>Errore durante il recupero dei dati</p>'
        })

});