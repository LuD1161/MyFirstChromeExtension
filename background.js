chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.message == "open_new_tab")
    chrome.tabs.create({"url":request.url});

    else if(request.message == "newIconPath")
    chrome.browserAction.setIcon({
      path:"greenLeaf.png"
    });
  }
);
var set = true;
function updateIcon() {
  if(set){
    chrome.browserAction.setIcon({path:"greenLeaf.png"});
    set = false;
  }
  else {
    chrome.browserAction.setIcon({path:"blackLeaf.png"});
    set = true;
  }
  // chrome.browserAction.setPopup({
  //       popup: "popup.html"
  //   });
}

// chrome.browserAction.onClicked.addListener(updateIcon);
