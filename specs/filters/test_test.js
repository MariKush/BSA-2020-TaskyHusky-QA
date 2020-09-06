const SettingsActions = require('./Filters_PA');
const MenuActions = require('./Filters_MenuPA');
const assert = require('assert');
const data = require('./data.json');

const menuSteps = new MenuActions();
const pageSteps = new SettingsActions();

describe('Your Playground test suite', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('https://stage.taskyhusky.xyz/login')
    });

    afterEach(() => {
        browser.reloadSession();
    });

    
    it('Create and add to favorite filter', () => { 

        pageSteps.enterEmail(data.email);
        pageSteps.clickContinueButton();
        pageSteps.enterPassword(data.password);
        pageSteps.clickLoginButton();

        menuSteps.navigateToAdvancedSearch();
        pageSteps.enterContainsSearch("bug");
        pageSteps.clickSearchButton();
        pageSteps.clickSaveAsButton();
        pageSteps.enterNewFilterName("Issues contains word: 'bug'");
        pageSteps.clickSubmitFilterName();

        assert.strictEqual(pageSteps.getNotificationText(), data.notificationText);
        assert.strictEqual(pageSteps.getNotificationTitleText(), data.notificationTitleText);
        
        menuSteps.navigateToViewAllFilters();
        pageSteps.findCreatedFilter("Issues contains word: 'bug'");
        pageSteps.clickOnStar();

        assert.strictEqual(pageSteps.getFavoriteText(), data.favoriteText);

        pageSteps.clickFilterSetting();
        pageSteps.clickDeleteFilter();
        pageSteps.submitDelete();

        menuSteps.navigateToLogOut();
        browser.pause(5000);

    });

});