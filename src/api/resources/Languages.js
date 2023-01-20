import { APISettings } from "../config";
const place = "languages";

export default {
    async find( ){
        return fetch( APISettings.baseURL + place, {
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
        return fetch( `${APISettings.baseURL + place}/${id}`, {
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