import {API_URL} from '../utils/constants';

export async function getProductsAPI(limit= 1000){
    try {
        const response= await fetch(
            `${API_URL}/products?_sort=created_at:desc&_limit=${limit}`
        );
        const result= await response.json();
        return result;

    } catch (error) {
        console.log(error);
        return null
    }
}

export async function getProductCategory(category){
    try {
        const response= await fetch(
            `${API_URL}/products?_where[category.slug]=${category}&_sort=created_at:desc`
        );

        const result= await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null
    }
}