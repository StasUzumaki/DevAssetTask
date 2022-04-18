const Page = require('./Page')

const CreateRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const RegisterName = '[formcontrolname="name"]'
const EntityName = '[formcontrolname="entityName"]'
const NextBtn = '[class="btn btn-primary ml-2"]'
const TryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const RegisterSelection = '#register-selection'
const AllRegisters = '[class="dropdown-item text-primary"]'
const FirstRegister = '//*[@class="table ng-star-inserted"]/tbody/tr[1]/td[2]/a'
const CreateAssetGroupTemplate = '[routerlink*="template"]'
const CapitalWorksAsset = '//*[@class="CheckboxGrid pb-3"]/div[2]'
const SaveBtn = '[class="btn btn-primary mb-3"]'
const SuccessSaved = '[class="alert-message"] p'

class DevAssetMainPage {

    async CreateRegisterBtnClick(){
        return await Page.click(CreateRegisterBtn)
    }

    async RegisterNameInput(RegName){
        return await Page.setValue(RegisterName, RegName)
    }
 
    async RegisterEntityInput(EntName){
        return await Page.setValue(EntityName, EntName)
    }

    async NextBtnClick(){
        return await Page.click(NextBtn)
    }

    async TryForFreeBtnClick(){
        return await Page.click(TryForFreeBtn)
    }
    async RegisterSelectionClick(){
        return await Page.click(RegisterSelection)
    }
    async AllRegistersClick(){
        return await Page.click(AllRegisters)
    }

    async FirstRegisterClick(){
        return await Page.click(FirstRegister)
    }

    async CreateAssetGroupTemplateBtn(){
        return await Page.click(CreateAssetGroupTemplate)
    }

    async CapitalWorksAssetClick(){
        return await Page.click(CapitalWorksAsset)
    }

    async SaveBtnClick(){
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