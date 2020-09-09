const Menu = require('./Filters_MenuPO');
const menu = new Menu();

class MenuActions {

    _moveToFilters() {
        menu.filters.waitForDisplayed(5000);
        menu.filters.click();
    }

    _moveToProfile() {
        menu.profileDropdown.waitForDisplayed(5000);
        menu.profileDropdown.click();
    }

    navigateToAdvancedSearch() {
        this._moveToFilters();
        menu.advancedSearch.waitForDisplayed(2000);
        menu.advancedSearch.click();
    }

    navigateToViewAllFilters() {
        this._moveToFilters();
        menu.viewAllFiltres.waitForDisplayed(2000);
        menu.viewAllFiltres.click();
    }
    
    navigateToLogOut() {
        this._moveToProfile();
        menu.logoutButton.waitForDisplayed(2000);
        menu.logoutButton.click();
    }
}

module.exports = MenuActions;