GlobalAnswerCounter = {
    count(forms) {
        var answers = {
            'yes': 0,
            'no': 0,
            'partially': 0,
            'total': 0
        };

        for (var i = 0; i < forms.length; i++) {
            var set = AnswerCounter.count(forms[i].form);
            
            answers.yes       = answers.yes + set.yes;
            answers.no        = answers.no + set.no;
            answers.partially = answers.partially + set.partially;
            answers.total     = answers.total + set.total;
        }

        return answers;
    }
}
