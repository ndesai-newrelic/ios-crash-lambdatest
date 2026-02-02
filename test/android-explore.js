const Android = require("./pages/androidPage");

describe("main agent test app - android", () => {
  let androidPage;

  beforeEach(async () => {
    androidPage = new Android(driver);
  });

  it("Clicks around the Explore tab", async () => {
    // Magic strings:
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
    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DELAYED);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(HTTPRequest);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(HTTPRequestError);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DELAYED);

    await androidPage.backgroundApp();
  });
});
