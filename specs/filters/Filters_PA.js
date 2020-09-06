const SettingsPage = require('./Filters_PO');
//const cretential = require('./credential.json');
const page = new SettingsPage();

class SettingsActions {
    enterEmail(value) {
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.clearValue();
        page.emailInput.setValue(value);
    }

    clickContinueButton() {
        page.continueButton.waitForDisplayed(2000);
        page.continueButton.click();
    }

    enterPassword(value) {
        page.passwordInput.waitForDisplayed(2000);
        page.passwordInput.clearValue();
        page.passwordInput.setValue(value);
    }

    clickLoginButton() {
        page.loginButton.waitForDisplayed(2000);
        page.loginButton.click();
    }

    enterContainsSearch(value) {
        page.containsInput.waitForDisplayed(2000);
        page.containsInput.clearValue();
        page.containsInput.setValue(value);
    }

    clickSearchButton() {
        page.searchButton.waitForDisplayed(2000);
        page.searchButton.click();
    }

    /*enterFindAssignee(value) {
        page.assigneeInput.waitForDisplayed({timeout: 5000});
        page.assigneeInput.setValue(value);
        page.assigneeCheckbox.waitForDisplayed({timeout: 5000});
        page.assigneeCheckbox.waitForClickable(2000);
        page.assigneeCheckbox.click();
    }

      clickAssignee() {
        page.assigneeCriteria.waitForDisplayed(2000);
        page.assigneeCriteria.click();
    }

    clickFindedAssignee() {
        page.assigneeCheckbox.waitForDisplayed({timeout: 5000});
        page.assigneeCheckbox.waitForClickable(2000);
        page.assigneeCheckbox.click();
    }
    */

    clickSaveAsButton() {
        page.saveAsButton.waitForDisplayed(2000);
        page.saveAsButton.click();
    }

    enterNewFilterName(value) {
        page.filterNameInput.waitForDisplayed(2000);
        page.filterNameInput.clearValue();
        page.filterNameInput.setValue(value);
    }

    clickSubmitFilterName() {
        page.submitButtonForCreation.waitForDisplayed(2000);
        page.submitButtonForCreation.click();
    }

    findCreatedFilter(value) {
        page.searchInput.waitForDisplayed(2000);
        page.searchInput.clearValue();
        page.searchInput.setValue(value);
    }

    clickOnStar() {
        page.star.waitForDisplayed(2000);
        page.star.click();
    }

    clickFilterSetting() {
        page.filterSetting.waitForDisplayed(2000);
        page.filterSetting.click();
    }

    clickDeleteFilter() {
        page.deleteFilter.waitForDisplayed(2000);
        page.deleteFilter.click();
    }

    submitDelete() {
        page.deleteButton.waitForDisplayed(2000);
        page.deleteButton.click();
    }

    getNotificationText() {
        page.notification.waitForDisplayed(2000);
        return page.notification.getText();
    }

    getNotificationTitleText() {
        page.notificationTitle.waitForDisplayed(2000);
        return page.notificationTitle.getText();
    }

    getFavoriteText() {
        page.favorite.waitForDisplayed(2000);
        return page.favorite.getText();
    }
}

module.exports = SettingsActions;