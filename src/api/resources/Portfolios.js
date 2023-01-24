import { APISettings } from "../config";
const place = "portfolios";

const query = "?populate[thumbnail][fields][0]=url&populate=frameworks"
const apiUrl = APISettings.baseURL + "/api/";
export default {
    async find( ) {
        return fetch( apiUrl + place + query, {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },

    async getById( id ){
        return fetch( `${apiUrl + place}/${id}${query}`, {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                const { data } = response.json();
                return data;
            }
        });
    }
}