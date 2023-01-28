let scale = [
    { grade: 1, points: 20},{ grade: 2, points: 35},
    { grade: 3, points: 50},
    { grade: 4, points: 65},{ grade: 5, points: 80}];

const testGrades = require("./evaluator");
testGrades.setEvaluationScale(scale);
testGrades.getGrade(81);

exports.grade = testGrades.studentGrade