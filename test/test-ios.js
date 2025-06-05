describe("main agent test app - ios", () => {
  it("Opens app", async () => {
    const home = await $("id:Home");
    await home.waitForDisplayed({ timeout: 30000 });
    await home.click();
  });

  it("Opens the ToDo tab and adds todo", async () => {
    const todo = await $("accessibility id:TodoList");
    await todo.waitForDisplayed({ timeout: 30000 });
    await todo.click();
    const openKeyboard = await $("accessibility id:text-input-flat");
    await openKeyboard.waitForDisplayed({ timeout: 30000 });
    await openKeyboard.click();
    const typeS = await $("accessibility id:S");
    await typeS.click();
    const typeD = await $("accessibility id:d");
    await typeD.click();
    const typeF = await $("accessibility id:f");
    await typeF.click();
    const typeG = await $("accessibility id:g");
    await typeG.click();
    const add = await $("accessibility id:Add");
    await add.click();

    const deleteTodo2 = await $("accessibility id:Sdfg Delete");
    await deleteTodo2.click();
    const closeKeyboard2 = await $("accessibility id:Return");
    await closeKeyboard2.click();
  });

  it("Clicks around the Explore tab", async () => {
    const el1 = await $("accessibility id:Explore");
    await el1.click();

    const el2 = await $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Google"`][2]'
    );
    await el2.waitForDisplayed({ timeout: 30000 });
    await el2.click();

    const el3 = await $(
      '-ios class chain:**/XCUIElementTypeButton[`name == "Done"`]'
    );
    await el3.waitForDisplayed({ timeout: 90000 });
    await el3.click();

    const el4 = await $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "New Relic"`][2]'
    );
    await el4.waitForDisplayed({ timeout: 30000 });
    await el4.click();

    const el5 = await $(
      '-ios class chain:**/XCUIElementTypeButton[`name == "Done"`]'
    );
    await el5.waitForDisplayed({ timeout: 90000 });
    await el5.click();
    const el6 = await $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Expo"`][2]'
    );
    await el6.waitForDisplayed({ timeout: 30000 });
    await el6.click();
    
    const el7 = await $(
      '-ios class chain:**/XCUIElementTypeButton[`name == "Done"`]'
    );
    await el7.waitForDisplayed({ timeout: 90000 });
    await el7.click();

    const el8 = await $("accessibility id:Good Http Request");
    await el8.waitForDisplayed({ timeout: 30000 });

    const el13 = await driver.$("accessibility id:Distributed Tracing Request");
    await el13.waitForDisplayed({ timeout: 30000 });

    const el14 = await driver.$("accessibility id:Reset");
    await el14.waitForDisplayed({ timeout: 30000 });
    await el14.click();

    const el9 = await $("accessibility id:Bad Http Request");
    await el9.waitForDisplayed({ timeout: 30000 });
    await el9.click();

    await el13.click();
    await driver.background(2)
    await el9.click();
    await el9.click();
    await el9.click();
    await el9.click();
    await el9.click();
    await el9.click();
    await el9.click();

    await driver.background(2);
    await el9.click();

    await el8.click();
    await el8.click();
    await el8.click();
    await el8.click();
    await el8.click();
    await el8.click();
    await el8.click();
    await driver.background(2);
    await el13.click();
    await el13.click();
    await el13.click();
    await el13.click();
    await el13.click();
    await el13.click();
    await driver.background(2);
  });
  
  it("Clicks around the Crash tab", async () => { 
    const el1 = await $("accessibility id:Crash");
    await el1.waitForDisplayed({ timeout: 30000 });
    await el1.click();

    const el2 = await $("accessibility id:URI Error");
    await el2.waitForDisplayed({ timeout: 30000 });
    await el2.click();

    await driver.execute("mobile: launchApp", { bundleId: "com.newrelic.mainagenttestapp" });

    const el3 = await $("accessibility id:Crash");
    await el3.waitForDisplayed({ timeout: 30000 });
    await el3.click();

    const el4 = await $("accessibility id:Type Error");
    await el4.waitForDisplayed({ timeout: 30000 });
    await el4.click();

    await driver.execute("mobile: launchApp", { bundleId: "com.newrelic.mainagenttestapp" });

    const el5 = await $("accessibility id:Crash");
    await el5.waitForDisplayed({ timeout: 30000 });
    await el5.click();

    const el6 = await $("accessibility id:Eval Error");
    await el6.waitForDisplayed({ timeout: 30000 });
    await el6.click();

    await driver.execute("mobile: launchApp", { bundleId: "com.newrelic.mainagenttestapp" });
  });
    
  it("Opens app", async () => {
    const home = await $("id:Home");
    await home.waitForDisplayed({ timeout: 30000 });
    await home.click();
  });
});
