import { isValidSiteURL } from "./shared/services/validation";

const ID_NAME = "show-css-outline-style";
const CSS_STYLE = "* { outline: 1px solid #F44336; }";

chrome.browserAction.onClicked.addListener(({ url = "" }) => {
  if (!isValidSiteURL(url)) {
    return;
  }
  chrome.tabs.executeScript({
    code: `
    ;(function() {
      const head = document.querySelector("head");
      const style = document.querySelector("style#${ID_NAME}");
      if (head !== null) {
        if (style === null) {
          const newStyle = document.createElement("style");
          newStyle.type = "text/css";
          newStyle.appendChild(document.createTextNode("${CSS_STYLE}"));
          newStyle.id = "${ID_NAME}";
          head.appendChild(newStyle);
        } else {
          head.removeChild(style);
        }
      }
    })();
    `,
  });
});
