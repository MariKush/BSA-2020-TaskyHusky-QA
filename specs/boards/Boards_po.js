const data = require('../testData.json');

class BoardsPage{

    get boardsItem () { return $('div=Boards')};
    get createBoardItem () { return $('div=Create board')};
    get viewAllBoardsItem () { return $('a[href="/boards"]')};

    get createScrumBoardButton () { return $('button=Create a SCRUM board')};

    get boardNameInput () { return $('input[placeholder="Board name"]')};
    get projectComboBox () { return $('div[role="combobox"]')};
    get projectOurProject () { return $('span=Our Project (ON)')};
    get createButton () { return $('button=Create a board')};

    get boardNameLink () { return $(`a=' + data.boardName + '`)};
    get threeDotsButton () { return $$('span.dropdown')[2]};

    get deleteItem () { return $('span=Delete')};
    get deleteButton () { return $('button=Delete')}
    
}

module.exports = BoardsPage;