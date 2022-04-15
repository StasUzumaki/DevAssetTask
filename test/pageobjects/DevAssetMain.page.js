class DevAssetMainPage {

    get CreateRegisterBtn(){return $('//*[@class="col-6 col-lg-3 demo-action"]/button')}
    get RegisterName(){return $('[formcontrolname="name"]')}
    get EntityName(){return $('[formcontrolname="entityName"]')}
    get NextBtn() {return $('[class="btn btn-primary ml-2"]')}
    get TryForFreeBtn() {return $('//*[contains(text(), "Try For Free")]')}
    get RegisterSelection(){return $('#register-selection')}
    get AllRegisters(){return $('[class="dropdown-item text-primary"]')}

    async CreateRegisterBtnClick(){
        await this.CreateRegisterBtn.click()
    }
    async inputRegisterForm(regname, entityName){
        await this.RegisterName.setValue(regname)
        await this.EntityName.setValue(entityName)
        await this.NextBtn.click()
    }
    async TryForFreeBtnClick(){
        await this.TryForFreeBtn.click()
    }
    async RegisterSelectionClick(){
        await this.RegisterSelection.click()
    }
    async AllRegistersClick(){
        await this.AllRegisters.click()
    }


}
export default new DevAssetMainPage();