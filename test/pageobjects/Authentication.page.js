const Page = require('./Page')

const createAccBtn = '[class*=" Login-create"]';
const signIn = '[class*=" Login-heading"]';
const UserName = '#Username'; //sign in field
const NextBtn = '[class*=" Login-submit"]';
const PasswordSignIn = '#Password';
const signInSubmitBtn = '[class*=" Login-submit"]';
const firstNameCreate = '#FirstName' //create acc field
const lastNameCreate = '#LastName'
const email = '#Email';
const PhoneNumb = '#PhoneNumber';
const PasswordCreateAcc = '#Password';
const PasswordConfirm = '#ConfirmPassword';
const RegisterBtn = '[class="btn btn-lg btn-primary"]';

class AuthPage {

    async inputUserName(UsName){
        return await Page.setValue(UserName, UsName)
    }

    async NextBtnClick(){
        return await Page.click(NextBtn)
    }

    async inputPasswordSignIn(Pass){
        return await Page.setValue(PasswordSignIn, Pass)
    }

    async signInSubmitBtnClick(){
        return await Page.click(signInSubmitBtn)
    }


    async createAccBtnClick(){
        return await Page.click(createAccBtn)
    }

    async inputFisrtName(firstName) {
        return await Page.setValue(firstNameCreate, firstName)
    }

    async inputLastName(lastName){
        return await Page.setValue(lastNameCreate, lastName)
    }

    async inputEmail(mail){
        return await Page.setValue(email, mail)
    }

    async inputPhoneNumber(Phone){
        return await Page.setValue(PhoneNumb, Phone)
    }

    async inputPassword(Pass){
        return await Page.setValue(PasswordCreateAcc, Pass)
    }

    async inputPasswordConfirm(PassConf){
        return await Page.setValue(PasswordConfirm, PassConf)
    }

    async RegisterBtnClick(){
        return await Page.click(RegisterBtn)
    }

    async signInClick(){
        return await Page.click(signIn)
    }

    async 
}

module.exports = new AuthPage();
