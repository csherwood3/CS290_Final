// A collection of Yogi Berra quotes that I find really funny.

let yogiQuotes = {
    0: "Nobody goes there anymore, it's too crowded.",
    1: "Always go to other people's funerals, otherwise they won't come to yours.",
    2: "You can observe a lot just by watching.",
    3: "It ain't over 'til it's over.",
    4: "When you come to a fork in the road, take it.",
    5: "The future ain't what it used to be.",
    6: "Nobody comes here anymore, it's too crowded.",
    7: "Cut my pie into four pieces, I don't think I could eat eight.",
    8: "Half the lies they tell about me aren't true.",
    9: "90% of the game is half mental.",
    10: "If the world were perfect, it wouldn't be.",
    11: "Okay you guys, pair up in threes!",
    12: "I'd give my right arm to be ambidextrous.",
    13: "A nickel ain't worth a dime anymore.",
    14: "It's getting late early.",
    15: "It ain't the heat, it's the humility."
}

function makeYogiQuote() {
    let number = Math.floor(Math.random() * 17);
    yogiQuote = yogiQuotes[number];
    return yogiQuote;
}