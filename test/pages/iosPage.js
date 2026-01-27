class iOS  {
  constructor(driver) {
    this.driver = driver;
  }
 
  // LOCATORS
  // Universal app locators
  get home() {
    return this.driver.$("id:Home");
  }

  get background() {
    return this.driver.executeScript("mobile:pressButton", [{ name: "home" }]);
  }

  // Todo tab Locators
  get todoTab() {
    return this.driver.$("accessibility id:TodoList");
  }

  get todoTextfield() {
    return this.driver.$("accessibility id:text-input-flat");
  }
  get addButton() {
    return this.driver.$("accessibility id:Add");
  }

  get returnButton() {
    return this.driver.$("accessibility id:Return");
  }

  // Explore tab locators

  get exploreTab() {
    return this.driver.$("accessibility id:Explore");
  }

  get hexButton() {
    return this.driver.$("accessibility id:Handled Exception");
  }

  get HTTRequestButton() {
    return this.driver.$("accessibility id:HTTP Request");
  }
  get HTTPRequestErrorButton() {
    return this.driver.$("accessibility id:HTTP Request Error");
  }

  get dtRequestButton() {
    return this.driver.$("accessibility id:Distributed Tracing Request");
  }

  get delayedRequestButton() {
    return this.driver.$("accessibility id:Network Failure");
  }

  // Crash tab locator

  get crashTab() {
    return this.driver.$("accessibility id:Crash");
  }

  get uriErrorButton() {
    return this.driver.$("accessibility id:URI Error");
  }

  get typeErrorButton() {
    return this.driver.$("accessibility id:Type Error");
  }

  get evalErrorButton() {
    return this.driver.$("accessibility id:Eval Error");
  }

  // Methods

  async launchApp() {
    await this.driver.executeScript("mobile: launchApp", [{
      bundleId: "com.newrelic.mainagenttestapp",
    }]);
    await this.driver.setTimeouts(5000);
  }

  async backgroundApp() {
    await this.driver.executeScript("mobile:pressButton", [{ name: "home" }]);
    await this.driver.setTimeouts(5000);
  }

  async clickHomeTab() {
    await this.home.waitForExist({ timeout: 30000 });
    await this.home.click();
  }

  async clickTodoTab() {
    await this.todoTab.waitForExist({ timeout: 3000 });
    await this.todoTab.click();
    await this.driver.setTimeouts(3000);
  }

  async clickExploreTab() {
    await this.exploreTab.waitForExist({ timeout: 3000 });
    await this.exploreTab.click();
    await this.driver.setTimeouts(3000);
  }

  async clickCrashTab() {
    await this.crashTab.waitForExist({ timeout: 3000 });
    await this.crashTab.click();
    await this.driver.setTimeouts(3000);
  }

  async addTodo() {
    await this.todoTextfield.waitForExist({ timeout: 3000 });
    await this.todoTextfield.click();
    await this.driver.setTimeouts(3000);

    const typeH = await this.driver.$("accessibility id:N");
    await typeH.click();
    await this.driver.setTimeouts(3000);
    const typeE = await this.driver.$("accessibility id:i");
    await typeE.click();
    await this.driver.setTimeouts(3000);
    const typeL = await this.driver.$("accessibility id:c");
    await typeL.click();
    await this.driver.setTimeouts(3000);
    const typeO = await this.driver.$("accessibility id:e");
    await typeO.click();
    await this.driver.setTimeouts(3000);

    await this.addButton.click();
    await this.driver.setTimeouts(3000);
    await this.returnButton.click();
    await this.driver.setTimeouts(3000);
  }

  // Use me to click on a button on the Explore tab. In this case, `eventName` is the text of the button
  async waitAndClickExploreEventButton(eventName) {
    const buttons = {
      ["hex"]: () => this.hexButton,
      ["HTTPRequest"]: () => this.HTTRequestButton,
      ["HTTPRequestError"]: () => this.HTTPRequestErrorButton,
      ["delayedHTTP"]: () => this.delayedRequestButton,
      ["dtRequest"]: () => this.dtRequestButton,
    };
    await buttons[eventName]().waitForExist({ timeout: 3000 });
    await buttons[eventName]().click();
    await this.driver.setTimeouts(3000);
  }

  // Use me to click on a button on the Crash tab. In this case, `eventName` is the type of crash
  async forceCrash(eventName) {
    const buttons = {
      ["uri"]: () => this.uriErrorButton,
      ["type"]: () => this.typeErrorButton,
      ["eval"]: () => this.evalErrorButton,
    };

    await this.driver.setTimeouts(10000);
    await buttons[eventName]().waitForExist({ timeout: 3000 });
    await buttons[eventName]().click();
    await this.driver.setTimeouts(7000);
    await this.launchApp();
    await this.driver.setTimeouts(10000);
  }

  async killTime() {
  // 7+ minutes = (15 iterations × 3 apps × ~5 seconds per app + pauses)
   for (let i = 0; i < 15; i++) {
      const apps = [
        "Safari",
        "Files",
        "Messages",
      ];

      for (const appId of apps) {
        try {
          await this.driver.$("accessibility id:" + appId).click();
          await this.driver.pause(3000);
          await this.driver.executeScript("mobile:pressButton", [{ name: "home" }]);
          await this.driver.pause(2000);
        } catch (error) {
          console.log(`App ${appId} not available, skipping...`);
        }
      }

      await this.driver.executeScript("mobile:pressButton", [{ name: "home" }]);
      await this.driver.pause(1000);
    }
  }
}

module.exports = iOS;