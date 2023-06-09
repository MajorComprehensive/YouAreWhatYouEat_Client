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
        let user="";
        if('user' in ctx.query){
            user=ctx.query.user;
        }else{
            user="default";
        }

        // console.log("CTX",ctx.query === );
        let res=await axios.get(`/recommendation/${user}`,{
            baseURL:"http://192.168.193.163:18001",
            params:"",
        });
        console.log('user',ctx.query.user);
        return res.data['recommendation'] as DishAll[];
    }
}

export const dishesApi = new DishesApi();