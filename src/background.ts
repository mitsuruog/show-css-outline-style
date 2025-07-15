import { isValidSiteURL } from "./shared/services/validation";

const ID_NAME = "show-css-outline-style";
const CSS_STYLE = "* { outline: 1px solid #F44336; }";

function toggleOutlineStyle(idName: string, cssStyle: string) {
  const head = document.querySelector("head");
  const style = document.querySelector(`style#${idName}`);
  if (head !== null) {
    if (style === null) {
      const newStyle = document.createElement("style");
      newStyle.type = "text/css";
      newStyle.appendChild(document.createTextNode(cssStyle));
      newStyle.id = idName;
      head.appendChild(newStyle);
    } else {
      head.removeChild(style);
    }
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url || !isValidSiteURL(tab.url)) {
    return;
  }

  if (!tab.id) {
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: toggleOutlineStyle,
      args: [ID_NAME, CSS_STYLE]
    });
  } catch (error) {
    console.error("Failed to execute script:", error);
  }
});
