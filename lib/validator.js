Validator = {
    validateContactNumber(contactNumber) {
         var contactPattern = /^(\+63|0)9[0-9]{9}$/;

         return contactPattern.test(contactNumber);
    },
    validateBirthdate(birthdate) {
        var birthdatePattern = /^[0-9]{4}\-[0-1][0-9]\-[0-3][0-9]$/;

        return birthdatePattern.test(birthdate);
    }
};
