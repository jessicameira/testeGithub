    const language = document.querySelector("input[name=language]")
    
    
    const buttonSearch = document.querySelector("#btnsearch a")

    buttonSearch.addEventListener("click", () => {
        console.log(language.value)
    })