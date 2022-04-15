class CreateAccPage {

    get firstName() {return $('#FirstName') }
    get lastName() {return $('#LastName') }
    get email() {return $('#Email') }
    get phone() {return $('#PhoneNumber') }
    get password() {return $('#Password') }
    get confirmPassowrd() {return $('#ConfirmPassword') }
    get RegisterBtn() {return $('[class="btn btn-lg btn-primary"]')}


    async Register (firstName, lastName, email, phone, password, confirmPassowrd) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.phone.setValue(phone);
        await this.password.setValue(password);
        await this.confirmPassowrd.setValue(confirmPassowrd);
    }
    async RegisterBtnClick(){
        await this.RegisterBtn.click();
    }

}

export default new CreateAccPage();