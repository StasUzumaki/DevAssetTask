class CreateOrgPage {

    get OrgName(){return $('[formcontrolname="name"]')}
    get createBtn(){return$('[class="btn btn-primary"]')}

    async inputOrgName(orgname){
        await this.OrgName.setValue(orgname)
    }
    async createBtnClick(){
        await this.createBtn.click()
    }
}
export default new CreateOrgPage();