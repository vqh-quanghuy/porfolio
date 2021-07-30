<template>
  <div class="experiences-section">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <v-container class="pa-5">
      <h3 data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        class="sub-heading font-weight-black text-uppercase">
        Experiences
      </h3>
      <v-row align="stretch" class="mt-4 mb-16" >
        <v-col md="6" sm="12" cols="12">
          <div data-aos="fade-up"
          data-aos-duration="1500"
          class="work-place my-5" v-for="place in workplace" :key="place.title">
            <h5 class="font-weight-normal workplace-title">{{place.title}}</h5>
            <p class="font-weight-regular workplace-position">{{place.position}}</p>
          </div>
        </v-col>
        <v-col md="6" sm="12" cols="12">
          <div data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000">
            <h5 class="font-weight-bold text-center white--text tictactoe-title">Tic Tac Toe Game</h5>
            <p v-if="gameWinner!==''" :class="gameWinner == `You win!`? `teal--text` : (gameWinner == `Machine win!`)?`red--text`:`yellow--text`" class="font-weight-normal text-center text--lighten-2 tictactoe-winner">{{gameWinner}}</p>
            <table class="tictactoe mx-auto font-weight-black white--text my-4">
              <tr>
                <td class="cell" id="0"></td>
                <td class="cell" id="1"></td>
                <td class="cell" id="2"></td>
              </tr>
              <tr>
                <td class="cell" id="3"></td>
                <td class="cell" id="4"></td>
                <td class="cell" id="5"></td>
              </tr>
              <tr>
                <td class="cell" id="6"></td>
                <td class="cell" id="7"></td>
                <td class="cell" id="8"></td>
              </tr>
            </table>
            <div class="text-center">
              <v-btn small class="primary-btn mb-12" @click="startGame()">Restart</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  mounted() {
    this.cells = document.querySelectorAll('.cell');
    this.startGame();
  },
  methods: {
    startGame() {
      this.gameWinner = '';
      this.isEndgame = false;
      this.origBoard = Array.from(Array(9).keys());
      let cells = this.cells;
      for(let i = 0; i<cells.length;i++){
        cells[i].innerText = "";
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',this.turnClick, false);
      }
      this.cells = cells;
    },
    turnClick(square) {
      if(typeof this.origBoard[square.target.id]=='number'){
        this.turn(square.target.id, this.huPlayer);
        if(!this.checkTie() && this.gameWinner=='') this.turn(this.bestSpot(), this.aiPlayer);
      }
    },
    turn(squareId, player){
      this.origBoard[squareId] = player;
      document.getElementById(squareId).innerText = player;
      let gameWon = this.checkWin(this.origBoard, player);
      if(gameWon) this.gameOver(gameWon)
    },
    checkWin(board, player){
      let plays = board.reduce((a,e,i)=>(e===player)?a.concat(i):a,[])
      let gameWon = null;
      for(let [index, win] of this.winCombos.entries()){
        if(win.every(elem => plays.indexOf(elem)>-1)){
          gameWon = {index: index, player: player};
          break;
        }
      }
      return gameWon;
    },
    gameOver(gameWon){
      for(let index of this.winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player == this.huPlayer?"#4DB6AC":"#E57373";
      }
      let cells = this.cells;
      for(let i = 0; i<cells.length; i++){
        cells[i].removeEventListener('click', this.turnClick, false);
      }
      this.cells = cells;
      this.declareWinner(gameWon.player == this.huPlayer ? "You win!":"Machine win!");
    },
    emptySquares(){
      return this.origBoard.filter(s=>typeof s == 'number')
    },
    bestSpot(){
      return this.minimax(this.origBoard, this.aiPlayer).index;
    },
    minimax(newBoard, player){
      let availSpots = this.emptySquares(newBoard);
      if(this.checkWin(newBoard, player)) {
        return {score: -10};
      } else if(this.checkWin(newBoard, this.aiPlayer)) {
        return {score: 20};
      } else if(availSpots.length === 0) {
        return {score: 0};
      }
      let moves = [];
      for(let i = 0; i<availSpots.length; i++){
        let move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;
        if(player == this.aiPlayer) {
          let result = this.minimax(newBoard, this.huPlayer);
          move.score = result.score;
        } else {
          let result = this.minimax(newBoard, this.aiPlayer);
          move.score = result.score;
        }
        newBoard[availSpots[i]] = move.index;
        moves.push(move);
      }
      let bestMove;
      if(player === this.aiPlayer){
        let bestScore = -10000;
        for(let i = 0; i<moves.length; i++){
          if(moves[i].score > bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        let bestScore = 10000;
        for(let i = 0; i<moves.length; i++){
          if(moves[i].score < bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
      return moves[bestMove];
    },
    checkTie(){
      if(this.gameWinner !== "") return false;
      if(this.emptySquares().length == 0){
        let cells = this.cells;
        for(let i = 0; i< cells.length; i++){
          cells[i].style.backgroundColor = "#FFF176";
          cells[i].removeEventListener('click', this.turnClick, false);
        }
        this.cells = cells;
        this.declareWinner("Tie Game!")
        return true;
      }
      return false;
    },
    declareWinner(winner){
      this.gameWinner = winner;
    }
  },
  data: () => ({
    gameWinner: '',
    isEndgame: false,
    origBoard: Array,
    huPlayer: 'O',
    aiPlayer: "X",
    winCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]],
    cells: document.querySelectorAll('.cell'),
    workplace: [
      {title: '10/2018 - 5/2019: Hunghau Holdings', position: "Collaborator assist media - developing website",},
      {title: '11/2019 - 7/2020: MOR Software JSC', position: "Internship at Software Engineer position",},
    ],
  })
}
</script>
<style scoped>
.experiences-section{
  background: #32475B;
  position:relative;
  width: 100%;
  overflow: hidden;
}
.experiences-section .wave{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: url("../assets/wave.png");
  background-size: 1000px 80px;
}
.wave.wave1{
  animation: waveAnimate 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
.wave.wave2{
  animation: waveAnimate2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
.wave.wave3{
  animation: waveAnimate 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}
.wave.wave4{
  animation: waveAnimate2 15s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
@keyframes waveAnimate{
  0%{
    background-position-x: 0;
  }
  100%{
    background-position-x: 1000px;
  }
}
@keyframes waveAnimate2{
  0%{
    background-position-x: 0;
  }
  100%{
    background-position-x: -1000px;
  }
}
.sub-heading{
  font-size: 40px;
  line-height: 63px;
  color: #fff;
}
.workplace-title{
  font-size: 24px;
  color: #fff;
}
.workplace-position{
  font-size: 18px;
  color: #fff;
}
.tictactoe-title{
  font-size: 22px;
}
.tictactoe-winner{
  font-size: 24px;
}
.tictactoe td{
  border: 4px solid #fff;
  height: 100px;
  width: 100px;
  text-align: center;
  vertical-align: middle;
  font-size: 60px;
  cursor: pointer;
}
.tictactoe {
  border-collapse: collapse;
}
.tictactoe tr:first-child td{
  border-top: 0;
}
.tictactoe tr:last-child td{
  border-bottom: 0;
}
.tictactoe tr td:first-child{
  border-left: 0;
}
.tictactoe tr td:last-child{
  border-right: 0;
}
@media only screen and (max-width: 600px) {
  .sub-heading{
    font-size: 32px;
    line-height: 42px;
    color: #fff;
  }
  .workplace-title{
    font-size: 18px;
  }
  .workplace-position{
    font-size: 14px;
  }
  .tictactoe-title{
    font-size: 20px;
  }
  .tictactoe-winner{
    font-size: 18px;
  }
}
</style>