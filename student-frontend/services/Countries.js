import { urlAPI } from "../config/Config";

export function urlCountry(path) {
    return `${urlAPI}${path}`
}

export async function fetchListCountry() {
    const fetchData = await fetch(urlCountry('/country/list'));
    const response = await fetchData.json();
    return response
}