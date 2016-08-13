ComplianceVerbalProgressGenerator = {
    generate(percentage) {
        if (percentage <= 0) {
            return 'Not complying.'
        } else if (percentage >= 100) {
            return 'Perfect compliance.'
        } else if (percentage >= 75) {
            return 'Greatly complying.'
        } else if (percentage >= 50) {
            return 'Moderately complying.'
        } else if (percentage >= 25) {
            return 'Slightly complying.'
        }

        return percentage;
    }
}
