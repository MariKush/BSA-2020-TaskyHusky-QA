const BoardsActions = require('./boards/Boards_pa');
const LogInActions = require('./login/LogIn_pa');
const assert = require('assert');
const data = require('./testData.json');

const boardsActions = new BoardsActions();
const logInActions = new LogInActions();

function userLogin(email, password){

    logInActions.enterEmail(email);
    logInActions.clickContinueButton();
    logInActions.enterPassword(password);
    logInActions.clickLogInButton();

}

describe('Boards test suite', () => {

    before(()=>{
        browser.url(data.logInUrl);
        userLogin(data.email, data.password);
    });

    beforeEach(() => {
        browser.maximizeWindow();
    });


    after(() => {
        browser.reloadSession();
    });


    it('Create Scrum board', () =>{
        boardsActions.openCreateBoardForm();
        boardsActions.fillAndSendCreateBoardForm(data.boardName);
        boardsActions.openViewAllBoardsPage();
        assert.strictEqual(boardsActions.isNewlyCreatedBoardDisplayed(), true);
    });


    it('Delete board', () =>{
        boardsActions.openViewAllBoardsPage();
        boardsActions.deleteBoard();
        boardsActions.openViewAllBoardsPage();
        assert.strictEqual(boardsActions.isNewlyCreatedBoardDeleted(), true);
    });

});
