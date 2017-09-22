export default class AdverbsPage {
    public static get wordLists() { return browser.elements('td > font[size="+0"]'); }

    public static go(): void {
        browser.url('adverbs.shtml');
    }

    public static getWords(): string[] {
        return this.wordLists.value.map((row: WebdriverIO.Element) => 
            browser.elementIdText(row.ELEMENT).value);        
    }
}