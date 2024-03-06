import BaseApi from '../api'

export default class bannerApi extends BaseApi {
    static async getAllBanner() {
        return await this.api.get('banner',{}).then(({data}) => data)
    }
}