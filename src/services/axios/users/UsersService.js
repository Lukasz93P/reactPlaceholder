import AxiosService from '../AxiosService';
import QueryStringGenerator from '../queryString/QueryStringGenerator';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

class UsersService extends AxiosService {

    /**
     *
     * @param {QueryStringGenerator} queryStringGenerator
     */
    constructor(queryStringGenerator) {
        super(queryStringGenerator, {baseURL: USERS_URL, timeout: 99999});
    }
}

export default new UsersService(QueryStringGenerator);