const iOS = require("./pages/iosPage");

describe("main agent test app - ios", () => {
  let iOSPage;

  beforeEach(() => {
    iOSPage = new iOS(driver);
  });

  it("Opens the ToDo tab and adds todo", async () => {
    await iOSPage.clickTodoTab();
    await iOSPage.addTodo();
    
    await iOSPage.backgroundApp();
  });

  it("Loops through opening and closing apps on the phone", async () => {
    await iOSPage.killTime();
  });
});
