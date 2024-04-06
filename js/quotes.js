const quotes = [
    {
        quote:"삶이 있는 한 희망은 있다",
        author:"키케로",
    },
    {
        quote:"겨울이 오면 봄이 멀지 않으리",
        author:"셸리",
    },
    {
        quote:"인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라",
        author:"나딘 스테어",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author:"하버트 개서",
    },
    {
        quote:"당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될것이다.",
        author:"헨리 포드",
    },
    {
        quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author:"볼드윈",
    },
    {
        quote:"인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자",
        author:"플루타르코스",
    },
    {
        quote:"불가능한 일을 해보는 것은 신나는 일이다.",
        author:"월트 디즈니",
    },
    {
        quote:"모험은 그 자체만으로도 해볼 만한 가치가 있다.",
        author:"아멜리아 에어하트",
    },
    {
        quote:"건강은 제일의 재산이다.",
        author:"랄프 왈도 에머슨",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() * 구하고 싶은 범위 만약 10까지라면 0~9까지만 구해지므로 +1을 해줘야함 현재는 quotes의 길이로 계산하기때문에 0~9까지 인덱스가 나오는게 맞다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;






