Feature('Login');

const {I, login_page,home_page} = inject()

Scenario('Login with success', () => {
    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error', () => {
    login_page.doLogin('cteste@teste.com','123456') 
    login_page.checkLoginError()
});



