"use strict";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d")

let ground = new Image();
ground.src = "ground.png"

let food = new Image();
food.src = "food.png"

const box = 32;
let score = 0;

function drawGame() {
  ctx.drawImage(ground, 0, 0);
}

let game = setInterval(drawGame, 100);
