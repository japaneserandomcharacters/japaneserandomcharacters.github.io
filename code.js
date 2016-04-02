var fixedHiraganaList = new Array( "あ", "い", "う", "え", "お",
                                   "か", "き", "く", "け", "こ",
                                   "さ", "し", "す", "せ", "そ",
                                   "た", "ち", "つ", "て", "と",
                                   "な", "に", "ぬ", "ね", "の",
                                   "は", "ひ", "ふ", "へ", "ほ",
                                   "ま", "み", "む", "め", "も",
                                   "や", "ゆ", "よ", "ら", "り",
                                   "る", "れ", "ろ", "わ", "を",
                                   "ん" );

var fixedKatakanaList = new Array( "ア", "イ", "ウ", "エ", "オ",
                                   "カ", "キ", "ク", "ケ", "コ",
                                   "サ", "シ", "ス", "セ", "ソ",
                                   "タ", "チ", "ツ", "テ", "ト",
                                   "ナ", "ニ", "ヌ", "ネ", "ノ",
                                   "ハ", "ヒ", "フ", "ヘ", "ホ",
                                   "マ", "ミ", "ム", "メ", "モ",
                                   "ヤ", "ユ", "ヨ", "ラ", "リ",
                                   "ル", "レ", "ロ", "ワ", "ヲ",
                                   "ン" );

function start()
{
    //document.getElementById( "output" ).style.display = "none";
}

function generateResults()
{
    var hiraganaChoice = document.getElementById( "hiragana" ).value;
    var katakanaChoice = document.getElementById( "katakana" ).value;
    
    document.getElementById( "output" ).style.display = "block";
    
    var outputObject = document.getElementById( "output" );
    var length = document.getElementById( "length" ).value;
    
    if ( hiraganaChoice === "no" && katakanaChoice === "no" )
    {
        outputObject.innerHTML = "<p>Please select a symbol set.</p>";
        
        if ( lengthObject.value < 0 )
        {
            outputObject.innerHTML = "<p>Please select a nonnegative length for the list.</p>";
        }
    }
    else if ( hiraganaChoice === "yes" && katakanaChoice === "no" )
    {
        if ( length.value < 0 )
        {
            outputObject.innerHTML = "<p>Please select a nonnegative length for the list.</p>";
        }
        else
        {
            var list = generateRandomHiraganaList( length );
            
            outputObject.innerHTML = "<p>";
            
            for ( var symbolCounter = 1 ; symbolCounter <=  length ; ++symbolCounter )
            {
                outputObject.innerHTML += list[ symbolCounter - 1 ] + " ";
            }
            
            outputObject.innerHTML += "</p>";
        }
    }
    else if ( hiraganaChoice === "no" && katakanaChoice === "yes" )
    {
        if ( length.value < 0 )
        {
            outputObject.innerHTML = "<p>Please select a nonnegative length for the list.</p>";
        }
        else
        {
            var list = generateRandomKatakanaList( length );
            
            outputObject.innerHTML = "<p>";
            
            for ( var symbolCounter = 1 ; symbolCounter <=  length ; ++symbolCounter )
            {
                outputObject.innerHTML += list[ symbolCounter - 1 ] + " ";
            }
            
            outputObject.innerHTML += "</p>";
        }
    }
    else if ( hiraganaChoice === "yes" && katakanaChoice === "yes" )
    {
        if ( length.value < 0 )
        {
            outputObject.innerHTML = "<p>Please select a nonnegative length for the list.</p>";
        }
        else
        {
            var list = generateRandomHiraganaAndKatakanaList( length );
            
            outputObject.innerHTML = "<p>";
            
            for ( var symbolCounter = 1 ; symbolCounter <=  length ; ++symbolCounter )
            {
                outputObject.innerHTML += list[ symbolCounter - 1 ] + " ";
            }
            
            outputObject.innerHTML += "</p>";
        }
    }
}

function generateRandomHiraganaList( listLength )
{
    var counter;
    var randomHiraganaList = new Array();
    
    for ( counter = 1 ; counter <= listLength ; ++counter )
    {
        randomHiraganaList.push( fixedHiraganaList[ Math.floor( Math.random() * fixedHiraganaList.length ) ] );
    }
    
    return randomHiraganaList;
}

function generateRandomKatakanaList( listLength )
{
    var counter;
    var randomKatakanaList = new Array();
    
    for ( counter = 1 ; counter <= listLength ; ++counter )
    {
        randomKatakanaList.push( fixedKatakanaList[ Math.floor( Math.random() * fixedKatakanaList.length ) ] );
    }
    
    return randomKatakanaList;
}

function generateRandomHiraganaAndKatakanaList( listLength )
{
    var counter;
    var randomHiraganaList = generateRandomHiraganaList( Math.ceil( listLength / 2 ) );
    var randomKatakanaList = generateRandomKatakanaList( Math.floor( listLength / 2 ) );
    var randomHiraganaAndKatakanaList = new Array();
    
    for ( counter = 0 ; counter < randomHiraganaList.length ; ++counter )
    {
        randomHiraganaAndKatakanaList.push( randomHiraganaList[ counter ] );
    }
    
    for ( counter = 0 ; counter < randomKatakanaList.length ; ++counter )
    {
        randomHiraganaAndKatakanaList.push( randomKatakanaList[ counter ] );
    }
    
    return randomHiraganaAndKatakanaList;
}