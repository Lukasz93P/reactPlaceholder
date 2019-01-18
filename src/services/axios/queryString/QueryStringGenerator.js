import {generateQueryString} from "../../../helpers/http/httpHelpers";

class QueryStringGenerator {

    /**
     * @public
     * @param {object} conditions
     * @return string
     */
    generateQueryString = conditions => {
        return generateQueryString(conditions);
    }
}

export default new QueryStringGenerator();