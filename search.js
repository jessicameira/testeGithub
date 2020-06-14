    const userInf = document.querySelector("input[name=user]")
    const buttonSearch = document.querySelector("#btnsearch a")
    
    const profile = document.getElementById("profile")

    const urlApi = "https://api.github.com/users"


    
    async function getRepo(userRepo){
        const gitRepoResponse = await fetch(`${urlApi}/${userRepo}`)

        const gitProfile = gitRepoResponse.json()    
        return gitProfile
    }

    function showProrile(userRepo){
        profile.innerHTML = `<div>
                <img src="${userRepo.avatar_url}" alt="${userRepo.name}">
                <label for="profilename"> Name: <span>${userRepo.login}</span></label>
                <label for="profilebio">Bio: <span>${userRepo.bio} </span></label>
                <label for="profileLink"><a href="${userRepo.html_url}">${userRepo.html_url}</a></label>
                <label for="profilerepos">Repositorios: <span>${userRepo.public_repos} <span></label>
                <img src="/assets/plus.svg" alt="Adicionar">
            </div>`}

        buttonSearch.addEventListener("click", () =>{
        const userRepo = userInf.value
         
        getRepo(userRepo).then(res => showProrile(res))

    } )

