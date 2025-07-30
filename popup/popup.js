document.getElementById("edit-shortcuts").addEventListener("click", ()=>{
    chrome.tabs.create({url: 'chrome://extensions/shortcuts'});
});
