chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.message == "clicked_browserAction"){
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log(firstHref);
      alert('You clicked on a browserAction');

      //send the first Url found on the page to new Tab
      chrome.runtime.sendMessage({"message":"open_new_tab","url":firstHref});
    }
  }
);
