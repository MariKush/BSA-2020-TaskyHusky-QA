const BoardsPage = require('./Boards_po.js');
const page = new BoardsPage();

class BoardsActions{

    openCreateBoardForm(){
        page.boardsItem.waitForDisplayed(2000);
        page.boardsItem.click();
        page.createBoardItem.waitForDisplayed(2000);
        page.createBoardItem.click();
    }

    fillAndSendCreateBoardForm(boardName){
        page.createScrumBoardButton.waitForDisplayed(2000);
        page.createScrumBoardButton.click();

        page.boardNameInput.waitForDisplayed(2000);
        page.boardNameInput.clearValue();
        page.boardNameInput.setValue(boardName);
        
        page.projectComboBox.moveTo();
        page.projectComboBox.waitForDisplayed(5000);
        page.projectComboBox.waitForClickable(2000);
        page.projectComboBox.click();
        page.projectOurProject.waitForDisplayed(2000);
        page.projectOurProject.click();

        page.createButton.waitForClickable(2000);
        page.createButton.click();
    }

    isNewlyCreatedBoardDisplayed(){
        page.boardNameLink.waitForDisplayed();
        return true;
    }



}

module.exports = BoardsActions;