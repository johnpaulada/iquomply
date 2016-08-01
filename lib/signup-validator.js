SignupValidator = {
    getErrors(input) {
        var errors = [];

        if (!Validator.validateContactNumber(input.contact)) {
            errors.push("Please check your contact number.");
        }

        if (!Validator.validateBirthdate(input.birthdate)) {
            errors.push("Please check your birthdate.");
        }

        return errors;
    }
}
