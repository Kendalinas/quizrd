<template>
  <div class="quiz-writer">
    <b-container>
      <h2>Input</h2>

      <form @submit.prevent="processText">
        <label for="myFile">
          <p>Choose File or paste text</p>
          <input type="file" id="myFile">
        </label>
        <b-form-textarea
          class="input-content"
          id="textarea1"
          v-model="text"
          placeholder="Enter content to turn into quiz"
          :rows="5"
          :max-rows="50"
        ></b-form-textarea>

        <b-form-group label="Choose type of quiz question:">
          <b-form-checkbox-group id="type" name="type" v-model="type">
            <b-form-checkbox value="fillin">Fill in the blank</b-form-checkbox>
            <b-form-checkbox value="multichoice">Multiple Choice</b-form-checkbox>
            <b-form-checkbox value="shortanswer">Short Answer</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Choose catagory:">
          <b-form-select v-model="category" class="mb-3 category-select">
            <option :value="null">Please select an option</option>
            <option value="definitions">Definitions</option>
            <option value="activities">Activities</option>
            <option value="events/dates">Events/Dates</option>
            <option value="glossary">Glossary</option>
          </b-form-select>
        </b-form-group>
        <div>
          <b-button type="submit" variant="primary" size="lg">Create Quiz</b-button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "QuizWriter",
  data() {
    return {
      results: null,
      errors: [],
      text: "",
      quiz: "",
      type: "",
      category: "null"
    };
  },
  methods: {
    processText() {
      // console.log(this.text);
      this.quiz = [
        {
          question:
            "One early example of a machine that could reproduce sets of instructions is the Jacquard Loom, invented by ____________ in 1804.\n",
          answer: "Joseph Marie Jacquard"
        },
        {
          question:
            "Later in the 19th Century, ____________ came up with the idea of the Difference Engine, which was a calculation device specifically designed to solve polynomial equations.",
          answer: "Charles Babbage"
        }
      ];
      // this.quiz = [{"test":"test"}]
      this.$router.push({ name: "quiz", params: { results: this.quiz } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 5px 0;
  color: white;
}
.container {
  padding: 20px 0;
}
label {
  color: white;
  font-weight: bold;
}
legend {
  color: white;
  font-weight: bold;
}
 input {
  color: white;
  font-weight: bold;
}


.input-content {
  /* margin: 2em auto; */
  width: 80%;
  border-radius: 5px;
  border: 1px solid rgb(111, 111, 117);
}
.quiz-content {
  text-align: left;
  padding: 10px;
  margin: 2em auto;
  width: 80%;
  height: 100px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid blue;
}
.login {
  padding: 5px;
}
.category-select {
  width: 25%;
}
textarea {
  margin: 0 0 ;
}
</style>
