UsernameGenerator = {
    /**
     * Generates a username from the user's name and birthdate.
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} birthdate
     *
     * @returns {string} the generated username.
     */
    generate(firstName, lastName, birthdate) {
        var dateArray = birthdate.split('-');

        firstName = Acronymizer.acronymize(firstName);
        lastName  = Acronymizer.acronymize(lastName);

        return firstName + lastName + dateArray[1] + dateArray[2] + dateArray[0].substring(2, 4);
    }
}
