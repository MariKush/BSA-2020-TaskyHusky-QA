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

    openViewAllBoardsPage(){
        page.boardsItem.waitForDisplayed(2000);
        page.boardsItem.click();
        page.viewAllBoardsItem.waitForDisplayed(2000);
        page.viewAllBoardsItem.waitForClickable(2000);
        page.viewAllBoardsItem.click();
    }

    isNewlyCreatedBoardDisplayed(){
        page.boardNameLink.waitForDisplayed(2000);
        return page.boardNameLink.isDisplayed();
    }

    deleteBoard(){
        page.threeDotsButton.click();

        page.deleteItem.waitForDisplayed(2000);
        page.deleteItem.waitForClickable(2000);
        page.deleteItem.click();

        page.deleteButton.waitForClickable(2000);
        page.deleteButton.click();

        browser.pause(1000);
    }

    isNewlyCreatedBoardDeleted(){
        return !page.boardNameLink.isExisting();
    }

}

module.exports = BoardsActions;