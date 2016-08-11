(function() {
    if (Chapters.find({code: 'asc'}).fetch().length == 0) {
        Chapters.insert({
            name: "Anesthesia and Surgery Care",
            code: "asc",
            data: [
                {
                    question: "Do sedation and anesthesia services meet professional standards and applicable local and national standards, laws, and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are sedation and anesthesia services available to meet patient needs?",
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
