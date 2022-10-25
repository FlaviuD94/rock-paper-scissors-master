"use strict";

const rulesBtn = document.querySelector("#rules-btn");
const closeBtn = document.querySelector("#close-toggler");

const modal = document.querySelector(".modal");

rulesBtn.addEventListener("click", activeModal);
closeBtn.addEventListener("click", closeModal);

function activeModal() {
  modal.classList.add("visible");
}

function closeModal() {
  modal.classList.remove("visible");
}
