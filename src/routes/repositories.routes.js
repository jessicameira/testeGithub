import { Router, request } from 'express'
import GetRepositoriesFromGit from '../services/GetRepositoriesFromGit'
import ShowRepositoryFromGit from '../services/ShowRepositoryFromGit'

const repositoriesRouter = Router()

repositoriesRouter.get('/', async (request, response) =>{
    //buscar a lista de repositorios no gitHub pela linguagem e renderizar a lista.

    //const {language} = request.query.language
    const language = request.query.language
    
 if(language){

    console.log(language)

    const getRepositories = new GetRepositoriesFromGit()
    const repositories = await getRepositories.execute(language)

    //return response.json(repositories)
    return response.render('repositories.html', {repositories})

}
else {
     return response.status(404).json({message: "Nunhuma linguagem"})
 }
})

repositoriesRouter.get('/:username/:repositoryName', async (request, response) => {
    //buscar as informações adicionais apenas do repositorio selecionado
    const {username, repositoryName} = request.params
    const fullName = `${username}/${repositoryName}`
    const showRepository = new ShowRepositoryFromGit()
    const repository = await showRepository.execute(fullName)
//Rener Here
    return response.render('showrepository.html', {repository})
})

export default repositoriesRouter

