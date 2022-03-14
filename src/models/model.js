export default class Model {
  constructor() {
    this.data = {
      questions: [
        {
          qid: "q1",
          title: "Programmatically navigate using React router",
          text: "the alert shows the proper index for the li clicked, and when I alert the variable within the last function I'm calling, moveToNextImage(stepClicked), the same value shows but the animation isn't happening. This works many other ways, but I'm trying to pass the index value of the list item clicked to use for the math to calculate.",
          tagIds: ["t1", "t2"],
          askedBy: "JoJi John",
          askedOn: "Jan 19, 2022",
          askedAt: "21:25",
          answers: ["a1", "a2"],
          views: 10,
        },
        {
          qid: "q2",
          title:
            "android studio save string shared preference, start activity and load the saved string",
          text: "I am using bottom navigation view but am using custom navigation, so my fragments are not recreated every time i switch to a different view. I just hide/show my fragments depending on the icon selected. The problem i am facing is that whenever a config change happens (dark/light theme), my app crashes. I have 2 fragments in this activity and the below code is what i am using to refrain them from being recreated.",
          tagIds: ["t3", "t4", "t2"],
          askedBy: "saltyPeter",
          askedOn: "Jan 01, 2022",
          askedAt: "01:15",
          answers: ["a4", "a5", "a3"],
          views: 121,
        },
      ],
      tags: [
        {
          tid: "t1",
          name: "react",
        },
        {
          tid: "t2",
          name: "javascript",
        },
        {
          tid: "t3",
          name: "android-studio",
        },
        {
          tid: "t4",
          name: "shared-preferences",
        },
      ],
      answers: [
        {
          aid: "a1",
          text: "React Router is mostly a wrapper around the history library. history handles interaction with the browser's window.history for you with its browser and hash histories. It also provides a memory history which is useful for environments that don't have a global history. This is particularly useful in mobile app development (react-native) and unit testing with Node.",
          ansBy: "hamkalo",
          ansOn: "Feb 02, 2022",
          ansAt: "10:15",
        },
        {
          aid: "a2",
          text: "On my end, I like to have a single history object that I can carry even outside components. I like to have a single history.js file that I import on demand, and just manipulate it. You just have to change BrowserRouter to Router, and specify the history prop. This doesn't change anything for you, except that you have your own history object that you can manipulate as you want. You need to install history, the library used by react-router.",
          ansBy: "azad",
          ansOn: "Jan 31, 2022",
          ansAt: "10:15",
        },
        {
          aid: "a3",
          text: "Consider using apply() instead; commit writes its data to persistent storage immediately, whereas apply will handle it in the background.",
          ansBy: "abaya",
          ansOn: "Jan 21, 2022",
          ansAt: "21:15",
        },
        {
          aid: "a4",
          text: "YourPreference yourPrefrence = YourPreference.getInstance(context); yourPreference.saveData(YOUR_KEY,YOUR_VALUE);",
          ansBy: "alia",
          ansOn: "Feb 05, 2022",
          ansAt: "19:51",
        },
        {
          aid: "a5",
          text: "I just found all the above examples just too confusing, so I wrote my own. ",
          ansBy: "sana",
          ansOn: "Jan 30, 2022",
          ansAt: "09:29",
        },
      ],
    };
  }

  // add relevant methods here.

  // Get Questions
  getQuestions() {
    for (var i = 0; i < this.data.questions.length; i++) {
      this.sort(
        this.data.questions[i].answers,
        this.data.questions[i].answers.length
      );
    }
    return this.data.questions;
  }

  // add Questions here
  addQuestions(questionObject) {
    this.sort(this.data.questions, this.data.questions.length);
    const len = this.data.questions.length + 1;
    const Qid = "q" + len.toString();
    questionObject["qid"] = Qid;
    this.data.questions.unshift(questionObject);
  }

  getTags() {
    return this.data.tags;
  }

  addTags(Tags) {
    this.data.tags.push(Tags);
  }

  getAnswers() {
    this.sort(this.data.answers, this.data.answers.length);
    return this.data.answers;
  }

  addAnswers(ans) {
    this.data.answers.push(ans);
  }

  tagExist(tag) {
    for (var i = 0; i < this.data.tags.length; i++) {
      if (this.data.tags[i].name.toUpperCase() == tag.toUpperCase()) {
        return this.data.tags[i].tid;
      }
    }
    return " ";
  }

  tagsLength() {
    return this.data.tags.length + 1;
  }

  getIDsNum() {
    var len = this.data.tags.length;
    var idDict = new Array(len).fill(0);
    for (var i = 0; i < this.data.questions.length; i++) {
      const tagLst = this.data.questions[i].tagIds;
      for (var j = 0; j < tagLst.length; j++) {
        idDict[parseInt(tagLst[j].substring(1)) - 1] =
          idDict[parseInt(tagLst[j].substring(1)) - 1] + 1;
      }
    }
    return idDict;
  }

  appendAnswer(index, ansID) {
    var changed = this.data.questions[index];
    this.data.questions[index].views = this.data.questions[index].views - 1;
    this.sort(
      this.data.questions[index].answers,
      this.data.questions[index].answers.length
    );
    var newAns = this.data.answers[ansID];
    changed.answers.unshift(newAns.aid);
  }

  increaseView(index) {
    this.data.questions[index].views = this.data.questions[index].views + 1;
  }

  swap(arr, point1, point2) {
    var temp = arr[point1];
    arr[point1] = arr[point2];
    arr[point2] = temp;
  }

  sort(arr, len) {
    var i, j;
    for (i = 0; i < len - 1; i++) {
      for (j = 0; j < len - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          this.swap(arr, j, j + 1);
        }
      }
    }
  }
}
