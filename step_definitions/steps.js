const { I } = inject();

Given('I fill email', () => {
  I.fillField('~email',`teste@teste.com`)
});

Given('I fill password', () => {
  I.fillField(`~senha`,`123456`)
});

When('I tap on Entrar', () => {
  I.tap(`~entrar`)
  
});

Then('I see the Salvar', () => {
  I.waitForElement(`~salvar`,7)  
  I.seeElement(`~salvar`)
});
