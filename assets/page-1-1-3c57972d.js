import"./auxiliary-6dc06574.js";import{m as e}from"./task-1-531423f8.js";const t={btnMakeTransaction:document.querySelector(".js-make-transaction"),btnClear:document.querySelector(".js-btn-clear"),inputPrice:document.querySelector("#droid-price"),inputQuantity:document.querySelector("#droids-quantity"),resultLabel:document.querySelector(".js-result-transaction")};t.btnMakeTransaction.addEventListener("click",n);t.btnClear.addEventListener("click",r);function n(){t.resultLabel.textContent="Result: "+e(t.inputQuantity.value,t.inputPrice.value)}function r(){t.inputPrice.value="",t.inputQuantity.value="",t.resultLabel.textContent="Result: "}
