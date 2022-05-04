const { I } = inject();

module.exports = {

  fields:{
    email:  '~email',
    password:  '~senha'
  },

  buttons:{
    enter: '~entrar'
  },

  message:{
    loginError: '~lognFail'
  },

  doLogin(email, password){
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password,password)
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    I.waitForElement(this.message.loginError,7)  
    I.seeElement(this.message.loginError)

  }

}

