const LogInPage = require('./LogIn_po.js');
const page = new LogInPage();

class LogInActions{
    enterEmail(value){
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.clearValue();
        page.emailInput.setValue(value);
    }

    clickContinueButton(){
        page.continueButton.waitForDisplayed(2000);
        page.continueButton.click();
    } 

    enterPassword(value){
        page.passwordInput.waitForDisplayed(2000);
        page.passwordInput.clearValue();
        page.passwordInput.setValue(value);
    }

    clickLogInButton(){
        page.logInButton.waitForDisplayed(2000);
        page.logInButton.click();
    }

}

module.exports = LogInActions;