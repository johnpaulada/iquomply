(function() {
    if (Chapters.find({code: 'acc'}).fetch().length == 0) {
        Chapters.insert({
            name: "Access to Care and Continuity of Care",
            code: "acc",
            data: [
                {
                    question: "Based on the results of screening, is it determined if the needs of the patient match the hospital's mission and resources?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patients accepted only if the hospital can provide the necessary services and the appropriate outpatient or inpatient setting for care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                }
            ]
        });
    }
})();
