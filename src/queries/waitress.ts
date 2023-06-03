import {
    VipInfo,
    UpdateCredit
} from '@/models/vip'

import {GetApi,PostApi} from "@/utils/requests"



interface Waitress{
    waiter_id:   string;
    waiter_name: string;
}

class  WaitressInfoApi {

    public async getWaitressInfo(table_id:number){

		try{
			let response=await (GetApi("Table/WaiterByTable",{
				table_id:table_id
			}));


			if(response.status!=200){
				return null;
			}

			return response.data as Waitress;

		}
		catch{
			return null;
		}
    }

}

export const waitressInfoApi = new WaitressInfoApi();