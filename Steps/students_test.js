Feature('Students');

const {I, login_page, home_page} = inject()


const code = require(`../Utils/code`)
const names = require(`../Utils/name`)



Scenario('Add student with success', () => {

    const myCode = code.getCode()
    const myNames = names.getName()
    login_page.doLogin('teste@teste.com','123456')
    home_page.registerStudent(myCode,myNames)
    home_page.searchStudent(myNames,myCode)
    
});


