const clock = document.querySelector("h2#clock");
/*
number => text로 변경하는법 String()을 사용한다.
padStart(2,"0") => string의 길이가 2이면 좋겠다 그렇지 않다면 앞쪽에 빈자리를 채우고 싶을때 사용함수 "01", "02" 이런식
*/
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//두개의 인수를 받는다(argument) 첫번째: 내가 실행하고자하는 function명, 두번째: 호출되는 function간격을 몇 ms로 할 지 작성
setInterval(getClock, 1000);
//두개의 인수를 받는다. 몇초뒤에 실행하고싶을때 사용
// setTimeout(sayHello, 5000);




