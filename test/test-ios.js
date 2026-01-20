const iOS = require("./pages/iosPage");

describe("main agent test app - ios", () => {
  let iOSPage;

  beforeEach(() => {
    iOSPage = new iOS(driver);
  });

  it("Opens the ToDo tab and adds todo", async () => {
    await iOSPage.clickTodoTab();
    await iOSPage.addTodo();
  });

  it("Clicks around the Explore tab", async () => {
    // Magic strings:
    const HEX = "hex";
    const GOOD = "goodHTTP";
    const BAD = "badHTTP";
    const DT = "dtRequest";
    const DELAYED = "delayedHTTP";

    await iOSPage.launchApp();

    await iOSPage.clickExploreTab();

    await iOSPage.waitAndClickExploreEventButton(HEX);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(DT);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(BAD);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(DELAYED);
    await iOSPage.waitAndClickExploreEventButton(HEX);

    await iOSPage.backgroundApp();
    await iOSPage.launchApp();

    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
    await iOSPage.waitAndClickExploreEventButton(GOOD);
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
  });
});
