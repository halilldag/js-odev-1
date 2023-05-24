let fullName = prompt("Lütfen Adınızı Giriniz:");
let myName = document.querySelector("#myName");

myName.innerHTML = `${fullName}`;

function time() {
  let dateData = new Date();
  let hours = dateData.getHours();
  let minutes = dateData.getMinutes();
  let seconds = dateData.getSeconds();

  let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let dayName = days[dateData.getDay()];

  let info = document.querySelector("#myClock");
  info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;
}
setInterval(time, 1000); //Saatimizin anlık olarak güncellenmessini sağlıyor.
