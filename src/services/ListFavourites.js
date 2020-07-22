const {Favourite} = require('../models')
class ListFavourites{
    async execute (){
        const favourites = await Favourite.findAll({raw:true});
        return favourites
    }
}
export default ListFavourites