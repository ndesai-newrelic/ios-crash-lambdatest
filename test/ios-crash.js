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
    
  const HEX = "hex";
    const HTTPRequest = "HTTPRequest";
    const HTTPRequestError = "HTTPRequestError";
    const DT = "dtRequest";
    const DELAYED = "delayedHTTP";

    await iOSPage.launchApp();

    await navigateAndClickExploreEvents(iOSPage, HEX, HTTPRequest, DT, HTTPRequestError, DELAYED);

    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(URI);
        await navigateAndClickExploreEvents(iOSPage, HEX, HTTPRequest, DT, HTTPRequestError, DELAYED);

    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(TYPE);
        await navigateAndClickExploreEvents(iOSPage, HEX, HTTPRequest, DT, HTTPRequestError, DELAYED);

    await iOSPage.clickCrashTab();

    await iOSPage.forceCrash(EVAL);
        await navigateAndClickExploreEvents(iOSPage, HEX, HTTPRequest, DT, HTTPRequestError, DELAYED);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(RANGE);
    await iOSPage.clickCrashTab();
    await iOSPage.forceCrash(REFERENCE);
    
     await iOSPage.backgroundApp();
  });
});
async function navigateAndClickExploreEvents(iOSPage, HEX, HTTPRequest, DT, HTTPRequestError, DELAYED) {
  await iOSPage.clickExploreTab();

  await iOSPage.waitAndClickExploreEventButton(HEX);
  await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
  await iOSPage.waitAndClickExploreEventButton(DT);
  await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
  await iOSPage.waitAndClickExploreEventButton(DELAYED);
  await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
  await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
  await iOSPage.waitAndClickExploreEventButton(DELAYED);
  await iOSPage.waitAndClickExploreEventButton(DELAYED);
}

