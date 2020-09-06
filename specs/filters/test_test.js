const SettingsActions = require('./Filters_PA');
const MenuActions = require('./Filters_MenuPA');
const assert = require('assert');
const data = require('./data.json');

const menuSteps = new MenuActions();
const pageSteps = new SettingsActions();

function Login() {
    pageSteps.enterEmail(data.email);
    pageSteps.clickContinueButton();
    pageSteps.enterPassword(data.password);
    pageSteps.clickLoginButton(); 
};

describe('Filters test suite', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(data.url)
    });

    afterEach(() => {
        browser.reloadSession();
    });

    
    it('Create and add to favorite filter', () => { 

        Login();

        menuSteps.navigateToAdvancedSearch();
        pageSteps.enterContainsSearch(data.containsWord);
        pageSteps.clickSearchButton();
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

        menuSteps.navigateToLogOut();
    });

});