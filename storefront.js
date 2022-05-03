console.log("TELEGRAM WEB APP:", window.Telegram.WebApp);

function applyTelegramTheme() {
  const { themeParams } = window.Telegram.WebApp;

  document.body.style.background = themeParams.bg_color;
}

window.Telegram.WebApp.onEvent("themeChanged", function () {
  applyTelegramTheme();
});

window.Ecwid.OnOrderPlaced.add(function (order) {
  console.log(order.orderNumber);
});
