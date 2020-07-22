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


app.listen(process.env.PORT ||5000, ()=> {
//app.listen(5000, ()=> {
    console.log("server running")
})