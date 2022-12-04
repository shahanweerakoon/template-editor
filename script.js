const { useState, useEffect } = React;

const QUOTE_STARTS = [
  "Conquer",
  "We are quite simply",
  "It's never too late to acquire",
  "You're as big as",
  "Unlock",
  "Cherish",
  "You can always rely on",
  "Explore",
  "Seek",
  "You can always find",
  "Discover",
  "Draw wisdom from",
  "Heal your wounds into",
  "Dance to",
  "Replace fear with",
  "Invoke",
  "Life is like",
  "Become",
  "Never forget",
  "Make time for",
  "Fill your cup with",
  "Embrace the power of",
  "Embrace the warmth of",
  "Look inward and see",
  "Never apologize for",
  "Rely on",
  "Open yourself to",
  "Nothing can erase",
  "Have reverence for",
  "The universe is simply",
  "Breathe in"
];

const QUOTE_MIDDLES = [
  "the miracle of",
  "encouragement from",
  "gifts wrapped in",
  "the riddle that shrouds",
  "the wonder of",
  "gratitude for",
  "the magic invoked by",
  "oceans within",
  "the joyous sound of",
  "a new beginning in",
  "questions within",
  "the inner voice of",
  "the infinite wisdom of",
  "the holy light within",
  "the songs of",
  "kindness entangled with",
  "appreciation through",
  "acknowledgement within",
  "the threads woven between",
  "compassion through",
  "the majesty enmeshed in",
  "the warmth that evelopes",
  "a joyful voice of",
  "the impact you have on",
  "the meaning behind",
  "the fingerprint of",
  "the endless horizon of",
  "your indelible attraction towards",
  "your appetite for",
  "the triumphant roar of",
  "the strength rooted in",
  "the mystery within",
  "the intricate tapestry of",
  "the delicate scent of",
  "the infinite potential of",
  "the impression left by"
];

const QUOTE_ENDS = [
  "forever and ever.",
  "a wolf.",
  "a single acorn.",
  "truth.",
  "time.",
  "thousands of butterflies.",
  "your stomach.",
  "shapes.",
  "the stars.",
  "the ocean.",
  "endless galaxies.",
  "your own divinity.",
  "your soul.",
  "a block of cheese.",
  "carbohydrates.",
  "curiosity.",
  "a box of chocolates.",
  "unexpected possibilities.",
  "fragile bubbles.",
  "each precious day.",
  "epiphanies.",
  "even the dullest stone.",
  "the gentle snores of a kitten.",
  "a cup of tea.",
  "a cup of coffee.",
  "melting sunsets.",
  "fleeting raindrops.",
  "sticking your hand into a sack of beans.",
  "petrichor.",
  "a gentle crackling fire.",
  "a babbling brook."
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function QuoteFragment({ string, classes }) {
  const gradientDirs = ["br", "bl", "tl", "tr", "t", "b", "l", "r"];
  const gradientColors = [
    "from-yellow-300 via-red-400 to-pink-500",
    "from-yellow-200 via-green-400 to-indigo-500",
    "from-blue-300 via-purple-400 to-pink-400",
    "from-yellow-400 to-red-600",
    "from-purple-600 to-pink-400",
    "from-green-300 to-indigo-600",
    "from-yellow-200 via-yellow-500 to-pink-400",
    "from-green-300 to-indigo-600",
    "from-purple-500 to-indigo-200",
    "from-blue-300 to-indigo-600",
    "from-red-300 to-indigo-600",
    "from-red-300 to-pink-600",
  ];
  
  function randomGradient() {
    return "bg-gradient-to-" + random(gradientDirs) + " " + random(gradientColors);
  };
  
  return(
    <div className={classes + " sm:w-1/3 rounded h-20 sm:h-40 my-3 p-2 grid place-content-center text-white text-center font-bold " + randomGradient()}>
      {string}
    </div>
  );
};

const App = () => {
  const [quoteStart, setQuoteStart] = useState();
  const [quoteMiddle, setQuoteMiddle] = useState();
  const [quoteEnd, setQuoteEnd] = useState();
  
  useEffect(newQuote, []);
  
  function newQuote() {
    setQuoteStart(random(QUOTE_STARTS));
    setQuoteMiddle(random(QUOTE_MIDDLES));
    setQuoteEnd(random(QUOTE_ENDS));
  };
  
  function tweetQuote() {
    const twitterUrl = "https://twitter.com/intent/tweet?text=" + [quoteStart, quoteMiddle, quoteEnd].join(" ") + " - Random Inspo generator tinyurl.com/randoinspo by @_hkly";
    window.open(twitterUrl, "_blank");
  };
  
  return(
    <div className="w-3/4">
      <div className="flex justify-between mb-1 flex-col sm:flex-row">
        <QuoteFragment string={quoteStart} />
        <QuoteFragment string={quoteMiddle} classes="sm:mx-3"  />
        <QuoteFragment string={quoteEnd} />
      </div>
      <div className="flex justify-between">
        <button 
          onClick={tweetQuote}
          className="flex group hover:text-pink-400 text-pink-300 font-bold py-2 px-3 rounded text-3xl"
        >
          <i className="fab fa-twitter"></i>
          <div className="inline-block text-sm text-transparent sm:group-hover:text-pink-400 ml-2 leading-7">
            Tweet Quote
          </div>
        </button>
        <button
          onClick={newQuote}
          className="flex group hover:text-pink-400 text-pink-300 font-bold py-2 px-3 rounded text-2xl"
        >
          <div className="inline-block text-sm text-transparent sm:group-hover:text-pink-400 mr-2 leading-6">
            New Quote
          </div>
           <i className="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));