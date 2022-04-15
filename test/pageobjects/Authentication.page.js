
class AuthPage {

    get createAccBtn() {return $('[class*=" Login-create"]')}
    get signIn() {return $('[class*=" Login-heading"]')}
    get Username(){return $('#Username')}
    get NextBtn(){return $('[class*=" Login-submit"]')}
    get PasswordSignIn() {return $('#Password')}
    get signInSubmitBtn(){return $('[class*=" Login-submit"]')}

    async createAccBtnClick(){
        await this.createAccBtn.click();
    }
    async signInClick(){
        await this.signIn.click();
    }
    async inputUsername(username){
        await this.Username.setValue(username);
    }
    async NextBtnClick(){
        await this.NextBtn.click();
    }
    async inputPassword(pass) {
        await this.PasswordSignIn.setValue(pass);
    }
    async signInSubmitBtnClick(){
        await this.signInSubmitBtn.click();
    }
}

export default new AuthPage();
