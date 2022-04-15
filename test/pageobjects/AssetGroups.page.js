class AssetGroups{

    get CapitalWorksAsset(){return $('//*[@class="CheckboxGrid pb-3"]/div[2]')}
    get SaveBtn(){return $('[class="btn btn-primary mb-3"]')}
    get SuccessSaved(){return $('[class="alert-message"]')}

    async CapitalWorksAssetClick(){
        await this.CapitalWorksAsset.click()
    }

    async SaveBtnClick(){
        await this.SaveBtn.click()
    }


}

export default new AssetGroups();

