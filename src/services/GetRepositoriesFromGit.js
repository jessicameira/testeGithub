import {api} from './apigithub';

class GetRepositoriesFromGit {
    async execute(language){

        const response = await api.get(`/search/repositories?per_page=30&sort=stars&order=desc&q=language:${language}`)

        return response.data.items

    }
}
export default GetRepositoriesFromGit