import { Router } from 'express'
import repositoriesRouter from './repositories.routes'
import favouritesRouter from './favourites.routes'


const routes = Router()

routes.use('/repositories', repositoriesRouter)

routes.use('/favourites', favouritesRouter)


routes.get('/', (request, response)=>{
    return response.render('index.html')
})


export default routes