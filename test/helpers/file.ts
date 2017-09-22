import * as fs from 'fs';

export default class  File {
    static create(words: string[], filename: string): void {
        for(let i = 0; i < words.length; i++) {
            let newList = words[i].split('\n');

            for(let j = 0; j < newList.length; j++) {
                fs.appendFile(filename, `"${newList[j]}",\n`, (err) => {
                    if(err) throw err;                
                });
            }            
        }

        console.log(`${filename} saved!`);
    }
}