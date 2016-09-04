(function() {
    if (Chapters.find({code: 'pfe'}).fetch().length == 0) {
        Chapters.insert({
            name: "Patient and Family Education",
            code: "pfe",
            data: [
		{
                    question: "Does the hospital plan education that is consistent with its mission, services, and patient population? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is there an established structure or mechanism for education throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are education structure and resources organized in an effective manner?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are educational needs of the patient and family assessed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are educational needs assessment findings recorded in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is there uniform recording of patient education by all staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are the patient’s literacy, including health care literacy, educational level, and language assessed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are the patient’s emotional barriers and motivations assessed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are the patient’s physical and cognitive limitations assessed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are the assessment findings used to plan the education? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is there a process to verify that patients and families receive and understand the education provided?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do those who provide education encourage patients and their families to ask questions and to speak up as active participants?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is verbal information reinforced with written material that is related to the patient’s needs and consistent with the patient’s and family’s learning preferences?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "When indicated, is patient and family education provided collaboratively",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do those who provide education have the subject knowledge to do so?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do those who provide education have adequate time to do so?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do those who provide education have the communication skills to do so?",
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
