import { api } from './apigithub'
class ShowRepositoryFromGit {
    async execute (fullname){
        try {
            const response = await api.get(`/repos/${fullname}`) 
            return response.data
        } catch (error) {
            console.log("Error in show repository from git: ", error)
        }

    }
}
export default ShowRepositoryFromGit