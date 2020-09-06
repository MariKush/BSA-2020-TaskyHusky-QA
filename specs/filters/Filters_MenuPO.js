class MenuPage {
    get filters () {return $('div=Filters')};
    get advancedSearch () {return $('a[href="/advancedSearch"]')};
    get viewAllFiltres () {return $('a[href="/filters"]')};
    get profileDropdown () {return $$('div.divider.text')[3]};
    get logoutButton () {return $('div=Log out')};
};

module.exports = MenuPage;