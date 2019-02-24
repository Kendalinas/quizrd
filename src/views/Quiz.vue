<template>
  <div class="quiz">
    <b-container>
      <h2>Quiz</h2>

      <form @submit.prevent="gradeQuiz">
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <p>{{index+1}}. {{result.question}}</p>
            <p>
              <b-form-input  v-model="answers[index]" type="text" placeholder="Enter answer"/>
            </p>
            <p v-show="grade[index] ===  0">
               <i class="fas fa-times"></i>
            </p>
             <p v-show="grade[index] ===  1">
              <i class="fas fa-check"></i>
            </p>
          </li>
        </ul>
        <b-button type="submit" class="submit">Submit</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "Quiz",
  data() {
    return {
      errors: [],
      results: null,
      answers: [],
      grade:[]
    };
  },

  mounted: function() {
    // console.log(this.$route.params.results);
    this.results = this.$route.params.results;
  },
  methods: {
    gradeQuiz() {
      // console.log(this.answers);
      this.answers.forEach((item,i)=>{
        // console.log(this.answers)
        if (this.$route.params.results[i].answer.trim().toLowerCase() === item.trim().toLowerCase()) {
          this.grade[i] = 1
        } else {
          this.grade[i] = 0
        }
      })
      console.log(this.grade)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 20px 0;
  color: white;
}
p {
  color: white;
  font-weight: bold;
}
.container {
  padding: 20px 0;
}
.quiz {
  /* background-color: rgb(235, 141, 19); */
  height:1000px;
}
ul {
  list-style-type: none;
}
button.submit {
  background-color:black;
  color: white;
  font-weight: bold;
}
.fa-times {
  color: yellow;
  font-size: 1.5em;
}
.fa-check {
  color: aqua;
  font-size: 1.5em;
}

</style>
