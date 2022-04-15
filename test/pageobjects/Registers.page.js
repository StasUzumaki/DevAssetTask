class RegistersPage{

    get FirstRegister(){return $('//*[@class="table ng-star-inserted"]/tbody/tr[1]/td[2]/a')}



    async FirstRegisterClick(){
        await this.FirstRegister.click()
    }
}
export default new RegistersPage();
