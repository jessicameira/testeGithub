import express from 'express'
import routes from './routes'
import nunjucks from 'nunjucks'
import favourites  from './models'

const app = express()

app.use(routes)

app.use(express.static("./src/public"))

nunjucks.configure("./src/views", {
    express: app,
    noCache: true
})


app.listen(3333, ()=> {
    console.log("server running")
})