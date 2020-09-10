class Page {
    get containsInput() {return $('input[placeholder="Contains text"')};
    get searchButton() {return $('button=Search')};
    get threeDotsButton() {return $('i.ellipsis')};
    get saveAsButton() {return $('span=Save as')};
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

module.exports = Page;