const Android = require("./pages/androidPage");

describe("main agent test app - android", () => {
  let androidPage;

  beforeEach(async () => {
    androidPage = new Android(driver);
  });

  it("Clicks around the Crash tab", async () => {
    // Magic strings:
    const RANGE = "range";
    const REFERENCE = "reference";
    const EVAL = "eval";
    const URI = "uri";
    const Type = "type";

    await androidPage.launchApp()
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(RANGE);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(REFERENCE);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(EVAL);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(URI);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(Type);
  
    
    await androidPage.backgroundApp();
  });
});
