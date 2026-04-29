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
    const RANGE = "range";
    const REFERENCE = "reference";
  

    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(URI);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(TYPE);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(EVAL);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(RANGE);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(REFERENCE);
    
     await iOSPage.backgroundApp();
  });
});
