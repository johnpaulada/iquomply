(function() {
    if (Chapters.find().fetch().length == 0) {
        Chapters.insert({
            name: "Anesthesia and Surgery Care",
            code: "asc",
            data: [
                {
                    question: "Do sedation and anesthesia services meet professional standards and applicable local and national standards, laws, and regulations?",
                    accomplished: "NO",
                    evidence: "",
                    action: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are sedation and anesthesia services available to meet patient needs?",
                    accomplished: "NO",
                    evidence: "",
                    action: "",
                    completionDate: new Date(),
                    personResponsible: ""
                }
            ]
        });
    }
})();
