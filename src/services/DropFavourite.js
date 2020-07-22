const {Favourite} = require('../models')

class DropFavourite {
    async execute (fullName){
        const dropFavourite = await Favourite.destroy({
            where: {
                full_name: fullName
            }
        })
        console.log(dropFavourite)
        return dropFavourite
    }
}
export default DropFavourite