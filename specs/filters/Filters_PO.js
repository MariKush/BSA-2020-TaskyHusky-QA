class SettingsPage {
    get emailInput() {return $('input[placeholder=Email]')};
    get continueButton() {return $('button=Continue')};
    get passwordInput() {return $('input[placeholder=Password][type=password]')};
    get loginButton() {return $('button=Log in')};
    //get assigneeCriteria() {return $('span=Assignee')};
    //get assigneeInput() {return $('input[placeholder="Find by Assignee"]')};
    //get assigneeCheckbox() {return  $('label="Alesya Afanaseva')};
    get containsInput() {return $('input[placeholder="Contains text"')};
    get searchButton() {return $('button=Search')};
    get saveAsButton() {return $('button.ui.compact.button.styles_saveBtn__2P-Pe')};
    get filterNameInput() {return $('input[placeholder="Enter filter name')};
    get submitButtonForCreation() {return $('i.checkmark.icon')};
    get searchInput() {return $('input[placeholder="Search..."')};
    get star() {return $('div.ui.star,rating')};
    get filterSetting() {return $('span.dropdown')};
    get deleteFilter() {return $('span=Delete filter')};
    get deleteButton() {return $('button=Delete')};
    get notificationTitle() {return $('h4.title')};
    get notification() {return $('div.message')};
    get favorite() {return $$('td')[3]};
};

module.exports = SettingsPage;