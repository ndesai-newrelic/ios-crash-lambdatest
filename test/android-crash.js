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

     const HEX = "hex"; 
    const HTTPRequest = "HTTPRequest";
    const HTTPRequestError = "HTTPRequestError"; 
    const DT = "dtRequest"; 
    const DELAYED = "delayedHTTP"; // network failure
    await androidPage.clickExploreTab();

    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(DELAYED);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(HEX);

    await androidPage.launchApp()
   await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(RANGE);
   await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(REFERENCE);
       await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);

    await androidPage.clickCrashTab();
    await androidPage.forceCrash(EVAL);
    await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(URI);
    await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);
    await androidPage.clickCrashTab();
    await androidPage.forceCrash(Type);
  await navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError);
    await androidPage.clickCrashTab();
    await androidPage.anrSimlatorStackOverFlowButton.click();

  
    
    await androidPage.backgroundApp();
  });
});
async function navigateAndClickExploreEvents(androidPage, HEX, HTTPRequest, DELAYED, DT, HTTPRequestError) {
  await androidPage.clickExploreTab();
  await androidPage.waitAndClickExploreEventButton(HEX);
  await androidPage.waitAndClickExploreEventButton(HTTPRequest);
  await androidPage.waitAndClickExploreEventButton(DELAYED);
  await androidPage.waitAndClickExploreEventButton(DT);
  await androidPage.waitAndClickExploreEventButton(HTTPRequest);
  await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
  await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
}

