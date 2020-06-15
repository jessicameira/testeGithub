    const userInf = document.querySelector("input[name=user]")
    const buttonSearch = document.querySelector("#btnsearch a")
    
    const profile = document.getElementById("profile")

    const urlApi = "https://api.github.com/users"


    
    async function getRepo(userRepo){
        const gitRepoResponse = await fetch(`${urlApi}/${userRepo}`)

        const gitProfile = gitRepoResponse.json()    
        return gitProfile
    }

    function showProfile(userRepo){
        profile.innerHTML = `<div>
                <img src="${userRepo.avatar_url}" alt="${userRepo.name}">
                <div>
                <label for="profilename"> Name: <span>${userRepo.login}</span></label>
                <label for="profilebio">Bio: <span>${userRepo.bio} </span></label>
                <label for="profileLink"><a href="${userRepo.html_url}">${userRepo.html_url}</a></label>
                <label for="profilerepos">Repositorios: <span>${userRepo.public_repos} <span></label>
                </div>
                <a href="javascript" id="add"><img src="/assets/plus.svg" alt="Adicionar"></a>
            </div>`

        document.getElementById("add").addEventListener("click", (e) => {
            e.preventDefault();
            let avatar = userRepo.avatar_url 
            let login = userRepo.login
            let bio = userRepo.bio
            let link = userRepo.html_url
            let repos = userRepo.public_repos

            addProfile (avatar, login, bio, link, repos)
        });
    }
    

     
    buttonSearch.addEventListener("click", () =>{
       const userRepo = userInf.value
         
        getRepo(userRepo).then(res => showProfile(res))
       


    } )

    function addProfile(avatar, login, bio, link, repos){

        console.log(avatar, login, bio, link, repos)
        //localStorage.setItem('avatar', avatar )
        //localStorage.setItem('login', login )
        //localStorage.setItem('bio', bio)
        //localStorage.setItem('link', link)
        //localStorage.setItem('repos', repos)

    }

