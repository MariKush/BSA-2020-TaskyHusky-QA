const Page = require('./Filters_PO');
const page = new Page();

class PageActions {

    enterContainsSearch(value) {
        page.containsInput.waitForDisplayed(2000);
        page.containsInput.clearValue();
        page.containsInput.setValue(value);
    }

    clickSearchButton() {
        page.searchButton.waitForDisplayed(2000);
        page.searchButton.click();
    }

    clickThreeDots() {
        page.threeDotsButton.waitForDisplayed(2000);
        page.threeDotsButton.click();
    }


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

module.exports = PageActions;