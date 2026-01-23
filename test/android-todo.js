const Android = require("./pages/androidPage");

describe("main agent test app - android", () => {
  let androidPage;

  beforeEach(async () => {
    androidPage = new Android(driver);
  });

  it("Opens the app and adds a todo", async () => {
    await androidPage.launchApp();
    await androidPage.clickTodoTab();
    await androidPage.addTodo(["Hello"]);
    
    await androidPage.backgroundApp();
  });

  it("Loops through opening and closing apps on the phone", async () => {
    await androidPage.killTime();
  });
});
