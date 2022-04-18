const AuthPage =require('../pageobjects/Authentication.page')
const DevAssetMainPage = require('../pageobjects/DevAssetMain.page');
const assert = require('assert');
const {expect} = require('chai');

describe('dev asset page', () => {
    it('should create account with valid credentials', async () => {
        await browser.url('https://dev.asset.accountant') 
        await AuthPage.clickCreateCreateAccountBtn();
        await AuthPage.setFisrtNameValue('Stanislav')
        await AuthPage.setLastNameValue('Lavryk') 
        await AuthPage.setEmailValue('stashuskar2003@gmail.com') 
        await AuthPage.setPhoneNumberValue('0933691181')
        await AuthPage.setPasswordCreateAccValue('salampopolam228')
        await AuthPage.setPasswordCreateAccConfirmValue('salampopolam228')
        await AuthPage.clickCreateRegisterBtn();
        await expect(await AuthPage.isEmailVerificationFormDisplayed()).true;
    });
    it('should login with valid credentials, create new register and adding an asset group from a template', async () => {
        await browser.url('https://dev.asset.accountant') 
        await AuthPage.clickCreateSignInBtn()
        await AuthPage.setUserNameValue('stashuskar2003@gmail.com')
        await AuthPage.clickCreateNextBtn()
        await AuthPage.setPasswordSignInValue('salampopolam228')
        await AuthPage.clickCreateSignInSubmitBtn()
        await DevAssetMainPage.clickCreateCreateRegisterBtn()
        await DevAssetMainPage.setRegisterNameValue('TestDebAsset')
        await DevAssetMainPage.setRegisterEntityValue('test123')
        await DevAssetMainPage.clickCreateNextRegisterBtn()
        await DevAssetMainPage.clickCreateTryForFreeBtn()
        await DevAssetMainPage.clickCreateRegisterSelectionDropDown()
        await DevAssetMainPage.clickCreateAllRegistersLink()
        await DevAssetMainPage.clickCreateFirstRegister()
        await DevAssetMainPage.clickCreateCreateAssetGroupTemplateBtn()
        await DevAssetMainPage.clickCreateCapitalWorksAssetForm()
        await DevAssetMainPage.clickCreateSaveBtn()
        assert.strictEqual(await DevAssetMainPage.getSuccessText(),'Saved 1 asset groups successfully')
    });
});


