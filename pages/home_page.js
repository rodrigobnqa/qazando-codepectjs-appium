const { I } = inject();

module.exports = {

  button:{
    save: '~salvar',
  },

  fields:{
    code: '//android.widget.EditText[@content-desc="codigo"]',
    name: '//android.widget.EditText[@content-desc="aluno"]',
    search: '//android.widget.EditText[@content-desc="search"]'
  },

  registerStudent(code,name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },


  searchStudent(search,check){
    I.fillField(this.fields.search,search)
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
  },

   checkLoginSuccess(){
    I.waitForElement(this.button.save,7)  
    I.seeElement(this.button.save)
  }

  

}
