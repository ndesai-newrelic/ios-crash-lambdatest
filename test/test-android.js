const Android = require("./pages/android");

describe("main agent test app - android", () => {
  let androidPage;

  beforeEach(async () => {
    androidPage = new Android(driver);
  });

  it("Opens the app, adds and deletes a todo", async () => {
    await androidPage.launchApp();
    await androidPage.clickTodoTab();
    await androidPage.addTodo(["Sdfg"]);
  });

  it("Clicks around the Explore tab", async () => {
    // Magic strings:
    const HEX = "hex";
    const GOOD = "goodHTTP";
    const BAD = "badHTTP";
    const DT = "dtRequest";
    const DELAYED = "delayedHTTP";

    await androidPage.clickExploreTab();

    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(DELAYED);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(HEX);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DELAYED);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(GOOD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(BAD);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DT);
    await androidPage.waitAndClickExploreEventButton(DELAYED);

    await androidPage.backgroundApp();
  });

  it.only("Clicks around the Crash tab", async () => {
    // Magic strings:
    const RANGE = "range";
    const REFERENCE = "reference";
    const EVAL = "eval";
    const URI = "uri";

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
    await androidPage.forceANR();
  });
});
