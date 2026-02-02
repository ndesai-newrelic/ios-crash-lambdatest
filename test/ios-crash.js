const iOS = require("./pages/iosPage");

describe("main agent test app - ios", () => {
  let iOSPage;

  beforeEach(() => {
    iOSPage = new iOS(driver);
  });

  it("Clicks around the Crash tab", async () => {
    // Magic strings:
    const URI = "uri";
    const TYPE = "type";
    const EVAL = "eval";

    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(URI);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(TYPE);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(EVAL);
    
     await iOSPage.backgroundApp();
  });
});
