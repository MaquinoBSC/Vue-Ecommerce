import { API_URL } from '../utils/constants';

export async function createOrderAPi(data){
    try {
        const url= `${API_URL}/orders`;

        const params= {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response= await fetch(url, params);
        const result= await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}