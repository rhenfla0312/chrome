// 예제1 - Math.random을 이용하여 랜덤한 명언 출력

const quotes = [
  {
    quote: "Good ideas are always crazy until they’re not.",
    author: "young min"
  },
  {
    quote: "I think therefore I exist.",
    author: "rehgerh"
  },
  {
    quote: "when the nazis attacked them.",
    author: "mtyukgh"
  },
  {
    quote: "There is no word impossible in my dictionary.",
    author: "rehyfdh"
  },
  {
    quote: "Even if you twist a chicken's neck, the dawn will come.",
    author: "cvbntn"
  },
  {
    quote: "GThere is no neutrality on a moving train.",
    author: "fdgreg"
  },
  {
    quote: "Workers of all countries unite.",
    author: "xcberb"
  },
  {
    quote: "Every country has a government worthy of it.",
    author: "wefxc"
  },
  {
    quote: "leave when you clap.",
    author: "asdasd"
  },
  {
    quote: "god is dead.",
    author: "mamain"
  },
]

const main = document.querySelector('#quote');
const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

main.classList.add('text');
quote.classList.add('quote')
author.classList.add('author');

// Math - js 내부함수(수학적)
// Math.random() - 랜덤한 숫자를 넣어준다(소수점)

// 소수점 없애기
// 1. round - 반올림으로 없애준다
// 2. ceil - 올림으로 없애준다
// 3. floor - 내림으로 없애준다


// * 값이 추가되면 수정해줘야한다 -> array의 길이를 알아낸다 -> length
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




// 예제2 - Math.random을 이용하여 랜덤한 배경화면 출력


const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
]

const chosenimage = images[Math.floor(Math.random() * images.length)];

// html create
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenimage}`;
bgImage.classList.add('bg');


// 만들어도 js에만 존재하기때문에 body에 추가해줘야 나타난다
// append - 가장 뒤에 추가
// prepend - 가장 위에 추가
const body = document.body;
body.appendChild(bgImage);
