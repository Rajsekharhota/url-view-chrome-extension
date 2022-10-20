const btn = document.querySelector(".displayUrlBtn");

btn.addEventListener("click", async () => {
  chrome.storage.sync.get("url", ({ url }) => {
    console.log("url: ", url);
  });

  chrome.tabs.query(
    //important
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function (tabs) {
      alert(tabs[0].url);
    }
  );
});
