import AuthPage from  '../pageobjects/Authentication.page';
import CreateAccPage from '../pageobjects/CreateAccount.page';
import CreateOrgPage from '../pageobjects/CreateOrganisation.page';
import DevAssetMainPage from '../pageobjects/DevAssetMain.page';
import RegistersPage from '../pageobjects/Registers.page';
import AssetPage from '../pageobjects/Asset.page';
import AssetGroupsPage from '../pageobjects/AssetGroups.page';
const assert = require('assert')


describe('dev asset page', () => {
    it('should create account with valid credentials', async () => {
        await browser.url('https://dev.asset.accountant') 
        await browser.pause(8000);

        await AuthPage.createAccBtnClick();
        await browser.pause(2000);
        await CreateAccPage.Register('Stanislav', 'Lavryk', 
        'stashuskar2003@gmail.com', '0933691181', 'salampopolam228', 'salampopolam228');
        await browser.pause(1000);
        await CreateAccPage.RegisterBtnClick();
        await browser.pause(3000);

    });
    
    it('should login with valid credentials, create new register and adding an asset group from a template', async () => {
        await browser.url('https://dev.asset.accountant') 
        await browser.pause(8000);

        await AuthPage.signInClick();
        await browser.pause(1000);
        await AuthPage.inputUsername('stashuskar2003@gmail.com')
        await browser.pause(1000);
        await AuthPage.NextBtnClick();
        await browser.pause(2000);
        await AuthPage.inputPassword('salampopolam228')
        await browser.pause(1000);
        await AuthPage.signInSubmitBtnClick();
        await browser.pause(8000);

        await DevAssetMainPage.CreateRegisterBtnClick();
        await browser.pause(1000);
        await DevAssetMainPage.inputRegisterForm('TestDebAsset', 'test123')
        await browser.pause(1000);
        await DevAssetMainPage.TryForFreeBtnClick()
        await browser.pause(5000);

        await DevAssetMainPage.RegisterSelectionClick()
        await browser.pause(1000);
        await DevAssetMainPage.AllRegistersClick()
        await browser.pause(1000);
        await RegistersPage.FirstRegisterClick()
        await browser.pause(5000);

        await AssetPage.CreateAssetGroupTemplateBtn()
        await browser.pause(2000);
        await AssetGroupsPage.CapitalWorksAssetClick()
        await browser.pause(2000);
        await AssetGroupsPage.SaveBtnClick()
        await browser.pause(2000);
        assert.strictEqual(await AssetGroupsPage.SuccessSaved.getText(),'Saved 1 asset groups successfully')
        await browser.pause(5000);






    });

});


