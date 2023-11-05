import React from "react";
import Feedback from "../../Components/Feedback/Feedback";
import Sad from "../../assests/Emoji/sad.png";
import Smile from "../../assests/Emoji/Smile.png";
const Course = () => {
  const teachingApproaches = [
    "The faculty stimulated my interest in the subject",
    "The faculty managed classroom time and pace well",
    "The faculty was organized and prepared for every class",
    "The faculty encouraged discussions and responded to questions",
    "The faculty demonstrated in-depth knowledge of the subject",
    "The faculty appeared enthusiastic and interested in the class",
    "The faculty used a variety of instructional methods to reach the course outcome (e.g. group discussions, student presentations, etc)",
    "The faculty motivated students to do their best work",
    "The faculty actively attempt to prevent cheating in this course",
    "The faculty was accessible outsnamee of class",
    "Faculty has made you understand all COs",
    "Faculty has delivered and fulfilled requirement of CO 1 and feel that you have attained requirement of CO1",
    "Faculty has delivered and fulfilled requirement of CO 2 and feel that you have attained requirement of CO2",
    "Faculty has delivered and fulfilled requirement of CO 3 and feel that you have attained requirement of CO3",
    "Faculty has delivered and fulfilled requirement of CO 4 and feel that you have attained requirement of CO4",
    "Faculty has delivered and fulfilled requirement of CO 5 and feel that you have attained requirement of CO5",
    "Faculty has explained CO-PO mapping of your course",
    "Faculty/HoD has explained mapping of PO, PSO, PEO, Mission & Vision",
  ];
  const assesmentQuestions = [
    "Information about the assessment was clearly communicated",
    "Feedback was provnameed within the stated time frame",
    "Feedback showed how to improve my work (e .g. corrections including comments)",
  ];
  const resourceAndAdminQuestions = [
    "The course was supported by adequate library resources",
    "Black-board resources for the course were useful",
    "The faculty gave gunameance on where to find resources",
  ];
  const courseQuestions = [
    "The syllabus was explained at the beginning of the course",
    "The course was delivered as outlined in the syllabus",
    "Faculty explained the grading criteria of the course",
    "Exams related to the course learning outcomes",
    "Projects/ assignments related to the course learning outcomes",
    "Overall, how do you rate your experience in this course",
    "How many hours dname you spend per week on preparation / homework for this course?",
  ];
  const studentSelfEvaluationQuestions = [
    "I contributed constructively during in-class activities.",
    "I feel I am achieving the learning outcomes.",
  ];
  const yourCommentsQuestions = [
    "What additional activities / training have been provnameed by faculty to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?",
    "What additional activities / training you have done on your own to fulfill requirements of CO, PO, PSO, PEO, Vision, and Mission?",
    "What changes would you recommend to improve this course?",
    "What did you like best about your faculty teaching?",
    "What did you like least about your faculty’s teaching?",
    "What do you recommend for improving CO attainment?",
  ];

  return (
    <div className="w-full flex flex-col items-center h-[90%] ">
      <div className="w-[90%] flex flex-col gap-20 py-8">
        <h2 className="text-2xl font-bold">FEEDBACK OF TEACHING APPROACHES</h2>
        {teachingApproaches.map((ques, i) => {
          return (
            <>
              <Feedback
                question={ques}
                satisfation={"Extremely Likely"}
                disagreement={"Not at all Likely"}
                satisfactionEmoji={Smile}
                disagreementEmoji={Sad}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
