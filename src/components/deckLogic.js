import * as cards from "../data/mythicCards/index";


function prepareDeck(gameDifficulty,ancient) {
    const deck = {};
    for (let cardColor in cards) {
        deck[cardColor] = [];
        for (let cardDifficulty of gameDifficulty.scheme) {
            deck[cardColor].push(...shuffleArray(cards[cardColor][cardDifficulty]))
        }
        if (gameDifficulty.shuffle) shuffleArray(deck[cardColor]);
        deck[cardColor].length = ancient[cardColor+'Total'];
        shuffleArray(deck[cardColor])
    }
    //prepare stages
    ['firstStage','secondStage','thirdStage'].forEach(stage=>{
        deck[stage] = [];
        for (let color in ancient[stage]) {
            // const tracker = document.querySelector(`.dot.${stage}.${color}`);
            const count = ancient[stage][color];    
            for (let i=0; i < count; i++) {
                const elem = deck[color].pop();
                elem.stage = stage;
                deck[stage].push(elem)
            }
        }
        deck[stage] = shuffleArray(deck[stage])
    })
    return [...deck.thirdStage,...deck.secondStage,...deck.firstStage]
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default prepareDeck;