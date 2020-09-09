const PageActions = require('./filters/Filters_PA');
const MenuActions = require('./filters/Filters_MenuPA');
const LogInActions = require('./login/LogIn_pa');
const assert = require('assert');
const data = require('./testData.json');

const menuSteps = new MenuActions();
const pageSteps = new PageActions();
const logInActions = new LogInActions();


describe('Filters test suite', () => {

    before(()=>{
        browser.maximizeWindow();
        browser.url(data.logInUrl);
    });

    beforeEach(() => {
        browser.maximizeWindow();
        userLogin(data.email, data.password);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    function userLogin(email, password){

        logInActions.enterEmail(email);
        logInActions.clickContinueButton();
        logInActions.enterPassword(password);
        logInActions.clickLogInButton();
    
    };
    
    it('Create and add to favorite filter', () => { 

        menuSteps.navigateToAdvancedSearch();
        pageSteps.enterContainsSearch(data.containsWord);
        pageSteps.clickSearchButton();
        pageSteps.clickThreeDots();
        pageSteps.clickSaveAsButton();
        pageSteps.enterNewFilterName(data.newFilterName);
        pageSteps.clickSubmitFilterName();

        assert.strictEqual(pageSteps.getNotificationText(), data.notificationText);
        assert.strictEqual(pageSteps.getNotificationTitleText(), data.notificationTitleText);
        
        menuSteps.navigateToViewAllFilters();
        pageSteps.findCreatedFilter(data.newFilterName);
        pageSteps.clickOnStar();

        assert.strictEqual(pageSteps.getFavoriteText(), data.favoriteText);

        pageSteps.clickFilterSetting();
        pageSteps.clickDeleteFilter();
        pageSteps.submitDelete();

        browser.pause(3000);
        
        menuSteps.navigateToLogOut();

        browser.pause(3000);
    });

});