chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: 'facebook.com' }
          })
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction()
          // new chrome.declarativeContent.RequestContentScript({
          //   js: ['script.js']
          // })
        ]
      }
    ])
  })
})
