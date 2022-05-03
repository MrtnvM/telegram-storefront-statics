console.log("TELEGRAM WEB APP:", window.Telegram.WebApp);
document.body.style.background = window.Telegram.WebApp.themeParams.bg_color;

document.body.classList.add("light-telegram-theme");

setTimeout(() => {
  document.body.classList.add("light-telegram-theme");
}, 15000);

window.Telegram.WebApp.onEvent("themeChanged", function () {
  document.body.style.background = window.Telegram.WebApp.themeParams.bg_color;
});

window.Ecwid.OnOrderPlaced.add(function (order) {
  console.log(order.orderNumber);
});
