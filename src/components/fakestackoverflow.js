import React from "react";
import Model from "../models/model.js";
import Header from "./Header/Header.js";
import AskQuestionPage from "./Askquestion/AskquestionPage";
import Question from "./Question/Question.js";
import TagPage from "./Tags/TagPage.js";
import Answer from "./Answer/Answer";
import AddAnswer from "./AddAnswer/Addanswer";

// Create the new object for model
export default class FakeStackOverflow extends React.Component {
  constructor() {
    super();
    this.state = {
      AskPageFlag: false,
      showQuestionPage: false,
      showTagPage: false,
      model: new Model(),
      showAns: false,
      ansTitle: "",
      showAddAns: false,
      selectedQuestion: [],
      typeSelected: 0,
    };
  }

  setEverything = () => {
    this.setState({
      AskPageFlag: false,
      showQuestionPage: false,
      showTagPage: false,
      model: new Model(),
      showAns: false,
      ansTitle: "",
      showAddAns: false,
      selectedQuestion: [],
      typeSelected: 0,
    });
  };

  showAskPage = () => {
    this.setEverything();
    this.setState({
      AskPageFlag: true,
    });
  };

  showQuestion = () => {
    this.setEverything();
    this.setState({
      showQuestionPage: true,
    });
  };

  // show the tag page
  showTags = () => {
    this.setEverything();
    this.setState({
      showTagPage: true,
    });
  };

  //show answer page
  showAnswers = () => {
    this.setEverything();
    this.setState({
      showAns: true,
    });
  };

  //get the question title
  getAnsTitle = (Qtitle) => {
    this.setState({
      ansTitle: Qtitle,
    });
  };
  //show the ans answer
  showAddAnsPage = () => {
    this.setState({
      AskPageFlag: false,
      showQuestionPage: false,
      showTagPage: false,
      model: new Model(),
      showAns: false,
      ansTitle: "",
      showAddAns: true,
    });
  };

  addQuestion = (newQ) => {
    let newModel = this.state.model;
    newModel.addQuestions(newQ);
    console.log(newModel.getQuestions());
    this.setState({
      model: newModel,
    });

    console.log("model below: ");
    console.log(this.state.model.getQuestions());
  };

  // get the selected question
  getSelectedQuestion = (newQuestionLst, number) => {
    this.setEverything();
    this.setState({
      selectedQuestion: newQuestionLst,
      showQuestionPage: true,
      typeSelected: number,
    });
  };

  render() {
    // the new model
    // const model = new Model();
    // The state that control the appearance of each page
    return (
      <>
        <Header
          showQuestion={this.showQuestion}
          showTags={this.showTags}
          Qflag={this.state.showQuestionPage}
          Tflag={this.state.showTagPage}
          select={this.getSelectedQuestion}
          model={this.state.model}
        />

        {/* show the question page */}
        {this.state.showQuestionPage ? (
          <Question
            question_lst={
              this.state.typeSelected != 0
                ? this.state.selectedQuestion
                : this.state.model.getQuestions()
            }
            model={this.state.model}
            onChange={this.showAskPage}
            showAnswers={this.showAnswers}
            getAnsTitle={this.getAnsTitle}
            selectNum={this.state.typeSelected}
          />
        ) : null}

        {/* show the tag page */}
        {this.state.showTagPage ? (
          <TagPage
            model={this.state.model}
            onChange={this.showAskPage}
            select={this.getSelectedQuestion}
          />
        ) : null}

        {/* show the ask question page */}
        {this.state.AskPageFlag ? (
          <AskQuestionPage
            model={this.state.model}
            showQuestion={this.showQuestion}
            addQuestion={this.addQuestion}
          />
        ) : null}

        {/* show the answer page of the question */}
        {this.state.showAns ? (
          <Answer
            model={this.state.model}
            Qtitle={this.state.ansTitle}
            onChange={this.showAskPage}
            showAddAnsPage={this.showAddAnsPage}
          />
        ) : null}

        {/* show the add answer page */}
        {this.state.showAddAns ? <AddAnswer /> : null}

        {console.log("testing the ask quesiton page")}
        {console.log(this.state.model.getQuestions())}
      </>
    );
  }
}
