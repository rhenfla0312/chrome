const clock = document.querySelector("#clock");

// function sayhello() {
//   console.log('hello');
// }

// intervals & timeout

// setInterval(실행하고자 하는 함수, 호출되는 함수의 간격) - 간격마다 반복
// setInterval(sayhello, 1000);

// setTimeout(실행하고자 하는 함수, 몇초뒤에 나오게할지) - 몇초뒤 한번만
// setTimeout(sayhello, 2000);


// js data 내장함수
// new Date() - 오늘 날짜를 가져온다

// new Date의 메소드
// getFullYear() - 년을 가져온다
// getMonth() - 월을 가져온다
// getDate() - 일을 가져온다
// getDay() - 요일을 가져온다
// getHours() - 시를 가져온다
// getMinutes() - 분을 가져온다
// getSeconds() - 초를 가져온다

// padStart & padEnd

// padStart - 설정한 `문자열`의 길이를 설정한값의 길이로 만드는데 설정한 값이 아니라면 추가할 값을 넣어서 설정한 값만큼 늘어나게 앞쪽에 값을 추가한다
// "원래길이".padStart(설정한길이, 설정한길이가 아닐경우 추가할 값)
// ex) "1".padStart(2, "0") - 1이란 문자열의 길이가 2가 아니라면 0을 추가한다 
// padEnd - padStart와 동일, 뒤쪽에 값을 추가한다

function time() {
  const date = new Date();
  
  // String() - number -> string
  // 숫자들이기 때문에 padStart를 사용하기 위해 string으로 변환한다
  let Hours = date.getHours(); 
  let Minutes = String(date.getMinutes()).padStart(2, "0");
  let Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.classList.add('clock');
  clock.innerHTML = `${Hours}:${Minutes}`;

}
time();
setInterval(time, 1000);
















