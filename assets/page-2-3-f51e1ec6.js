import"./styles-46c5579a.js";import{c as t}from"./task-3-b9dd9918.js";const e={btnCheckMassage:document.querySelector(".js-check-massage"),btnClear:document.querySelector(".js-btn-clear-spam-message"),txtArea:document.querySelector("#spam-message"),resultLabel:document.querySelector(".js-spam-message")};e.btnCheckMassage.addEventListener("click",s);e.btnClear.addEventListener("click",a);function s(){t(e.txtArea.value)?(e.resultLabel.textContent="The message has a spam!",e.resultLabel.classList.remove("accent-color"),e.resultLabel.classList.add("accent-color-error")):(e.resultLabel.textContent="The message is ok!",e.resultLabel.classList.remove("accent-color-error"),e.resultLabel.classList.add("accent-color"))}function a(){e.txtArea.value="",e.resultLabel.textContent=""}
