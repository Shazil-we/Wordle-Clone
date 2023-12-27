import inquirer from "inquirer";
import chalk from "chalk";
const fiveLetterWords = [
    'abyss', 'ample', 'ankle', 'aroma', 'aural',
    'began', 'blunt', 'braid', 'brisk', 'bumpy',
    'chive', 'clasp', 'crave', 'crest', 'cumin',
    'drape', 'dregs', 'dumpy', 'dusky', 'dwell',
    'elite', 'ember', 'enact', 'evade', 'evoke',
    'fable', 'flair', 'fluke', 'folly', 'gauze',
    'giddy', 'gloom', 'gorge', 'gusty', 'haste',
    'hilly', 'hippy', 'hovel', 'hunch', 'icily',
    'inept', 'inert', 'irate', 'ivory', 'jaded',
    'jazzy', 'jolly', 'joust', 'jumpy', 'kinky',
    'knack', 'knave', 'knead', 'kudos', 'lanky',
    'latch', 'lolly', 'lurid', 'mirth', 'moody',
    'mourn', 'mower', 'muggy', 'nanny', 'nappy',
    'nerve', 'nifty', 'nudge', 'olive', 'onset',
    'oomph', 'ounce', 'ovals', 'peppy', 'pious',
    'pique', 'plush', 'poise', 'quail', 'quake',
    'quell', 'quill', 'quirk', 'ravel', 'reedy',
    'ruddy', 'runic', 'sable', 'spicy', 'stilt',
    'swath', 'swirl', 'toast', 'tonic', 'triad',
    'tryst', 'tweak', 'above', 'acute', 'alive',
    'alone', 'angry', 'aware', 'awful', 'basic',
    'black', 'blind', 'brave', 'brief', 'broad',
    'brown', 'cheap', 'chief', 'civil', 'clean',
    'clear', 'close', 'crazy', 'daily', 'dirty',
    'early', 'empty', 'equal', 'exact', 'extra',
    'faint', 'false', 'fifth', 'final', 'first',
    'fresh', 'front', 'funny', 'giant', 'grand',
    'great', 'green', 'gross', 'happy', 'harsh',
    'heavy', 'human', 'ideal', 'inner', 'joint',
    'large', 'legal', 'level', 'light', 'local',
    'loose', 'lucky', 'magic', 'major', 'minor',
    'moral', 'naked', 'nasty', 'naval', 'other',
    'outer', 'plain', 'prime', 'prior', 'proud',
    'quick', 'quiet', 'rapid', 'ready', 'right',
    'roman', 'rough', 'round', 'royal', 'rural',
    'sharp', 'sheer', 'short', 'silly', 'sixth',
    'small', 'smart', 'solid', 'sorry', 'spare',
    'steep', 'still', 'super', 'sweet', 'thick',
    'third', 'tight', 'total', 'tough', 'upper',
    'upset', 'urban', 'usual', 'vague', 'valid',
    'vital', 'white', 'whole', 'wrong', 'young',
    'abuse', 'adult', 'agent', 'anger', 'apple',
    'award', 'basis', 'beach', 'birth', 'block',
    'blood', 'board', 'brain', 'bread', 'break',
    'brown', 'buyer', 'cause', 'chain', 'chair',
    'chest', 'chief', 'child', 'china', 'claim',
    'class', 'clock', 'coach', 'coast', 'court',
    'cover', 'cream', 'crime', 'cross', 'crowd',
    'crown', 'cycle', 'dance', 'death', 'depth',
    'doubt', 'draft', 'drama', 'dream', 'dress',
    'drink', 'drive', 'earth', 'enemy', 'entry',
    'error', 'event', 'faith', 'fault', 'field',
    'fight', 'final', 'floor', 'focus', 'force',
    'frame', 'frank', 'front', 'fruit', 'glass',
    'grant', 'grass', 'green', 'group', 'guide',
    'heart', 'henry', 'horse', 'hotel', 'house',
    'image', 'index', 'input', 'issue', 'japan',
    'jones', 'judge', 'knife', 'laura', 'layer',
    'level', 'lewis', 'light', 'limit', 'lunch',
    'major', 'march', 'match', 'metal', 'model',
    'money', 'month', 'motor', 'mouth', 'music',
    'night', 'noise', 'north', 'novel', 'nurse',
    'offer', 'order', 'other', 'owner', 'panel',
    'paper', 'party', 'peace', 'peter', 'phase',
    'phone', 'piece', 'pilot', 'pitch', 'place',
    'plane', 'plant', 'plate', 'point', 'pound',
    'power', 'press', 'price', 'pride', 'prize',
    'proof', 'queen', 'radio', 'range', 'ratio',
    'reply', 'right', 'river', 'round', 'route',
    'rugby', 'scale', 'scene', 'scope', 'score',
    'sense', 'shape', 'share', 'sheep', 'sheet',
    'shift', 'shirt', 'shock', 'sight', 'simon',
    'skill', 'sleep', 'smile', 'smith', 'smoke',
    'sound', 'south', 'space', 'speed', 'spite',
    'sport', 'squad', 'staff', 'stage', 'start',
    'state', 'steam', 'steel', 'stock', 'stone',
    'store', 'study', 'stuff', 'style', 'sugar',
    'table', 'taste', 'terry', 'theme', 'thing',
    'title', 'total', 'touch', 'tower', 'track',
    'trade', 'train', 'trend', 'trial', 'trust',
    'truth', 'uncle', 'union', 'unity', 'value',
    'video', 'visit', 'voice', 'waste', 'watch',
    'water', 'while', 'white', 'whole', 'woman',
    'world', 'youth', 'slime', 'crime', 'cream'
]; // 414 words
let i = 0;
let used_word = [];
let Style_Array = [];
let Style_Array2 = '';
let s = 0;
let h = 0;
console.log(chalk.yellowBright("-------------------------------------------------------------------------------------------------") + chalk.greenBright("WORDLE") + chalk.yellowBright("----------------------------------------------------------------------------------------------"));
function Wordle_Function(letter) {
    if (letter == answer_char[0] ||
        letter == answer_char[1] ||
        letter == answer_char[2] ||
        letter == answer_char[3] ||
        letter == answer_char[4]) {
        if (letter == answer_char[0] && i == 0) {
            i = i + 1;
            return chalk.green(letter);
        }
        else if (letter == answer_char[1] && i == 1) {
            i = i + 1;
            return chalk.green(letter);
        }
        else if (letter == answer_char[2] && i == 2) {
            i = i + 1;
            return chalk.green(letter);
        }
        else if (letter == answer_char[3] && i == 3) {
            i = i + 1;
            return chalk.green(letter);
        }
        else if (letter == answer_char[4] && i == 4) {
            i = i + 1;
            return chalk.green(letter);
        }
        else if (!used_word.includes(letter)) {
            i = i + 1;
            used_word.push(letter);
            return chalk.yellow(letter);
        }
        else {
            return chalk.gray(letter);
        }
        ``;
    }
    else {
        i = i + 1;
        console.log(`Incorrect Words ${letter}`);
        return chalk.gray(letter);
    }
}
function Random_Answer_Generator(min, max) {
    let i = Math.floor(Math.random() * (max - min) + min);
    return fiveLetterWords[i];
}
function checker(user_value) {
    if (user_value == answer) {
        console.log(`Correct!`);
        process.exit();
    }
    else {
    }
}
let answer = Random_Answer_Generator(0, 414);
let answer_char = [
    answer.charAt(0),
    answer.charAt(1),
    answer.charAt(2),
    answer.charAt(3),
    answer.charAt(4)
];
let l = 0;
for (let k = 0; k < 6; k++) {
    let user_input = await inquirer.prompt([
        {
            type: "input",
            name: k + 1,
        }
    ]);
    if (user_input[k + 1].length == 5) {
        let input_char = [
            user_input[k + 1][0],
            user_input[k + 1][1],
            user_input[k + 1][2],
            user_input[k + 1][3],
            user_input[k + 1][4]
        ];
        for (let j = 0; j < 5; j++) {
            let test = Wordle_Function(input_char[j]);
            Style_Array.push(test);
        }
        Style_Array2 = Style_Array[0] + Style_Array[1] + Style_Array[2] + Style_Array[3] + Style_Array[4];
        console.log(`\t \t \t \t \t \t \t \t \t \t \t \t ${Style_Array2}`);
        Style_Array = [];
        i = 0;
        s = 0;
        used_word = [];
        checker(user_input[k + 1]);
    }
    else {
        console.log("Invalid Input!!");
        k = k - 1;
    }
}
console.log(`The Answer Was ${chalk.greenBright(answer)}`);
