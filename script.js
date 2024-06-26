const Gameboard = (function () {
  let gameboard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],
    currentPlayer:'X',
    player1:'',
    player2:'',
    squares:[],

    init: function () {
      this.cacheDOM();
      this.render();
      this.bindEvents();
      console.log(this.gameboard)
    },

    cacheDOM: function () {
      this.board = document.querySelector("#gameboard");
      this.startBtn = document.querySelector("#start");
      this.restartBtn = document.querySelector("#restart");
      this.player1Name = document.querySelector("#player1");
      this.player2Name = document.querySelector("#player2");
      this.message= document.querySelector(".message");
    },

    bindEvents: function () {
      this.startBtn.addEventListener("click", this.startGame.bind(this));
      this.restartBtn.addEventListener("click", this.restartGame.bind(this));
      this.board.addEventListener('click', this.handleClickTurn.bind(this))
    },

    render: function () {
      this.board.innerHTML = "";
      this.squares=[];
      this.gameboard.forEach((value,index) => {
        const square = document.createElement("div");
        square.id = `square-${index}`;
        square.setAttribute("data-index", index);
        square.textContent=value;
        this.board.appendChild(square);
        this.squares.push(square);
      });
    },

    clearTextField: function () {
      this.player1Name.value= "";
      this.player2Name.value= "";
    },

    startGame: function (event) {
      event.preventDefault();
      this.player1=this.player1Name.value;
      this.player2=this.player2Name.value;
      this.message.innerHTML=`Lets play the game!!! ${this.player1}'s turn.`
      this.clearTextField();
    },

    restartGame: function (event) {
      event.preventDefault();
      this.currentPlayer='X'
      this.gameboard=["","","","","","","","",""]
      this.message.innerHTML='Welcome to Tic-Tac-Toe!!'
      this.render();
    },

    handleClickTurn:function(event){
      const index=event.target.dataset.index;
      if(this.gameboard[index]===''){
        this.gameboard[index]=this.currentPlayer;
        this.currentPlayer=this.currentPlayer==="X"?"0":'X';
        this.render()
      }
    },

    checkWinner: function(){

    }

  };
  gameboard.init();
})();
