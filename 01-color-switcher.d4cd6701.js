!function(){var t;function e(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));document.body.style.backgroundColor=t}document.querySelector("[data-start]").addEventListener("click",(function(){t||(document.querySelector("[data-start]").disabled=!0,t=setInterval(e,1e3))})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),t=null,document.querySelector("[data-start]").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d4cd6701.js.map