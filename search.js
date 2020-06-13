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
                <label for="profilename"> Name: <span>${userRepo.login}</span></label>
                <img src="${userRepo.avatar_url}" alt="${userRepo.name}">
                <label for="profilebio">Bio: <span>${userRepo.bio} </span></label>
                <label for="profileLink">Link: <span>${userRepo.html_url}</span></label>
                <label for="profilerepos">Repositorios: <span>${userRepo.public_repos} <span></label>
            </div>`}

        buttonSearch.addEventListener("click", () =>{
        const userRepo = userInf.value
         
        getRepo(userRepo).then(res => showProrile(res))

    } )

