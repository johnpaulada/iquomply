AnswerCounter = {
    count(form) {
        var answers = {
            'yes': 0,
            'no': 0,
            'partially': 0,
            'total': 0
        };

        form.forEach(function(v1) {
            v1.data.forEach(function(v2) {
                if (v2.selected) {
                    answers[v2.accomplished.toLowerCase()] = answers[v2.accomplished.toLowerCase()] + 1;
                    answers.total = answers.total + 1;
                }
            });
        });

        return answers;
    }
};
