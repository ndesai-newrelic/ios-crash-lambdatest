class Android {
  constructor(driver) {
    this.driver = driver;
  }

  // LOCATORS
  // Universal app locators
  get home() {
    return this.driver.$('-android uiautomator:new UiSelector().text("")');
  }

  // Todo tab Locators
  get todoTab() {
    return this.driver.$("accessibility id:Todo List");
  }

  get todoTextfield() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().resourceId("text-input-flat-label-inactive")'
    );
  }
  get addButton() {
    return this.driver.$("accessibility id:Add");
  }

  // Explore tab locators

  get exploreTab() {
    return this.driver.$("accessibility id:, Explore");
  }

  get hexButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("HANDLED EXCEPTION")'
    );
  }

  get HTTPRequestButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("HTTP REQUEST")'
    );
  }
  get HTTPRequestErrorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("HTTP REQUEST ERROR")'
    );
  }

  get dtRequestButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("DISTRIBUTED TRACING REQUEST")'
    );
  }

  get delayedRequestButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("NETWORK FAILURE")'
    );
  }

  // Crash tab locator

  get crashTab() {
    return this.driver.$("accessibility id:Crash");
  }

  get rangeErrorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("RANGE ERROR")'
    );
  }

  get referenceErrorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("REFERENCE ERROR")'
    );
  }

  get uriErrorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("URI ERROR")'
    );
  }

  get evalErrorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("EVAL ERROR")'
    );
  }

  get anrSimlatorButton() {
    return this.driver.$(
      '-android uiautomator:new UiSelector().text("SIMULATE ANR")'
    );
  }

  get toast() {
    return this.driver.$("id:android:id/aerr_close");
  }

  // METHODS

  async launchApp() {
    await this.home.waitForExist({ timeout: 30000 });
    await this.home.click();
  }

  async clickTodoTab() {
    await this.todoTab.waitForExist({ timeout: 30000 });
    await this.todoTab.click();
    await this.driver.setTimeouts(3000);
  }

  async clickExploreTab() {
    await this.exploreTab.waitForExist({ timeout: 30000 });
    await this.exploreTab.click();
    await this.driver.setTimeouts(3000);
  }

  async clickCrashTab() {
    await this.driver.setTimeouts(3000);
    await this.crashTab.waitForExist({ timeout: 30000 });
    await this.crashTab.click();
    await this.driver.setTimeouts(3000);
  }

  async backgroundApp() {
    await this.driver.pressKeyCode(3);
    await this.driver.setTimeouts(5000);
  }

  // Use me to add a todo to your to do list
  async addTodo(text) {
    await this.todoTextfield.waitForExist({ timeout: 30000 });
    await this.todoTextfield.click();
    await this.driver.setTimeouts(3000);
    await this.driver.sendKeys(text);
    await this.driver.setTimeouts(3000);
    await this.addButton.waitForExist({ timeout: 30000 });
    await this.addButton.click();
    await this.driver.setTimeouts(3000);
  }

  // Use me to click on a button on the Explore tab. In this case, `eventName` is the text of the button
  async waitAndClickExploreEventButton(eventName) {
    const buttons = {
      ["hex"]: () => this.hexButton,
      ["HTTPRequest"]: () => this.HTTPRequestButton,
      ["HTTPRequestError"]: () => this.HTTPRequestErrorButton,
      ["delayedHTTP"]: () => this.delayedRequestButton,
      ["dtRequest"]: () => this.dtRequestButton,
    };
    await buttons[eventName]().waitForExist({ timeout: 5000 });
    await buttons[eventName]().click();
    await this.driver.setTimeouts(3000);
  }

  // Use me to click on a button on the Crash tab. In this case, `eventName` is the type of crash
  async forceCrash(eventName) {
    const buttons = {
      ["range"]: () => this.rangeErrorButton,
      ["reference"]: () => this.referenceErrorButton,
      ["eval"]: () => this.evalErrorButton,
      ["uri"]: () => this.uriErrorButton,
    };

    await this.driver.setTimeouts(10000);
    await buttons[eventName]().waitForExist({ timeout: 3000 });
    await buttons[eventName]().click();
    await this.driver.setTimeouts(7000);
    await this.driver.terminateApp("com.anonymous.mainagenttestapp");
    await this.driver.setTimeouts(5000);
    await this.driver.activateApp("com.anonymous.mainagenttestapp");
    await this.driver.setTimeouts(5000);
  }

  async forceANR() {
    await this.anrSimlatorButton.waitForExist({ timeout: 30000 });
    await this.anrSimlatorButton.click();
    await this.driver.pause(30000); // required to simulate ANR

    await this.driver.pressKeyCode(82); //background the app
    await this.driver.setTimeouts(5000);

    await this.toast.waitForExist({ timeout: 30000 }); // Close the toast
    await this.toast.click();
    await this.driver.activateApp("com.anonymous.mainagenttestapp"); // Reactivate app to harvest the anr
    await this.driver.setTimeouts(30000);
  }
}

module.exports = Android;