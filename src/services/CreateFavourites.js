const {Favourite} = require('../models')

class CreateFavourite {
    async execute (newFavourite){
        console.log(newFavourite)
        const favourite = await Favourite.create(newFavourite);
        return favourite
    }
}
export default CreateFavourite