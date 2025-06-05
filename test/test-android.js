describe("main agent test app - android", () => {
  it("Opens app", async () => {
    const openHome = await driver.$('-android uiautomator:new UiSelector().text("")');
    await openHome.waitForDisplayed({ timeout: 30000 });
    await openHome.click();
  });

  it("Opens, adds and deletes a todo", async () => {
    const openTodo = await driver.$("accessibility id:Todo List");
    await openTodo.click();
    const typeTodo = await driver.$('-android uiautomator:new UiSelector().resourceId("text-input-flat-label-inactive")');
    await typeTodo.click();
    await driver.sendKeys(["Sdfg"]);
    const clickAdd = await driver.$("accessibility id:Add");
    await clickAdd.waitForDisplayed({ timeout: 30000 });
    await clickAdd.click();
    const clickDelete = await driver.$("accessibility id:DELETE");
    await clickDelete.waitForDisplayed({ timeout: 30000 });
    await clickDelete.click();
  });

  it("Clicks around the Explore tab", async () => {
    const openExplore = await driver.$("accessibility id:, Explore");
    await openExplore.click();
    const clickGoodHttp = await driver.$('-android uiautomator:new UiSelector().text("GOOD HTTP REQUEST")');
    await clickGoodHttp.waitForDisplayed({ timeout: 30000 });
    await clickGoodHttp.click();
    const clickDtRequest = await driver.$('-android uiautomator:new UiSelector().text("DISTRIBUTED TRACING REQUEST")');
    await clickDtRequest.waitForDisplayed({ timeout: 30000 });

    await clickGoodHttp.click();
    const clickReset = await driver.$('-android uiautomator:new UiSelector().text("RESET")');
    await clickReset.click();

    const clickBadHttp = await driver.$('-android uiautomator:new UiSelector().text("BAD HTTP REQUEST")');
    await clickBadHttp.waitForDisplayed({ timeout: 30000 });
    await clickBadHttp.click();
    await clickBadHttp.click();
    await clickDtRequest.click();
    await clickGoodHttp.click();
    await clickGoodHttp.click();

    await driver.background(2);

    await clickBadHttp.click();

    await clickGoodHttp.click();
    await clickGoodHttp.click();

    await clickBadHttp.click();
    await clickBadHttp.click();

    await clickDtRequest.click();
    await clickDtRequest.click();
    await clickDtRequest.click();
    await clickDtRequest.click();

    await driver.background(2);

    const openGoogle = await driver.$("accessibility id:Google");
    await openGoogle.click();
    const dismissGoogle = await driver.$("id:com.android.chrome:id/signin_fre_dismiss_button");
    await dismissGoogle.click();
    const closeTab = await driver.$("accessibility id:Close tab");
    await closeTab.click();
    const openNR = await driver.$("accessibility id:New Relic");
    await openNR.click();
    const closeNR = await driver.$("accessibility id:Close tab");
    await closeNR.click();
    const openExpo = await driver.$("accessibility id:Expo");
    await openExpo.click();
    const closeExpo = await driver.$("accessibility id:Close tab");
    await closeExpo.click();
  });

  it("Clicks around the Crash tab", async () => {
    const openCrash = await driver.$("accessibility id:Crash");
    await openCrash.waitForDisplayed({ timeout: 30000 });
    await openCrash.click();

    const clickRangeError = await driver.$('-android uiautomator:new UiSelector().text("RANGE ERROR")');
    await clickRangeError.waitForDisplayed({ timeout: 30000 });
    await clickRangeError.click();
    await driver.setTimeouts(5000);
    await driver.background(5);
    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await openCrash.click();

    const clickReferenceError = await driver.$("-android uiautomator:new UiSelector().text(\"REFERENCE ERROR\")");
    await clickReferenceError.waitForDisplayed({ timeout: 30000 });
    await clickReferenceError.click();
    await driver.setTimeouts(5000);
    await driver.background(5);
    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await openCrash.click();

    const clickURIError = await driver.$('-android uiautomator:new UiSelector().text("URI ERROR")');
    await clickURIError.waitForDisplayed({ timeout: 30000 });
    await clickURIError.click();
    await driver.setTimeouts(5000);
    await driver.background(5);
    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await openCrash.click();

    const clickEvalError = await driver.$('-android uiautomator:new UiSelector().text("EVAL ERROR")');
    await clickEvalError.waitForDisplayed({ timeout: 30000 });
    await driver.setTimeouts(5000);
    await driver.background(5);
    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await openCrash.click();

    // Simulate ANR
    const clickSimulateANR = await driver.$('-android uiautomator:new UiSelector().text("SIMULATE ANR")');
    await clickSimulateANR.waitForDisplayed({ timeout: 30000 });
    await clickSimulateANR.click();
    await driver.pause(30000);
    await driver.background(5);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    const closeToast = await driver.$("id:android:id/aerr_close");
    await closeToast.click();
    await driver.activateApp("com.anonymous.mainagenttestapp");
  });

  it("Opens app", async () => {
    const el1 = await driver.$('-android uiautomator:new UiSelector().text("")');
    await el1.waitForDisplayed({ timeout: 30000 });
    await el1.click();
  });
});
