Acronymizer = {
    /**
     * Turns a bunch of words into an acronym.
     *
     * @param   {string} the string to be acronymized
     * @returns {string} the acronym
     */
    acronymize(words) {
        return words.trim().split(' ').reduce(function(previousValue, currentValue) {
            return previousValue + currentValue.substring(0, 1).toUpperCase();
        }, '')
    }
};
