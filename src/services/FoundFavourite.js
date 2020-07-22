const {Favourite} = require('../models')
class FoundFavourite {
    async execute (fullname){
        const response = await Favourite.findOne({
            where:{
                full_name: fullname
            }
        })
        let founded = false

        console.log (response)
        if (response === null) {

            return founded
          } else {
            founded = true
            return founded
          }
        console.log(favouriteFound)

    }
}
export default FoundFavourite