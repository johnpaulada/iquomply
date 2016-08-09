AnswerCounter = {
    count(form) {
        var answers = {
            'yes': 0,
            'no': 0,
            'partially': 0
        };

        form.forEach(function(v1) {
            v1.data.forEach(function(v2) {
                answers[v2.accomplished.toLowerCase()] = answers[v2.accomplished.toLowerCase()] + 1;
            });
        });

        return answers;
    }
};
