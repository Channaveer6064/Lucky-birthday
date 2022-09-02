var date = document.querySelector("#date");
var num = document.querySelector("#num");
var btn = document.querySelector(".btn");
var ans = document.querySelector("#ans");

function handler() {
  // console.log((date.value).replaceAll('-', ''))
  // console.log(num.value)
  var temp = parseInt(date.value.replaceAll("-", ""), 10);
  var sum = 0,
    rem = 0;
  // console.log(temp)
  while (temp !== 0) {
    rem = parseInt(temp % 10, 10);
    sum = sum + rem;
    temp = parseInt(temp / 10, 10);
  }
  // console.log(sum)

  if (sum % num.value === 0) {
    ans.innerText = "Your birthday is Lucky";
  } else {
    ans.innerText = "your birthday is NOT lucky, so sad";
  }
}

btn.addEventListener("click", handler);
