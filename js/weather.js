// 좌표 구하기

// navigator.geolocation.getCurrentPosition - user의 위치를 준다, 위치 좌표를 준다, ex) wifi, gps..
// navigator.geolocation.getCurrentPosition(성공했을때 실행될 함수, 에러가 났을때 실행될 함수), 실행에 성공하면 js에서 user위치를 첫번째 인자로 전달해준다  

// https://openweathermap.org api를 이용하여 좌표를 이용해서 정보를 얻어온다

// 1. map api를 이용해서 좌표를 통해 날씨를 구한다
// By geographic coordinates -> 샘플 -> api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 
function onGeoOk(position) {
  // 위도(좌표)
  let lat = position.coords.latitude
  // 경도(좌표)
  let lon = position.coords.longitude
  // api key
  const API_KEY = "c78d31a96883d05469d4bad04ba7081b";
  // api를 이용해 url 부르기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch() -> promise다 -> promise -> 당장 실행이 되는게 아니라 시간이 좀 걸린 뒤에 일어난다(비동기)
  // fetch() - 원격 api 호출, url 얻기, js가 비동기로 불러온다
  // unit을 url에 같이 보내면 값을 수정할 수 있다 -> unit을 사용했으면 사용했다고 js에게 알려줘야한다 -> 서버의 응답을 기다리기 위해 then을 사용한다
  // 정리 - 내 좌표를 얻어서 api로 db에 질문을 던진다
  fetch(url).then((response) => response.json()).then((data) => {
    // dom
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  });
}

function onGeoError() {
  alert("Can't find you. No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
































