chrome.commands.onCommand.addListener((command) => {
    chrome.runtime.reload()
});

chrome.action.onClicked.addListener(async tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["prueba.js"]
    })
})

chrome.runtime.onConnect.addListener(function (port) {
    if(port.name === "safePort"){
        port.onMessage.addListener(message=>{
            console.log("Content: "+message.txt)
        })
    }
});