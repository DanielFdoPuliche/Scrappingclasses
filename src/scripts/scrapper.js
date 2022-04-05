import { Education } from "../modules/Models/Education";
import { Person } from "../modules/Models/Person";

const fullname = document.querySelector('h1')?.textContent

const getUlByText = text => {
    return document.evaluate(
        `(//section[.//span[contains(text(),"${text}")] or .//div[contains(text(),"${text}")]]//ul)[1]`,
        document,
        null,
        XPathResult.ANY_TYPE,
        null
    ).iterateNext()
}

const nodeUlEducation = getUlByText("Educación")

let listItemsEducation = document.evaluate('./li', nodeUlEducation, null, XPathResult.ANY_TYPE, null)
let educationIterate = listItemsEducation.iterateNext()

const educationListItems = []

while (educationIterate) {
    const spansEducation = document.evaluate('.//span[@aria-hidden]', educationIterate, null, XPathResult.ANY_TYPE, null)
    let spansEducationIterate = spansEducation.iterateNext()
    const educationArray = []
    while (spansEducationIterate) {
        educationArray.push(spansEducationIterate.textContent)
        spansEducationIterate = spansEducation.iterateNext()
    }
    educationListItems.push(new Education(educationArray[0], educationArray[1], educationArray[2]))
    educationIterate = listItemsEducation.iterateNext()
}

// Envío del mensaje

let port = chrome.runtime.connect({ name: "safePort" });    //Puerto comunicación long term
port.postMessage(new Person(fullname, educationListItems))