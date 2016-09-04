(function() {
    if (Chapters.find({code: 'ipsg'}).fetch().length == 0) {
        Chapters.insert({
            name: "International Patient Safety Goals",
            code: "ipsg",
            selected: false,
            data: [
                {
                    question: "Is the decision to provide medical education made at the highest level of governance and leadership of the hospital, consistent with the hospital’s mission, and documented? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital governance and leadership obtain, review, and accept the parameters of the participating medical school, and this action is documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital governance and leadership endorse a set of metrics to monitor and evaluate the ongoing operation of medical education programs, and is there documented review of the monitoring data?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the review documented and the hospital governance review, at least annually, the medical education programs within the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the review include the satisfaction of patients and staff with the clinical care provided under the program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there evidence that the clinical staffs of the hospital are in adequate number and have the education, training, and competence, to support and advance the education of medical students and trainees?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there evidence that the hospital’s patient population adequate in number and clinical needs to support the education of medical students and trainees?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there evidence that the hospital’s facilities, technology, and other resources support the education of medical students and trainees?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are clinical teaching staff identified to hospital staff, and is there a complete list of clinical teaching staff, including both professional and academic titles?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is staff educated about these individuals, their accountabilities, and their authority?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the hospital process in place to monitor academic titles and requirements for renewal or redesignation and to keep such titles up to date? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital policy identify the required level of supervision for each level of medical student and trainee?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the level to be provided based on the demonstrated competency of the medical student and trainee?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do each medical student and trainee understands the level, frequently, and documentation of his or her supervision?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital provide the required level of supervision for each medical students and trainee?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a uniform process for documenting the required supervision that is consistent with hospital policy, program goals, and the quality and safety of patient care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the hospital established uniform expectations for all staff providing supervision to ensure that the process results in uniform medical student and trainee experience?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patient care records reviewed for compliance with the documentation requirements and frequency?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the operational structure for medical education in the hospital, determined and is in operation as required?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the management structure for medical education in the hospital, determined and is in operation as required?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a complete and current list of all medical students and trainees in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there documentation of at least a) through g) of the intent for each medical student and trainee? a) enrollment status; b) academic classification; c) any required licensure or certification; d) reports of medical student and trainee achievements; e) identification of medical student and trainee competencies; f) any known factors that will require accommodation; and g) any known factors that may influence the level of supervision required.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medical students and trainees included in the data collection for the hospital’s quality monitoring programs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do those supervising medical students and trainees ensure that the medical students and trainees are knowledgeable of the programs and participate in the programs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do medical students and trainees can demonstrate knowledge of these programs? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do those supervising medical students and trainees consider compliance with these programs in their evaluation of medical student and trainee performance?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "1Does the hospital determine what types of trainees and under which circumstances trainees can be hired or otherwise engaged by the hospital to provide patient care or other service?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are trainees providing such services credentialed and privilege for the services being provided? (Also see SQE.9 and SQE.10)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are trainees providing such services evaluated for the services being provided? (Also see SQE.11)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                ]
        });
    }
})();
