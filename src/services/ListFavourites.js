const {Favourite} = require('../models')
class ListFavourites{
    async execute (){
        const favourites = await Favourite.findAll({raw:true});
        console.log(favourites)
        return favourites
    }
}
export default ListFavourites