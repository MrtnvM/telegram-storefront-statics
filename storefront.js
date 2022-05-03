console.log("TELEGRAM WEB APP:", window.Telegram.WebApp);

function applyTelegramTheme() {
  const { themeParams } = window.Telegram.WebApp;

  document.body.style.background = themeParams.bg_color;
}

applyTelegramTheme();

window.Telegram.WebApp.onEvent("themeChanged", function () {
  applyTelegramTheme();
});
