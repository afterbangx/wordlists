export default class VerbPage {
    public static get wordLists() { return browser.elements('td > font[size="+0"]'); }

    static go(): void {
        browser.url('verbs.shtml');
    }

    static getWords(): string[] {
        return this.wordLists.value.map((row: WebdriverIO.Element) => 
            browser.elementIdText(row.ELEMENT).value);
    }
}