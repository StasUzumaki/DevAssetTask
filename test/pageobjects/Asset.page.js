class AssetPage{
    get CreateAssetGroupTemplate(){return $('[routerlink*="template"]')}


    async CreateAssetGroupTemplateBtn(){
        await this.CreateAssetGroupTemplate.click()
    }
}
export default new AssetPage();
