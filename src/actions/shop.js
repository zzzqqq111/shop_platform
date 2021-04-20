import {api} from '@utils/config'
const {getBannerList} = api

export function queryBanner(params){
    return {
        type: getBannerList,
        params
    }
}