import { urlAPI } from "../config/Config";

export function urlCountry(path) {
    return `${urlAPI}${path}`
}

export const fetchListCountry = async() => {
    const fetchData = await fetch(urlCountry('/country/list'), {
        method: 'GET',
        // headers: CONTENT_TYPE_JSON,
    });
    const response = await fetchData.json();
    return response
}