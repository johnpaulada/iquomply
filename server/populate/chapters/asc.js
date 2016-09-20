(function() {
    if (Chapters.find({code: 'asc'}).fetch().length == 0) {
        Chapters.insert({
            name: "Anesthesia and Surgery Care",
            code: "asc",
            selected: false,
            data: [
                {
                    question: "Do sedation and anesthesia services meet professional standards and applicable local and national standards, laws, and regulations?  ",
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
                },
                {
                    question: "Are sedation and anesthesia services available for emergencies after normal hours of operation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are outside sedation and anesthesia sources selected based on the recommendation of the leader of sedation and anesthesia services, acceptable records of performance, and compliance with applicable laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a contract for outside sedation and anesthesia services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are sedation and anesthesia services uniform throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are sedation and anesthesia services under the direction of one or more qualified individuals?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are responsibilities for recommending outside sources of sedation and anesthesia services defined and carried out?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are responsibilities for monitoring and reviewing all sedation and anesthesia services defined and carried out?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the administration of procedural sedation standardized throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: ". Does standardization of procedural sedation include identifying and addressing at least a) through e) in the intent? (also see PFR.5.2) a) areas in the hospital where procedural sedation occur; b) special qualifications or skills of staff involved in the procedural sedation process; c) the differences between pediatric, adult, and geriatric populations or other special considerations; d) availability and use of specialized medical technology; and e) obtaining informed consent for both the procedure and sedation",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are emergency medical technology and supplies readily available and customized to the type of sedation being performed and the age and medical condition of the patient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is an individual with advanced life-support training must be immediately available when procedural sedation is being performed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are health care practitioners responsible for providing procedural sedation competent in at least a) through d) of the intent? a) techniques and various mode of sedation; b) pharmacology of sedation drugs and the use of reversal agents; c) monitoring requirements; and	 d) response to complications (Also see SQE.10) ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the individual responsible for patient monitoring during procedural sedation competent in at least elements e) through h) in the intent? e) monitoring requirements;  f) response to complications; g) use of reversal agents; and  h) recovery criteria (Also see SQE.3)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are procedural sedation competencies for all staff involved in sedation documented in the personnel files?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a pre-sedation assessment performed and documented that include at least a) through e) to evaluate risk and appropriateness of procedural sedation for the patient? (Also see AOP.1, MEs 1 and 2) a)	Identify any airway problems that may influence the type of sedation used; b)	Evaluate at risk –patients for appropriateness of procedural sedation; c)	Plan the type of sedation and the level of sedation the patient will need based on the procedure being performed; d)	Safely administer sedation; and e)	 Interpret findings from patient monitoring during procedural sedation and recovery. ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does a qualified individual monitor the patient during the period of sedation and document the monitoring?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are established criteria used and documented for the recovery and discharge from procedural sedation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the patient, family, and/or decision makers educated on the risks, benefits, and alternative of procedural sedation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the patient, family, and/or decision makers educated about post-procedure analgesia?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does a qualified individual provide the education?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is a pre-anesthesia assessment performed for each patient? (Also see AOP.1, MEs 1 and 2)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is a separate pre-induction assessment performed to re-evaluate patients immediately before the induction of anesthesia?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the two assessment performed by an individual(s) qualified to do so and documented in the patient record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the anesthesia care of each patient planned and documented in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the anesthesia agent, dose (when applicable), and anesthesia technique documented in the patient’s anesthesia record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the anesthesiologist and/or the nurse anesthetist and anesthesia assistants identified in the patient’s anesthesia record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the frequency and type of monitoring during anesthesia and surgery based on the patient’s pre-anesthesia status, the anesthesia used, and the surgical procedure performed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the monitoring of the patient’s physiological status consistent with professional practice?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results of the monitoring documented in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patients monitored during the postanesthesia recovery period?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring finding documented in the patient’s clinical record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patient’s discharged from the postqanesthesia unit (or recovery monitoring is discontinued) in accordance with the alternatives described in a) through c) in the intent? a)	The patient is discharged (or recovery monitoring is discontinued) by a fully qualified anesthesiologist o other individual authorized by the individual(s) responsible for managing the anesthesia services. b)	The patient is discharged (or recovering monitoring is discontinued) by a nurse or similarly qualified individual in accordance with postanesthesia criteria developed by hospital leadership, and the patient’s record contains evidence that criteria are met. c)	The patient is discharged to a unit that is capable of providing postanesthesia or postsedation care of selected patients, such as a cardiovascular intensive care unit or neurosurgical intensive care unit, among others.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is time recovery started and time recovery phase complete are recorded in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the assessment information used to develop and to support the planned invasive procedure documented in the patient’s record by the responsible physician before the procedure is performed? (Also see AOP.5.4, ME 3; and AOP.6.4, ME 3)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is each patient’s surgical care planned  based on the assessment information",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are pre-operative diagnosis and the planned procedure documented in the patient’s record by the responsible physician prior to the procedure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the patient, family, and decision makers educated on the risks, benefits, potential complications, and alternative related to the planned surgical procedure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the education include the need for, risk and benefits of, and alternative to blood and blood-product use?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the patient’s surgeon or other qualified individuals provide and document the education?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do surgical reports, templates, or operative progress notes include at least a) through h) from the intent?a) postoperative diagnosis; b) name of operative surgeon and assistants; c) procedures performed and description of each procedure findings; d) perioperative complications; e) surgical specimens sent for examination f) amount of blood loss and amount of transfused blood; g) registry number of all implantable devices; and h) date, time and signature of responsible physician.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify information that may routinely be recorded in other specific areas of the record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the surgical report, template, or operative profess note available immediately after surgery before the patient is transferred to the next level of care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the postsurgical care provided by medical, nursing, and others meet the patient’s immediate postsurgical needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the continuing postsurgical plan(s) documented in the patient’s record within 24 hours by the responsible surgeon or verified by a co-signature from the responsible surgeon on the documented plan entered by the surgeon’s delegate?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the continuing of postsurgical plan of care include medical, nursing, and other as needed based on the patient’s needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When indicated by a change in the patient’s needs, is the postsurgical plan of care updated or revised based on the reassessment of the patient by the health care practitioners?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital’s surgical service define the type of implantable device that are included within its scope of services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do policies and practices include a) through g) in the intent? a) selection of device base on available science and research; b) modifications to the surgical checklist to ensure that implants are present in the operating theatre and special considerations in marking the surgical site; c)the qualifications and training of any outside technical staff required during the implant procedure; d) an understanding of and reporting process for device-related adverse events; e) unique infection control considerations; f) any special discharge instructions to the patient; and g) the traceability of devices in the event of a recall ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medical device implants included in the department’s monitoring priorities?",
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
