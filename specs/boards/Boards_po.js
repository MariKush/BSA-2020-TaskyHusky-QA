const data = require('../testData.json');

class BoardsPage{

    get boardsItem () { return $('div=Boards')};
    get createBoardItem () { return $('div=Create board')};

    get createScrumBoardButton () { return $('button=Create a SCRUM board')};

    get boardNameInput () { return $('input[placeholder="Board name"]')};
    get projectComboBox () { return $('div[role="combobox"]')};
    get projectOurProject () { return $('span=Our Project (ON)')};
    get createButton () { return $('button=Create a board')};

    get boardNameLink () { return $('a=' + data.boardName + '')};




}

module.exports = BoardsPage;