const Android = require("./pages/androidPage");

describe("main agent test app - android", () => {
  let androidPage;

  beforeEach(async () => {
    androidPage = new Android(driver);
  });

  it("Opens the app, adds and deletes a todo", async () => {
    await androidPage.launchApp();
    await androidPage.clickTodoTab();
    await androidPage.addTodo(["Hello"]);
    
    await androidPage.backgroundApp();
  });
});