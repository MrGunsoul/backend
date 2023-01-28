let aScale = [];

exports.setEvaluationScale = (scale) =>  {
    aScale = scale;
};

exports.getGrade = (points) => {
    if (aScale.length == 0) {console.log("There is no evaluation scale defined")}

    else {
        const aGrade = (aScale.filter(e => e.points <= points).slice(-1).map(a => a.grade));

        if (aGrade.length == 0) {console.log ("Grade 0")}

        else {
            exports.studentGrade = (aGrade.join(''));
        } 
    }

}

