class AuthenticateService {

    registerSuccesfulLogin(userName, password){

        sessionStorage.setItem('authenticatedUser', userName)
        sessionStorage.setItem('authenticatedPassword',password)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem("authenticatedPassword")
    }

    isUserLoggedIn(){

        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return false;
        }
        else return true;
    }
    getUserName(){

        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return ' ';
        }
        else return user;
    }


}

export default new AuthenticateService()