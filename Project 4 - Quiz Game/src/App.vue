<template>
  <div>
    <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount"/>
    <template v-if="this.question">
      <h1 v-html="this.question" />  

      <template v-for="(answer,index) in this.answers" :key="index">
        <input 
          type="radio" 
          name="options"
          :value="answer" 
          :disabled="this.answerSubmitted"
          v-model="this.selectedAnswer"
        /><!----dinamico se usan los 2 puntos---->
        <label v-html="answer"></label><br>
      </template>
    </template>
    <button class="send" type="button" @click="submitAnswer()" v-if="!this.answerSubmitted">Send</button>
    <section class="result" v-if="this.answerSubmitted">
        <h4 v-if="this.selectedAnswer == this.correctAnswer">&#9989; Congrats! :D your answer "{{this.correctAnswer}}" is correct! </h4>
        <h4 v-else>&#10060; Sorry, your answer is incorrect :( The correct answer is "{{this.correctAnswer}}"</h4>
        <button class="send" type="button" @click="this.getNewQuestion()">Next question</button> 
    </section>
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard.vue';

export default {
  name: 'App',
  components: {ScoreBoard},
  data(){
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      selectedAnswer: undefined,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
    }
  },
  methods:{
    submitAnswer(){
      if(!this.selectedAnswer){
        alert("Please select an option :)");
      }else{
        this.answerSubmitted=true;
        if(this.selectedAnswer == this.correctAnswer){
          this.winCount++;
        }else{
          this.loseCount++;
        }
      }
    },

    getNewQuestion(){
      this.answerSubmitted = false; 
      this.selectedAnswer = undefined; 
      this.question = undefined; 

      this.axios.get('https://opentdb.com/api.php?amount=1&category=20').then((response) => {
        this.question = response.data.results[0].question; 
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
        //console.log(response.data.results[0])
      })
    }
  },
  computed: {
    answers(){
      var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(Math.round(Math.random()*answers.length),0,this.correctAnswer);
      return answers;
    }
  },
  created(){
    this.getNewQuestion();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;
}
input[type=radio]{
  margin: 12px 4px;
}
button.send{
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background-color: #1867c8;
  border: 1px solid #1867c8;
  cursor: pointer;
}
</style>
