document.getElementById("edit-shortcuts").addEventListener("click", ()=>{
    chrome.tabs.create({url: 'chrome://extensions/shortcuts'});
});

// on popup load
(async ()=>{
    const {stop_propagation = true} = await chrome.storage.sync.get("stop_propagation");
    chrome.storage.sync.set({stop_propagation: stop_propagation});
    document.getElementById("stop_propagation").checked = stop_propagation;
})();

document.getElementById("stop_propagation").addEventListener("click", ()=>{
    const stop_propagation = document.getElementById("stop_propagation").checked;
    chrome.storage.sync.set({stop_propagation: stop_propagation});
});
