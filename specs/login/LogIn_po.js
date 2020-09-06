class LogInPage{

    get emailInput () { return $('input[placeholder="Email"]')};
    get continueButton () { return $('button=Continue')};
    get passwordInput () { return $('input[type="password"]')};
    get logInButton () { return $('button=Log in')};
  
}

module.exports = LogInPage;