const loginPage = document.getElementById("login-page");
const subscriptionPage = document.getElementById("subscription-page");
const loginButton = document.querySelector("#menu a:first-child");
const subscribeButton = document.querySelectorAll(".chamada-para-acao")[0];
const closeLogin = document.getElementById("close-login");
const closeSubscription = document.getElementById("close-subscription");


window.onload = function() {
  document.getElementById('subscription-page').style.display = 'none';
  document.getElementById('login-page').style.display = 'none';
};

loginButton.addEventListener("click", function(event) {
event.preventDefault();
loginPage.style.display = "flex";
});

subscribeButton.addEventListener("click", function(event) {
event.preventDefault();
subscriptionPage.style.display = "flex";
});

closeLogin.addEventListener("click", function() {
loginPage.style.display = "none";
});

closeSubscription.addEventListener("click", function() {
subscriptionPage.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == loginPage) {
        loginPage.style.display = "none";
  }
  if (event.target == subscriptionPage) {
        subscriptionPage.style.display = "none";
  }
});
