import { APISettings } from "../config";
const place = "languages";
const apiUrl = APISettings.baseURL + "/api/";
export default {
    async find( ){
        return fetch( apiUrl + place, {
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
        return fetch( `${apiUrl + place}/${id}`, {
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
    }
}