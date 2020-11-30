const time = document.querySelector(".time-txt");
const greeting = document.querySelector(".greeting");
const clock = document.querySelector(".clock");
const timezone = document.querySelector(".time-zone");
const countryContinent = document.querySelector(".country-continent");
const dayOfYear = document.querySelector(".day-of-year");
const weekNumber = document.querySelector(".week-number");
const dayOfWeek = document.querySelector(".day-of-week");
const dropdownBtn = document.querySelector(".dropdown");
const clockContainer = document.querySelector(".clock-container");
const bottomToggle = document.querySelector(".bottom-toggle");
const quoteToggle = document.querySelector(".quote-toggle");

setInterval(startTime, 1000);

function startTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let zeroHr = checkTime(date.getHours());
  let zeroMin = checkTime(date.getMinutes());
  time.textContent = `${zeroHr}:${zeroMin}`;

  timezone.innerHTML = getTimeZone()
    .split(" ")
    .map((word) => word[0])
    .join("");

  countryContinent.textContent = `${Intl.DateTimeFormat().resolvedOptions().timeZone}`;

  if (hr > 11 && hr < 18) {
    clock.style.backgroundImage =
      'linear-gradient(rgba(65, 70, 67, 0.308), rgba(65, 70, 67, 0.308)), url("/img/day.jpg")';
    greeting.innerHTML = "<i class='fas fa-sun'></i> GOOD AFTERNOON, IT'S CURRENTLY";
    bottomToggle.style.background = `#dce4dcc7`;
    bottomToggle.style.color = `#333`;
    mediaQueries(
      "<i class='fas fa-sun'></i> GOOD AFTERNOON",
      "<i class='fas fa-sun'></i> GOOD AFTERNOON, IT'S CURRENTLY",
      x
    );
  } else if (hr >= 18) {
    mediaQueries(
      "<i class='fas fa-moon'></i> GOOD EVENING",
      "<i class='fas fa-moon'></i> GOOD EVENING, IT'S CURRENTLY",
      x
    );
    clock.style.backgroundImage =
      'linear-gradient(rgba(65, 70, 67, 0.308), rgba(65, 70, 67, 0.308)), url("/img/night.jpg")';
    bottomToggle.style.background = `#141414c7`;
    bottomToggle.style.color = `#fff`;
  } else {
    mediaQueries(
      "<i class='fas fa-sun'></i> GOOD MORNING",
      "<i class='fas fa-sun'></i> GOOD MORNING, IT'S CURRENTLY",
      x
    );
    clock.style.backgroundImage =
      'linear-gradient(rgba(65, 70, 67, 0.308), rgba(65, 70, 67, 0.308)), url("/img/day.jpg")';
    bottomToggle.style.background = `#dce4dcc7`;
    bottomToggle.style.color = `#333`;
  }

  // DAY OF YEAR
  let start = new Date(date.getFullYear(), 0, 0);
  let diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  dayOfYear.textContent = day;

  // DAY OF WEEK
  dayOfWeek.innerHTML = date.getDay();

  weekNumber.innerHTML = date.getWeek();
}

// Add zero in front of single date numbers
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// Leading zeros ((Copied from StackOverFLow 😎....Do not reuse without testing)😬)
function getTimeZone() {
  return /\((.*)\)/.exec(new Date().toString())[1];
}

// Get week Date prototype(Copied from StackOverFLow 😎....Do not reuse without testing)😬

Date.prototype.getWeek = function () {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  let week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
  );
};

// Toggle Button

dropdownBtn.addEventListener("click", (e) => {
  if (clockContainer.classList.contains("toggle")) {
    clockContainer.classList.remove("toggle");
    dropdownBtn.innerHTML = `<span class="txt">MORE</span>
                         <span class="icon"><i class="fas fa-angle-down"></i></span>`;
  } else {
    dropdownBtn.innerHTML = `<span class="txt">LESS</span>
                    <span class="icon"><i class="fas fa-angle-up"></i></span>`;
    clockContainer.classList.add("toggle");
  }
});

// QUOTES
function quotes() {
  const quotes = [
    {
      word: "Life is about making an impact, not making an income",
      author: "Kevin Kruse",
    },

    {
      word: "Life is about making an impact, not making an income",
      author: "Kevin Kruse",
    },
    {
      word: "Whatever the mind of man can conceive and believe, it can achieve",
      author: "Napoleon Hill",
    },
    {
      word: " Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      word:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ",
      author: "Robert Frost",
    },
    {
      word: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      word:
        "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      word: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      word: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      word: "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      word:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. ",
      author: "Mark Twain",
    },
    {
      word: ".Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
  ];

  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector(".text").innerHTML = `<p>
                  "${quote.word}"
                </p>
                <h3>${quote.author}</h3>`;
}

quoteToggle.addEventListener("click", quotes);

setInterval(quotes, 10000);

// MEDIA QUERIES FUNCTION
function mediaQueries(greetingMobile, greetingDesktop, x) {
  if (x.matches) {
    greeting.innerHTML = greetingMobile;
  } else {
    greeting.innerHTML = greetingDesktop;
  }
}

let x = window.matchMedia("(max-width: 500px)");
x.addEventListener(mediaQueries);
