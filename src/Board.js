import  wordBank from './five-letter-words.txt';

export const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""] 
];

export const  genWord = async () =>{
    let wordSet;
    let answer;
    await fetch(wordBank).then((response) =>
        response.text()).then((result) => {
            const WordArr = result.split(/\r?\n/);
            answer = WordArr[Math.floor(Math.random() * WordArr.length)];
            wordSet = new Set(WordArr);
        });
        return { wordSet, answer};
    
};