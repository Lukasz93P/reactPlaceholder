import axios from 'axios';

class AxiosService {

    /**
     * @protected
     * @type {AxiosInstance}
     */
    service;

    /**
     * @protected
     * @type {QueryStringGenerator}
     */
    queryStringGenerator;

    /**
     * @public
     * @param {QueryStringGenerator} queryStringGenerator
     * @param {object} config
     */
    constructor(queryStringGenerator, config) {
        this.queryStringGenerator = queryStringGenerator;
        this.initService(config);
    };

    /**
     * @private
     * @param {object} config
     * @return {void}
     */
    initService = config => {
        this.service = axios.create(config);
    };

    /**
     *
     * @param {object} conditions
     * @public
     * @return {AxiosPromise<any>}
     */
    fetchAll = (conditions = {}) => this.service.get(this.queryStringGenerator.generateQueryString(conditions));

    /**
     *
     * @public
     * @param {int|string} id
     * @return {AxiosPromise<any>}
     */
    fetchById = id => this.service.get(`/${id}`);


    /**
     *
     * @public
     * @param {object} data
     * @return {AxiosPromise<any>}
     */
    create = data => this.service.post(``, data);

    /**
     *
     * @public
     * @param {int|string} id
     * @return {AxiosPromise}
     */
    deleteById = id => this.service.delete(`/${id}`);

    /**
     *
     * @public
     * @param {int|string} id
     * @param {object} data
     * @return {AxiosPromise<any>}
     */
    update = (id, data) => this.service.put(`/${id}`, data);
}

export default AxiosService;