const Gameboard = (function () {
  let gameboard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],
    init: function () {
      this.cacheDOM();
      this.render();
      this.bindEvents();
    },

    cacheDOM: function () {
      this.board = document.querySelector("#gameboard");
      this.startBtn = document.querySelector("#start");
      this.restartBtn = document.querySelector("#restart");
      this.player1 = document.querySelector("#player1");
      this.player2 = document.querySelector("#player2");
      this.message= document.querySelector(".message");
    },

    bindEvents: function () {
      this.startBtn.addEventListener("click", this.startGame.bind(this));
      this.restartBtn.addEventListener("click", this.restartGame.bind(this));
    },

    render: function () {
      let gboard = {
        gameboard: this.gameboard,
      };
      this.board.innerHTML = "";
      gboard.gameboard.forEach((index) => {
        const square = document.createElement("div");
        square.id = `square-${index}`;
        square.setAttribute("value", index);
        this.board.appendChild(square);
      });
    },
    clearTextField: function () {
      this.player1.value = "";
      this.player2.value = "";
    },

    startGame: function (event) {
      event.preventDefault();
      this.clearTextField();
      this.message.innerHTML=`Lets play the game!!! ${this.player1.value}'s turn.`
    },

    restartGame: function (event) {
      event.preventDefault();
      console.log("hello");
    },
  };
  gameboard.init();
})();
