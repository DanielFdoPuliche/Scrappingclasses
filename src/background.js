chrome.commands.onCommand.addListener(command => {
    chrome.runtime.reload()
});

chrome.action.onClicked.addListener(async tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["static/prueba.js"] 
    })
})