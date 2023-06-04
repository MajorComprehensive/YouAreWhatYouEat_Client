import {
    DishesInfo,
    DishHavethetag,
    DishAll,
    DishesAll
    
} from '@/models/dishes_info'

import {GetApi,PostApi} from "@/utils/requests"
import axios from 'axios';


class DishesApi {

    public async getCategoryDishes(dish_tag:string,promotion_id:number){
        return (await (GetApi("OrderDish/GetCategoryDishes",{
            dish_tag:dish_tag,
            promotion_id:promotion_id
        }))).data as DishHavethetag[];
    }
    public async getAllDishes(){
        return (await (GetApi("OrderDish/GetAllDishes",{
        }))).data.dish_all as DishAll[];
    }
    public async getRecommendationDishes(ctx){
        // console.log("CTX",ctx);
        let res=await axios.get(`/recommendation/${ctx.query.user}`,{
            baseURL:"http://localhost:8001",
            params:"",
        });
        return res.data['recommendation'] as DishAll[];
    }
}

export const dishesApi = new DishesApi();