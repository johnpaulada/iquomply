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
    generate(firstName, middleName, lastName, birthdate) {
        var dateArray = birthdate.split('-');

        firstName   = Acronymizer.acronymize(firstName);
        middleName  = Acronymizer.acronymize(middleName);
        lastName    = Acronymizer.acronymize(lastName);

        return firstName + middleName + lastName + dateArray[1] + dateArray[2] + dateArray[0].substring(2, 4);
    }
}
