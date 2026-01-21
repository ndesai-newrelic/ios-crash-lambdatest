const iOS = require("./pages/iosPage");

describe("main agent test app - ios", () => {
  let iOSPage;

  beforeEach(() => {
    iOSPage = new iOS(driver);
  });

  it("Clicks around the Explore tab", async () => {
    // Magic strings:
    const HEX = "hex";
    const HTTPRequest = "HTTPRequest";
    const HTTPRequestError = "HTTPRequestError";
    const DT = "dtRequest";
    const DELAYED = "delayedHTTP";

    await iOSPage.launchApp();

    await iOSPage.clickExploreTab();

    await iOSPage.waitAndClickExploreEventButton(HEX);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequestError);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(HEX);

    await iOSPage.backgroundApp();
    await iOSPage.launchApp();

    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HTTPRequest);
    await iOSPage.waitAndClickExploreEventButton(HEX);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);

    await iOSPage.backgroundApp();
    await iOSPage.launchApp();

    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(DT);
  });
});
