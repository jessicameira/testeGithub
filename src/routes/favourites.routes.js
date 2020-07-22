import { Router, request, response } from 'express'
import CreateFavourite from '../services/CreateFavourites'
import ListFavourites from '../services/ListFavourites'
import ShowRepositoryFromGit from '../services/ShowRepositoryFromGit'
import DropFavourite from '../services/DropFavourite'
import FoundFavourite from '../services/FoundFavourite'
import bodyParser from 'body-parser'


const favouritesRouter = Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//post das informações vindas do api do github
favouritesRouter.post('/',urlencodedParser, async (request, response) => {
    const {fullName, name, description, urlImg} = request.body

    const createFavourite = new CreateFavourite()
    console.log(createFavourite)
    const favourite = await createFavourite.execute({
        full_name: fullName,
        name,
        description,
        img_url: urlImg
    })

    return response.redirect('/favourites')

})
//lista de favoritos
favouritesRouter.get('/', async(request, response) => {
    const listFavourites = new ListFavourites()
    const listAllFavourites = await listFavourites.execute() 
    return response.render('favorites.html', {listAllFavourites})
})
//buscar mais informações do favorito direto da API
favouritesRouter.get('/:username/:repositoryName',async (request,response)=>{
    const {username, repositoryName} = request.params
    const fullName = `${username}/${repositoryName}`
    const showRepository = new ShowRepositoryFromGit()
    const repository = await showRepository.execute(fullName)

//valida informação para renderização de botao no front
    const foundFavourite = new FoundFavourite()
    const foundedFavourite = await foundFavourite.execute(fullName)
    const founded = foundedFavourite.valueOf()

    return response.render('showrepository.html', {repository, founded })
})

//remoção de favorito da base
favouritesRouter.post('/:username/:repositoryName',urlencodedParser, async (request,response)=>{
    const {username, repositoryName} = request.params
    const fullName = `${username}/${repositoryName}`
    console.log(fullName)
    const dropFavourite = new DropFavourite()
    const repository = await dropFavourite.execute(fullName)
    console.log(repository)
    return response.redirect('/favourites')
})

export default favouritesRouter