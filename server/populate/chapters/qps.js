(function() {
    if (Chapters.find({code: 'qps'}).fetch().length == 0) {
        Chapters.insert({
            name: "Quality Improvement and Patient Safety",
            code: "qps",
            selected: false,
            data: [
                {   //Management of Quality and Patient Safety Activities
                    //QPS.1 A qualified individual guides the implementation of the hospital’s program for quality improvement and patient safety and manages the activities needed to carry out an effective program of continuous quality improvement and patient safety within the hospital.
                    question: "Is an individual(s) who is experienced in the methods and processes of improvement selected to guide the implementation of the hospital’s quality and patient safety program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the individual(s) with oversight for the quality program selects and supports qualified staff for the program and supports those staff with quality and patient safety responsibilities throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the quality programs provide support and coordination to department/service leaders for like measures across the hospital and for the hospital’s priorities for improvement?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the quality program implement a training program for all staff that is consistent with staff’s roles in the quality improvement and patient safety program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the quality program responsible for the regular communication of quality issues to all staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //Measure Selection and Data Collection
                    //QPS.2 Quality and patient safety program staff support the measure selection process throughout the hospital and provide coordination and integration of measurement activities throughout the hospital.
                    question: "Does quality and patient safety program support the selection of measures throughout the hospital at the hospitalwide level and at the hospital department or service level?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does quality and patient safety program provide coordination and integration of measurement activities throughout the hospital?     ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does quality and patient safety program provide for the integration of event reporting systems, safety culture measures, and others to facilitate integrated solutions and improvements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does quality and patient safety program track the progress on the planned collection of measure data for the priorities selected?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.3 The quality and patient safety program uses current scientific and other information to support patient care, health professional education, clinical research, and management.
                    question: "Does current scientific and other information support patient care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does current scientific and other information support s clinical education?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does current scientific and other information support research?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does current professional and other information supports management?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is information provided in a time frame that meets user expectations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //Analysis and Validation of Measurement Data
                    //QPS.4 The quality and patient safety program includes the aggregation and analysis of data to support patient care, hospital management, and the quality management program and participation in external databases.
                    question: "Has the quality and patient safety program a process to aggregate data?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do aggregate data and information support patient care, hospital management, professional practice review, and the overall quality and patient safety program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are aggregate data and information provided to agencies outside the hospital when required by laws or regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a process to contribute to and learn from external database for comparison purposes? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are security and confidentiality maintained when contributing to or using external database?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.4.1 Individuals with appropriate experience, knowledge, and skills systematically aggregate and analyze data in the hospital.
                    question: "Are data aggregated, analyzed, and transformed into useful information to identify opportunities for improvement?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do individuals with appropriate clinical or managerial experience, knowledge, and skills, participate in the process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are statistical tools and techniques used in the analysis process when suitable?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the frequency of data analysis appropriate to the process or outcome being studied?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results of analysis reported to those accountable for taking action? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do data analysis support comparison internally over time, including comparisons with database of like organizations, with best practices, and objective scientific professional sources?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.5 The data analysis process includes at least one determination per year of the impact of hospitalwide priority improvements on cost and efficiency.
                    question: "Are data on the amount and type of resource use collected on at least one hospitalwide priority improvement project per year before and following the improvement?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the quality and patient safety program staff work with other units such as human resources, information technology, and finance in deciding which data are to be collected?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results and analysis used to refine the process and are reported through the quality coordination mechanism to leadership?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.6 The hospital uses an internal process to validate data.
                    question: "Is data validation use by the quality program as a component of the improvement process selected by leadership?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are data validated when any of the conditions noted in a) through f) in the intent are met? a) a new measure is implemented (in particular, those clinical measures that are intended to help a hospital evaluate and improve an important clinical process or outcome); b)	data will be made public on hospital’s website or in other ways; c)	a change has been made to an existing measure, such as data collection tools have changed or the data abstraction process or abstractor has changed; d)	the data resulting from an existing measures have changed in an unexplainable way; e)	the data source has changed, such as when part of the patient record has been turned into an electronic format thus the data source is now both electronic and paper; or f)	the subject of data collection has changed, such as changes in average age of patients, comorbidities, research protocol alteration, new practice guidelines implemented, or new technologies and treatment methodologies introduced.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is an established methodology for data validation used?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does Hospital leadership assume accountability for the validity of the quality and outcome data made public?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.7 The hospital uses a defined process for identifying and managing sentinel events.
                    question: "Has the Hospital leadership established a definition of a sentinel event that at least includes a) through f) found in the intent? a) all confirmed transfusion reactions, if applicable to the hospital.; b)	all serious adverse drug events, if applicable and as defined by the hospital; c)	all significant medication errors, if applicable and as defined by the hospital; d)	all major discrepancies between preoperative and postoperative diagnoses; e)	adverse event or patterns of adverse events during moderate or deep sedation and anesthesia use; f)	other adverse events,; for example health care-associated infections and infectious disease outbreaks.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the Hospital complete a root cause analysis of all sentinel events in a time period specified by hospital leadership that does not exceed 45 days from the date of the event or when made aware of the event?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership take action on the results of the root cause analysis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.8 Data are always analyzed when undesirable trends and variation are evident from the data.
                    question: "Does intense analysis of data take place when adverse levels, patterns, or trends occur?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all confirmed transfusion reactions, if applicable to the hospital, analyzed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all serious adverse drug events, if applicable and as defined by the hospital analyzed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all significant medication errors, if applicable and as defined by the hospital analyzed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all major discrepancies between preoperative and postoperative diagnoses analyzed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are adverse events or patterns of adverse events during moderate or deep sedation and anesthesia use analyzed? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are other adverse events defined by the hospital analyzed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS.9 The organization uses a defined process for the identification and analysis of near-miss events.
                    question: "Does the hospital establish a definition of a near miss?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital define the type of events to be reported?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish the process for the reporting of near misses?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the data analyzed and actions taken to reduce near-miss events?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //Gaining and Sustaining Improvement
                    //QPS.10 Improvement in quality and safety is achieved and sustained.
                    question: "Are the improvements in quality and patient safety planned, tested, and implemented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are data available to demonstrate that improvements are effective and sustained? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the policy change necessary to plan, to carry out, and to sustain the improvement are made?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are successful improvements documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //QPS. 11 An ongoing program of risk management is used to identify and to proactively reduce unanticipated adverse events and other safety risks to patients and staff.
                    question: "Does the hospital risk management framework include a) through f) in the intent?       a) risk identification;       b) risk prioritization;       c) risk reporting;       d) risk management;       e) investigation of adverse events; and       f) management of related claims.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "At least annually, is a proactive risk-reduction exercise conducted on one of the priority risk processes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are high-risk processes redesigned based on the analysis of the test results?",
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
