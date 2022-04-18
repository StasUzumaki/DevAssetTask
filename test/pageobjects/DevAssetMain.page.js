const Page = require('./Page')

const CreateRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const RegisterName = '[formcontrolname="name"]'
const EntityName = '[formcontrolname="entityName"]'
const NextRegisterBtn = '[class="btn btn-primary ml-2"]'
const TryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const RegisterSelection = '#register-selection'
const AllRegisters = '[class="dropdown-item text-primary"]'
const FirstRegister = '//*[@class="table ng-star-inserted"]/tbody/tr[1]/td[2]/a'
const CreateAssetGroupTemplateBtn = '[routerlink*="template"]'
const CapitalWorksAsset = '//*[@class="CheckboxGrid pb-3"]/div[2]'
const SaveBtn = '[class="btn btn-primary mb-3"]'
const SuccessSaved = '[class="alert-message"] p'

class DevAssetMainPage {

    async clickCreateCreateRegisterBtn(){
        return await Page.click(CreateRegisterBtn)
    }

    async setRegisterNameValue(registerNameInput){
        return await Page.setValue(RegisterName, registerNameInput)
    }
 
    async setRegisterEntityValue(entityNameInput){
        return await Page.setValue(EntityName, entityNameInput)
    }

    async clickCreateNextRegisterBtn(){
        return await Page.click(NextRegisterBtn)
    }

    async clickCreateTryForFreeBtn(){
        return await Page.click(TryForFreeBtn)
    }
    async clickCreateRegisterSelectionDropDown(){
        return await Page.click(RegisterSelection)
    }
    async clickCreateAllRegistersLink(){
        return await Page.click(AllRegisters)
    }

    async clickCreateFirstRegister(){
        return await Page.click(FirstRegister)
    }

    async clickCreateCreateAssetGroupTemplateBtn(){
        return await Page.click(CreateAssetGroupTemplateBtn)
    }

    async clickCreateCapitalWorksAssetForm(){
        return await Page.click(CapitalWorksAsset)
    }

    async clickCreateSaveBtn(){
        return await Page.click(SaveBtn)
    }

    async getSuccessText(){
        return await Page.getElementText(SuccessSaved)
    }

    async getLinkText(linkSelector){
        return await Page.getElementText(linkSelector);
    }
}
module.exports = new DevAssetMainPage();