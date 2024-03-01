import React, { useState, useEffect } from "react";
import Feedback from "../../Components/Feedback/Feedback";
import Sad from "../../assests/Emoji/sad.png";
import Smile from "../../assests/Emoji/Smile.png";
import FeedbackComment from "../../Components/Feedback/FeedBackCommen";
const Course = () => {
  //States
  const [assesmentQuestions, setAssesmentQuestions] = useState([
    {
      question: "Information about the assessment was clearly communicated",
      score: -1,
    },
    {
      question: "Feedback was provided within the stated time frame",
      score: -1,
    },
    {
      question:
        "Feedback showed how to improve my work (e.g. corrections including comments)",
      score: -1,
    },
  ]);

  const [resourceAndAdminQuestions, setResourceAndAdminQuestions] = useState([
    {
      question: "The course was supported by adequate library resources",
      score: -1,
    },
    { question: "Black-board resources for the course were useful", score: -1 },
    {
      question: "The faculty gave guidance on where to find resources",
      score: -1,
    },
  ]);

  const [courseQuestions, setCourseQuestions] = useState([
    {
      question: "The syllabus was explained at the beginning of the course",
      score: -1,
    },
    {
      question: "The course was delivered as outlined in the syllabus",
      score: -1,
    },
    {
      question: "Faculty explained the grading criteria of the course",
      score: -1,
    },
    { question: "Exams related to the course learning outcomes", score: -1 },
    {
      question: "Projects/assignments related to the course learning outcomes",
      score: -1,
    },
    {
      question: "Overall, how do you rate your experience in this course",
      score: -1,
    },
    {
      question:
        "How many hours did you spend per week on preparation/homework for this course?",
      score: -1,
    },
  ]);

  const [studentSelfEvaluationQuestions, setStudentSelfEvaluationQuestions] =
    useState([
      {
        question: "I contributed constructively during in-class activities.",
        score: -1,
      },
      { question: "I feel I am achieving the learning outcomes.", score: -1 },
    ]);

  const [yourCommentsQuestions, setYourCommentsQuestions] = useState([
    {
      question:
        "What additional activities/training have been provided by faculty to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?",
      value: "",
    },
    {
      question:
        "What additional activities/training have you done on your own to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?",
      value: "",
    },
    {
      question: "What changes would you recommend to improve this course?",
      value: "",
    },
    {
      question: "What did you like best about your faculty teaching?",
      value: "",
    },
    {
      question: "What did you like least about your faculty’s teaching?",
      value: "",
    },
    {
      question: "What do you recommend for improving CO attainment?",
      value: "",
    },
  ]);

  const [teachingApproaches, setTeachingApproaches] = useState([
    {
      question: "The faculty stimulated my interest in the subject",
      score: -1,
    },
    { question: "The faculty managed classroom time and pace well", score: -1 },
    {
      question: "The faculty was organized and prepared for every class",
      score: -1,
    },
    {
      question: "The faculty encouraged discussions and responded to questions",
      score: -1,
    },
    {
      question: "The faculty demonstrated in-depth knowledge of the subject",
      score: -1,
    },
    {
      question: "The faculty appeared enthusiastic and interested in the class",
      score: -1,
    },
    {
      question:
        "The faculty used a variety of instructional methods to reach the course outcome (e.g. group discussions, student presentations, etc)",
      score: -1,
    },
    {
      question: "The faculty motivated students to do their best work",
      score: -1,
    },
    {
      question:
        "The faculty actively attempted to prevent cheating in this course",
      score: -1,
    },
    { question: "The faculty was accessible outside of class", score: -1 },
    { question: "Faculty has made you understand all COs", score: -1 },
    {
      question:
        "Faculty has delivered and fulfilled requirement of CO 1 and feel that you have attained requirement of CO1",
      score: -1,
    },
    {
      question:
        "Faculty has delivered and fulfilled requirement of CO 2 and feel that you have attained requirement of CO2",
      score: -1,
    },
    {
      question:
        "Faculty has delivered and fulfilled requirement of CO 3 and feel that you have attained requirement of CO3",
      score: -1,
    },
    {
      question:
        "Faculty has delivered and fulfilled requirement of CO 4 and feel that you have attained requirement of CO4",
      score: -1,
    },
    {
      question:
        "Faculty has delivered and fulfilled requirement of CO 5 and feel that you have attained requirement of CO5",
      score: -1,
    },
    {
      question: "Faculty has explained CO-PO mapping of your course",
      score: -1,
    },
    {
      question:
        "Faculty/HoD has explained mapping of PO, PSO, PEO, Mission & Vision",
      score: -1,
    },
  ]);

  const [tab, setTab] = useState(0);
  const [isNextPossible, setIsNextPossible] = useState(false);
  
  //useEffects
  useEffect(() => {
    setIsNextPossible(true);
    teachingApproaches.forEach((questions) => {
      if (questions.score === -1) {
        setIsNextPossible(false);
        return;
      }
    });
  }, [teachingApproaches]);
  useEffect(() => {
    setIsNextPossible(true);
    assesmentQuestions.forEach((questions) => {
      if (questions.score === -1) {
        setIsNextPossible(false);
        return;
      }
    });
  }, [assesmentQuestions]);
  useEffect(() => {
    setIsNextPossible(true);
    resourceAndAdminQuestions.forEach((questions) => {
      if (questions.score === -1) {
        setIsNextPossible(false);
        return;
      }
    });
  }, [resourceAndAdminQuestions]);
  useEffect(() => {
    setIsNextPossible(true);
    courseQuestions.forEach((questions) => {
      if (questions.score === -1) {
        setIsNextPossible(false);
        return;
      }
    });
  }, [courseQuestions]);
  useEffect(() => {
    setIsNextPossible(true);
    studentSelfEvaluationQuestions.forEach((questions) => {
      if (questions.score === -1) {
        setIsNextPossible(false);
        return;
      }
    });
  }, [studentSelfEvaluationQuestions]);
  useEffect(() => {
    setIsNextPossible(true);
    yourCommentsQuestions.forEach((questions) => {
      if (questions.value === "") {
        setIsNextPossible(false);
        return;
      }
    });
  }, [yourCommentsQuestions]);

  //Functions
  const handleChangeValueTeaching = (value, item) => {
    setTeachingApproaches((prevTeachingApproaches) =>
      prevTeachingApproaches.map((question) =>
        question.question === item.question
          ? { ...question, score: value }
          : question
      )
    );
  };
  const handleChangeValueAssessment = (value, item) => {
    setAssesmentQuestions((prevAssesmentQuestions) =>
      prevAssesmentQuestions.map((question) =>
        question.question === item.question
          ? { ...question, score: value }
          : question
      )
    );
  };
  const handleChangeValueResource = (value, item) => {
    setResourceAndAdminQuestions((prevResourceQuestions) =>
      prevResourceQuestions.map((question) =>
        question.question === item.question
          ? { ...question, score: value }
          : question
      )
    );
  };
  const handleChangeValueCourse = (value, item) => {
    setCourseQuestions((prevCourseQuestions) =>
      prevCourseQuestions.map((question) =>
        question.question === item.question
          ? { ...question, score: value }
          : question
      )
    );
  };
  const handleChangeValueSelf = (value, item) => {
    setStudentSelfEvaluationQuestions((prevSelfQuestions) =>
      prevSelfQuestions.map((question) =>
        question.question === item.question
          ? { ...question, score: value }
          : question
      )
    );
  };
  const handleChangeValueComment = (value, item) => {
    setYourCommentsQuestions((prevCommentQuestions) =>
    prevCommentQuestions.map((question) =>
        question.question === item.question
          ? { ...question, value: value }
          : question
      )
    );
  };
  return (
    <div className="w-full flex flex-col items-center h-[90%] ">
      {tab === 0 ? (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              FEEDBACK OF TEACHING APPROACHES
            </h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => setTab(tab + 1)}
            >
              Next
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8">
            {teachingApproaches.map((ques, i) => {
              return (
                <>
                  <Feedback
                    question={ques.question}
                    satisfation={"Extremely Likely"}
                    disagreement={"Not at all Likely"}
                    satisfactionEmoji={Smile}
                    disagreementEmoji={Sad}
                    key={i}
                    value={ques.score}
                    item={ques}
                    handleChangeValue={handleChangeValueTeaching}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : tab === 1 ? (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              FEEDBACK ON FEEDBACK AND ASSESSMENT
            </h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => setTab(tab + 1)}
            >
              Next
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8">
            {assesmentQuestions.map((ques, i) => {
              return (
                <>
                  <Feedback
                    question={ques.question}
                    satisfation={"Extremely Likely"}
                    disagreement={"Not at all Likely"}
                    satisfactionEmoji={Smile}
                    disagreementEmoji={Sad}
                    key={i}
                    value={ques.score}
                    item={ques}
                    handleChangeValue={handleChangeValueAssessment}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : tab === 2 ? (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              FEEDBACK ON RESOURCE AND ADMINISTRATION
            </h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => setTab(tab + 1)}
            >
              Next
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8">
            {resourceAndAdminQuestions.map((ques, i) => {
              return (
                <>
                  <Feedback
                    question={ques.question}
                    satisfation={"Extremely Likely"}
                    disagreement={"Not at all Likely"}
                    satisfactionEmoji={Smile}
                    disagreementEmoji={Sad}
                    key={i}
                    value={ques.score}
                    item={ques}
                    handleChangeValue={handleChangeValueResource}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : tab === 3 ? (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">FEEDBACK ON COURSE</h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => setTab(tab + 1)}
            >
              Next
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8">
            {courseQuestions.map((ques, i) => {
              return (
                <>
                  <Feedback
                    question={ques.question}
                    satisfation={"Extremely Likely"}
                    disagreement={"Not at all Likely"}
                    satisfactionEmoji={Smile}
                    disagreementEmoji={Sad}
                    key={i}
                    value={ques.score}
                    item={ques}
                    handleChangeValue={handleChangeValueCourse}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : tab === 4 ? (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              FEEDBACK ON STUDENT SELF EVALUATION
            </h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => setTab(tab + 1)}
            >
              Next
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8">
            {studentSelfEvaluationQuestions.map((ques, i) => {
              return (
                <>
                  <Feedback
                    question={ques.question}
                    satisfation={"Extremely Likely"}
                    disagreement={"Not at all Likely"}
                    satisfactionEmoji={Smile}
                    disagreementEmoji={Sad}
                    key={i}
                    value={ques.score}
                    item={ques}
                    handleChangeValue={handleChangeValueSelf}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-[90%] flex flex-col py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Comments</h2>
            <button
              className={`bg-thirdColor text-textColor w-[130px] h-10 rounded-lg ${
                !isNextPossible
                  ? "cursor-not-allowed"
                  : "hover:bg-textColor hover:text-thirdColor"
              }`}
              disabled={!isNextPossible}
              onClick={() => {
                console.log("Teaching Approaches:");
                console.log(teachingApproaches);
                console.log("Assessment:");
                console.log(assesmentQuestions);
                console.log("Resources:");
                console.log(resourceAndAdminQuestions);
                console.log("Course:");
                console.log(courseQuestions);
                console.log("Self:");
                console.log(studentSelfEvaluationQuestions);
                console.log("Your Comments:");
                console.log(yourCommentsQuestions);
              }}
            >
              Submit
            </button>
          </div>
          <div className="mt-[34px] flex flex-col gap-8 w-full">
            {yourCommentsQuestions.map((ques, i) => {
              return (
                <>
                  <FeedbackComment
                    question={ques.question}
                    key={i}
                    value={ques.value}
                    item={ques}
                    handleChangeValue={handleChangeValueComment}
                  />
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
