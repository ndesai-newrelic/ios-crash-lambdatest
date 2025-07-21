describe("main agent test app - android", () => {
  it("Opens app", async () => {
    // wait for the app to load
    await driver.setTimeouts(5000);

    const openHome = await driver.$('-android uiautomator:new UiSelector().text("")');
    await openHome.waitForExist({ timeout: 30000 });
    await openHome.click();
  });

  it("Opens, adds and deletes a todo", async () => {
    const openTodo = await driver.$("accessibility id:Todo List");
    await openTodo.click();
    await driver.setTimeouts(3000);

    const typeTodo = await driver.$('-android uiautomator:new UiSelector().resourceId("text-input-flat-label-inactive")');
    await typeTodo.click();
    await driver.setTimeouts(3000);

    await driver.sendKeys(["Sdfg"]);
    await driver.setTimeouts(3000);

    const clickAdd = await driver.$("accessibility id:Add");
    await clickAdd.waitForExist({ timeout: 30000 });
    await clickAdd.click();
    await driver.setTimeouts(3000);
  });

  it("Clicks around the Explore tab", async () => {
    const openExplore = await driver.$("accessibility id:, Explore");
    await openExplore.click();
    await driver.setTimeouts(3000);

    const clickGoodHttp = await driver.$('-android uiautomator:new UiSelector().text("GOOD HTTP REQUEST")');
    await clickGoodHttp.waitForExist({ timeout: 30000 });
    await clickGoodHttp.click();
    await driver.setTimeouts(3000);

    const clickDtRequest = await driver.$('-android uiautomator:new UiSelector().text("DISTRIBUTED TRACING REQUEST")');
    await clickDtRequest.waitForExist({ timeout: 30000 });

    const delayedRequest = await driver.$("accessibility id:Delayed Http Request");
    await delayedRequest.waitForDisplayed({ timeout: 50000 });
    await delayedRequest.click();
    await driver.setTimeouts(5000);
    
    await delayedRequest.click();
    await driver.setTimeouts(5000);

    const background = await driver.$("id:android:id/navigationBarBackground");
    await background.click();
    await driver.setTimeouts(3000);
    await clickGoodHttp.click();
    await driver.setTimeouts(3000);
    const clickReset = await driver.$('-android uiautomator:new UiSelector().text("RESET")');
    await clickReset.click();
    await driver.setTimeouts(3000);
    const clickBadHttp = await driver.$('-android uiautomator:new UiSelector().text("BAD HTTP REQUEST")');
    await clickBadHttp.waitForExist({ timeout: 30000 });
    await clickBadHttp.click();
    await driver.setTimeouts(3000);
    await clickBadHttp.click();
    await driver.setTimeouts(3000);

    await clickDtRequest.click();
    await driver.setTimeouts(3000);
    await delayedRequest.click();
    await driver.setTimeouts(5000);

    await clickGoodHttp.click();
    await driver.setTimeouts(3000);
    await clickGoodHttp.click();
    await driver.setTimeouts(3000);

    await background.click();
    await driver.setTimeouts(3000);

    await clickBadHttp.click();
    await driver.setTimeouts(3000);
    await delayedRequest.click();
    await driver.setTimeouts(5000);

    await clickGoodHttp.click();
    await driver.setTimeouts(3000);
    await clickGoodHttp.click();
    await driver.setTimeouts(3000);

    await clickBadHttp.click();
    await driver.setTimeouts(3000);
    await clickBadHttp.click();
    await driver.setTimeouts(3000);

    await clickDtRequest.click();
    await driver.setTimeouts(3000);
    await clickDtRequest.click();
    await driver.setTimeouts(3000);
    await clickDtRequest.click();
    await driver.setTimeouts(3000);
    await clickDtRequest.click();
    await driver.setTimeouts(3000);
    await delayedRequest.click();
    await driver.setTimeouts(5000);

    await background.click();
    await driver.setTimeouts(3000);

    const openGoogle = await driver.$("accessibility id:Google");
    await openGoogle.waitForExist({ timeout: 30000 });
    await openGoogle.click();
    await driver.setTimeouts(5000);

    const dismissGoogle = await driver.$("id:com.android.chrome:id/signin_fre_dismiss_button");
    await dismissGoogle.waitForExist({ timeout: 50000 });
    await dismissGoogle.click();
    await driver.setTimeouts(3000);

    const closeTab = await driver.$("accessibility id:Close tab");
    await closeTab.waitForExist({ timeout: 30000 });
    await driver.setTimeouts(5000);
    await closeTab.click();
    await driver.setTimeouts(3000);

    const openNR = await driver.$("accessibility id:New Relic");
    await openNR.waitForExist({ timeout: 30000 });
    await openNR.click();
    await driver.setTimeouts(3000);

    const closeNR = await driver.$("accessibility id:Close tab");
    await closeNR.waitForExist({ timeout: 30000 });
    await driver.setTimeouts(5000);
    await closeNR.click();
    await driver.setTimeouts(3000);

    const openExpo = await driver.$("accessibility id:Expo");
    await openExpo.waitForExist({ timeout: 30000 });
    await openExpo.click();
    await driver.setTimeouts(3000);

    const closeExpo = await driver.$("accessibility id:Close tab");
    await closeExpo.waitForExist({ timeout: 30000 });
    await driver.setTimeouts(5000);
    await closeExpo.click();
    await driver.setTimeouts(3000);
  });

  it("Clicks around the Crash tab", async () => {
    const openCrash = await driver.$("accessibility id:Crash");
    await openCrash.waitForExist({ timeout: 30000 });
    await openCrash.click();
    await driver.setTimeouts(3000);

    const clickRangeError = await driver.$('-android uiautomator:new UiSelector().text("RANGE ERROR")');
    await clickRangeError.waitForExist({ timeout: 30000 });
    await clickRangeError.click();
    await driver.setTimeouts(5000);

    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);

    await openCrash.waitForExist({ timeout: 30000 });
    await openCrash.click();
    await driver.setTimeouts(3000);

    const clickReferenceError = await driver.$('-android uiautomator:new UiSelector().text("REFERENCE ERROR")');
    await clickReferenceError.waitForExist({ timeout: 30000 });
    await clickReferenceError.click();
    await driver.setTimeouts(5000);

    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);

    await openCrash.waitForExist({ timeout: 30000 });
    await openCrash.click();
    await driver.setTimeouts(3000);

    const clickURIError = await driver.$('-android uiautomator:new UiSelector().text("URI ERROR")');
    await clickURIError.waitForExist({ timeout: 30000 });
    await clickURIError.click();
    await driver.setTimeouts(5000);

    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);

    await openCrash.waitForExist({ timeout: 30000 });
    await openCrash.click();
    await driver.setTimeouts(3000);

    const clickEvalError = await driver.$('-android uiautomator:new UiSelector().text("EVAL ERROR")');
    await clickEvalError.waitForExist({ timeout: 30000 });
    await clickEvalError.click();
    await driver.setTimeouts(5000);

    await driver.terminateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);
    await driver.activateApp("com.anonymous.mainagenttestapp");
    await driver.setTimeouts(5000);

    await openCrash.waitForExist({ timeout: 30000 });
    await openCrash.click();
    await driver.setTimeouts(3000);

    // Simulate ANR
    const clickSimulateANR = await driver.$('-android uiautomator:new UiSelector().text("SIMULATE ANR")');
    await clickSimulateANR.waitForExist({ timeout: 30000 });
    await clickSimulateANR.click();
    await driver.pause(30000); // required to simulate ANR

    await driver.pressKeyCode(82); //background the app
    await driver.setTimeouts(5000);

    const closeToast = await driver.$("id:android:id/aerr_close");
    await closeToast.waitForExist({ timeout: 30000 });
    await closeToast.click();
    await driver.activateApp("com.anonymous.mainagenttestapp");
  });

  it("Opens app", async () => {
    // wait for the app to load
    await driver.setTimeouts(5000);
    
    const home = await driver.$('-android uiautomator:new UiSelector().text("")');
    await home.waitForExist({ timeout: 30000 });
    await home.click();
  });
});
