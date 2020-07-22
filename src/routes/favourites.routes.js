import { Router, request, response } from 'express'
import CreateFavourite from '../services/CreateFavourites'
import ListFavourites from '../services/ListFavourites'
import bodyParser from 'body-parser'


const favouritesRouter = Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

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

favouritesRouter.get('/', async(request, response) => {
    const listFavourites = new ListFavourites()
    console.log(listFavourites)
    const listAllFavourites = await listFavourites.execute() 
    console.log(listAllFavourites[0])
    return response.render('favorites.html', {listAllFavourites})
})

favouritesRouter.get('/:fullName', (request,response)=>{

})

export default favouritesRouter