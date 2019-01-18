/**
 *
 * @param {object} conditions
 * @return string
 */
export const generateQueryString = conditions => {
    let queryString = '?';
    Object.entries(conditions).map(([key, value]) => queryString += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`);

    return queryString;
};