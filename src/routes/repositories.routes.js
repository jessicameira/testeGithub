import { Router, request } from 'express'
import GetRepositoriesFromGit from '../services/GetRepositoriesFromGit'
import ShowRepositoryFromGit from '../services/ShowRepositoryFromGit'
import FoundFavourite from '../services/FoundFavourite'

const repositoriesRouter = Router()

repositoriesRouter.get('/', async (request, response) =>{
    //buscar a lista de repositorios no gitHub pela linguagem e renderizar a lista.
    const lg = ['javascritp', 'php', 'ruby', 'python', 'elixir']
    const language = request.query.language
    
    //Buscar a linguagem setada no array para validação
  if(lg.indexOf(language) > -1){

    console.log(language)

    const getRepositories = new GetRepositoriesFromGit()
    const repositories = await getRepositories.execute(language)

    //return response.json(repositories)
    return response.render('repositories.html', {repositories})

}
//redirecionamento para falha na busca
else {
     return response.status(404).redirect('/')
 }
})

repositoriesRouter.get('/:username/:repositoryName', async (request, response) => {
    //buscar as informações adicionais apenas do repositorio selecionado
    const {username, repositoryName} = request.params
    const fullName = `${username}/${repositoryName}`
    const showRepository = new ShowRepositoryFromGit()
    const repository = await showRepository.execute(fullName)
    
    //se já houver informação cadastrada não retorna true ou false para renderização do botão no front
    const foundFavourite = new FoundFavourite()
    const foundedFavourite = await foundFavourite.execute(fullName)
    const founded = foundedFavourite.valueOf()

    return response.render('showrepository.html', {repository, founded})
})

export default repositoriesRouter

