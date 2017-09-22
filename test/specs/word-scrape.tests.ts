import VerbPage from '../pages/verb.page';
import AdjectivePage from '../pages/adjectives.page';
import AdverbPage from '../pages/adverbs.page';
import * as fs from 'fs';
import File from '../helpers/file';

describe('Get Lists of words', () => {
    it('should get a list of verbs and create csv file', () => {
        VerbPage.go();
        let verbs = VerbPage.getWords();
        let filename = 'verbs.csv';

        File.create(verbs, filename);

        expect(verbs).not.toBeNull();
        expect(verbs).not.toBeUndefined();
        expect(fs.existsSync(filename)).toBe(true);
    });

    it('should get a list of adjectives and create csv file', () => {
        AdjectivePage.go();
        let adjectives = AdjectivePage.getWords();
        let filename = 'adjectives.csv';
        
        File.create(adjectives, filename);
        
        expect(adjectives).not.toBeNull();
        expect(adjectives).not.toBeUndefined();
        expect(fs.existsSync(filename)).toBe(true);
    });

    it('should get a list of adverbs and create csv file', () => {
        AdverbPage.go();
        let adverbs = AdverbPage.getWords();
        let filename = 'adverbs.csv';
        
        File.create(adverbs, filename);

        expect(adverbs).not.toBeNull();
        expect(adverbs).not.toBeUndefined();
        expect(fs.existsSync(filename)).toBe(true);
    });    
});

