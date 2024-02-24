var userInput = document.getElementById("InputText");

userInput.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        const urlFinder = URL + '?fname=' + userInput.value;
        console.log(urlFinder);
        CardsManage(urlFinder);
    };
})

// Blue-Eyes%20White%20Dragon