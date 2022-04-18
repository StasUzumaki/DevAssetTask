const AuthPage =require('../pageobjects/Authentication.page')
const DevAssetMainPage = require('../pageobjects/DevAssetMain.page');
const assert = require('assert');

describe('dev asset page', () => {
    it('should create account with valid credentials', async () => {
        await browser.url('https://dev.asset.accountant') 
        await AuthPage.createAccBtnClick();
        await AuthPage.inputFisrtName('Stanislav')
        await AuthPage.inputLastName('Lavryk') 
        await AuthPage.inputEmail('stashuskar2003@gmail.com') 
        await AuthPage.inputPhoneNumber('0933691181')
        await AuthPage.inputPassword('salampopolam228')
        await AuthPage.inputPasswordConfirm('salampopolam228')
        await AuthPage.RegisterBtnClick();
        await browser.pause(5000);

    });
    
    xit('should login with valid credentials, create new register and adding an asset group from a template', async () => {
        await browser.url('https://dev.asset.accountant') 
        await AuthPage.signInClick()
        await AuthPage.inputUserName('stashuskar2003@gmail.com')
        await AuthPage.NextBtnClick()
        await AuthPage.inputPasswordSignIn('salampopolam228')
        await AuthPage.signInSubmitBtnClick()
        await DevAssetMainPage.CreateRegisterBtnClick()
        await DevAssetMainPage.RegisterNameInput('TestDebAsset')
        await DevAssetMainPage.RegisterEntityInput('test123')
        await DevAssetMainPage.NextBtnClick()
        await DevAssetMainPage.TryForFreeBtnClick()
        await DevAssetMainPage.RegisterSelectionClick()
        await DevAssetMainPage.AllRegistersClick()
        await DevAssetMainPage.FirstRegisterClick()
        await DevAssetMainPage.CreateAssetGroupTemplateBtn()
        await DevAssetMainPage.CapitalWorksAssetClick()
        await DevAssetMainPage.SaveBtnClick()
        assert.strictEqual(await DevAssetMainPage.getSuccessText(),'Saved 1 asset groups successfully')
        //await expect(await DevAssetMainPage.getSuccessText()).toHaveTextContaining('Saved 1 asset groups successfully');
        await browser.pause(5000);
    });

});


