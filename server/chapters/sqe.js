(function() {
    if (Chapters.find({code: 'sqe'}).fetch().length == 0) {
        Chapters.insert({
            name: "Staff Qualifications and Education",
            code: "sqe",
            data: [
                {	//Planning
                	//SQE.1 Leaders of hospital departments and services define the desired education, skills, knowledge, and other requirements of all staff members.
                    question: "Are the hospital’s mission, volume and mix of patients, services, and medical technology used in planning?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the desired education, skills, and knowledge defined for the associate?-",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are applicable laws and regulations incorporated into the planning?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                }, 
                {	//SQE.1.1 Each staff member's responsibilities are defined in a current job description.
                    question: "Does each staff member not permitted to practice independently have a job description?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are those individuals identified in a) through d), when present in the hospital, have job descriptions appropriate to their activities and responsibilities or have been privileged if noted as an alternative? (Also see AOP.3, ME 1) a) The individual serves in primarily a managerial role, such as a department manager, or in dual clinical and managerial roles, with the managerial responsibilities identified in a job description; b) The individual has some clinical responsibilities for which he or she has not been authorized to practice independently, such as an independent practitioner learning a new role or new skills c) The individual is in an educational program and under supervision, and the academic program identifies, for each stage or level of training, what can be done independently and what must be under supervision. The program description can serve as the job description in such cases; and d) The individual is permitted to temporarily provide services in the hospital: for example , a nurse from a temporary staffing agency.",
					selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },  
                {
                    question: "Are job descriptions current according to hospital policy?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.2 Leaders of hospital departments and services develop and implement processes for recruiting, evaluating, and appointing staff as well as other related procedures identified by the hospital.
                    question: "Does the hospital establish and implement a process to recruit staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process to evaluate the qualifications of new staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process to appoint individuals to the staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process that is uniform across the hospital for similar types of staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.3 The hospital uses a defined process to ensure that clinical staff knowledge and skills are consistent with patient needs.
                    question: "Does the hospital use a defined process to match clinical staff knowledge, skills, and competency with patient needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are new clinical staff members evaluated at the time they begin their work responsibilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the department or service to which the individual assigned conducts the evaluation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital define the frequency of ongoing clinical staff evaluation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there at least one document evaluation of each clinical staff member working under a job description each year or more frequently as define by the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.4 The hospital uses a defined process to ensure that nonclinical staff knowledge and skills are consistent with hospital needs and the requirements of the position. 
                    question: "Does the hospital use a defined process to match nonclinical staff knowledge and skills with the requirements of the position?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the new nonclinical staff evaluated at the time they begin their work responsibilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the department or service to which the individual assigned conducts the evaluation? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital define the frequency of ongoing nonclinical staff evaluation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there at least one documented evaluation of nonclinical staff members each year or more frequently as defined by the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.5 There is documented personnel information for each staff member. 
                    question: "Are personnel files for each staff member standardized and current and maintained according to hospital policy?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do personnel files contain the qualifications of the staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do personnel files contain the job description of the staff member when applicable? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do personnel files contain the work history of the staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do personnel files contain the results of evaluations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do personnel files contain a record of in-service education attended by the staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.6 A staffing strategy for the hospital, developed by the leaders of hospital departments and services, identifies the number, types and desired qualifications of staff. 
                    question: "Do the hospital’s department/ service leaders develop a written strategy for staffing the hospital in a manner that complies with local laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "qualifications of staff identified in the strategy using a recognized staffing method?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the strategy address the assignment and reassignment of staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.6.1 The staffing strategy is reviewed on an ongoing basis and updated as necessary.
                    question: "Is the effectiveness of the staffing strategy monitored on an ongoing basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the strategy revised and updated when necessary?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the strategy coordinated through a process that involves the department/ service leaders?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.7 All clinical and nonclinical staff members are oriented to the hospital, the department or unit to which they are assigned, and to their specific job responsibilities at appointment to the staff.
                    question: "Are new clinical and nonclinical staff members oriented to the hospital, to the department or unit to which they are assigned, and to their job responsibilities and any specific assignments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are contract workers oriented to the hospital, to the department or unit to which they are assigned, and to their job responsibilities and any specific assignments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are volunteers oriented to the hospital and assigned responsibilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.8 Each staff member receives ongoing in-service and other education and training to maintain or to advance his or her skills and knowledge.
                    question: "Does the hospital use various sources of data and information, including the results of quality and safety measurement activities, to identify staff education needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are education programs planned based on these data and information?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are hospital staff provided ongoing in-service education and training?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the education relevant to each staff member’s ability to meet patient needs and/or continuing education requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital provide adequate time and facilities for all staff to participate in relevant education and training opportunities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.8.1 Staff members who provide patient care and other staff identified by the organization are trained and can demonstrate appropriate competence in resuscitative techniques.
                    question: "Are staff members who provide patient care and other staff identified by the hospital to be trained in cardiac life support identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the appropriate level of training provided with sufficient frequency to meet staff needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there evidence to show if a staff member passed the training?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the desired level of training for each individual repeated based on the requirements and/or time frames established by a recognized training program, or every two years if a recognized training program is not used? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.8.2 The hospital provides a staff health and safety program.
                    question: "Does the hospital provide, and incorporate into the hospital quality and safety program, a staff health and safety program that responsive to urgent and non urgent staff needs through direct treatment and referral?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify epidemiologically significant infections, as well as staff that is at high risk for exposure to and transmission of infections, and implements a staff vaccination and immunization program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital provide evaluation, counselling, and follow-up of staff exposed to infectious diseases that coordinated with the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify areas for potential workplace violence and implements measures to reduce the risk?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital provide evaluation, counseling, and follow-up treatment of staff who are injured as a result of workplace violence?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Determining Medical staff Membership
                	//SQE.9 The hospital has a uniform process for gathering the credentials of those medical staff members permitted to provide patient care without supervision.
                    question: "Does the hospital have an ongoing, uniform process to manage the credentials of medical staff members?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medical staff members permitted by laws, regulations, and the hospital to provide patient care without supervision identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are education, licensure/ registration, and other credentials required by law or regulation copied by the hospital and maintained for each medical staff member in their personnel files or in a separate credential file?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all credentials required by the hospital policy copied by the hospital and maintained for each medical staff member in his or her personnel file or in a separate credential file?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//sQE.9.1 Medical staff members’ education, licensure/registration, and other credentials required by law or regulation and the hospital are verified and kept current.
                    question: "Are education, licensure/ registration, and other credentials required by law or regulation or issued by recognized education or professional entries as the basis for clinical privileges verified from the original source that issued the credential?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are additional credentials required by the hospital policy verified from the source that issued the credential when required by hospital policy?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When third-party verification is used, does the hospital verify that the third party (for example, a government agency) implements the verification process as described in policy or regulations and that the process meets that expectation described in the intent?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.9.2 There is a uniform, transparent decision process for the initial appointment of medical staff members.
                    question: "Are medical staff appointments made according to hospital policy and consistent with the hospital’s patient population, mission and services provided to meet patient needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are appointments not made until at least licensure/ registration has been verified form the primary source, and the medial staff member then provides patient care services under supervision until all credentials required by laws and regulations have been verified from the original source?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the method of supervision, frequency of supervision, and accountable supervisors documented in the credential file of the individual?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//The Assignment of Medical Staff Clinical Privileges
                	//SQE.10 The hospital has a standardized objective, evidence-based procedure to authorize medical staff members to admit and to treat patients and/or to provide other clinical services consistent with their qualifications. 
                    question: "Does the privilege delineation process used by the hospital meet criteria a) through e) a) is standardized, objective, and evidence-based; b) is documented in hospital policies; c) is active and ongoing as the credentials of medical staff members change; d) is followed for all classes of medical staff membership; and e) can be demonstrated as to how the procedure is used effectively.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the clinical privileges of all medical staff members made available by printed copy, electronic copy,  or other means to those individuals or locations ( for example, operating room , emergency department) in the hospital in which the medical staff member will provide services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does each medical staff member provide only those services that have been specifically granted by the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Ongoing Monitoring and Evaluation of Medical Staff Members
                	//SQE.11 The hospital uses an ongoing standardized process to evaluate the quality and safety of the patient care provided by each medical staff member.
                    question: "Are all medical staff members included in an ongoing professional practice monitoring and evaluation process as defined by the hospital policy and standardized at the department/ service level?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the monitoring and evaluation process identify areas of achievement and potential improvement related to the behaviors, professional growth, and clinical results of the medical staff member compared to other department/ service medical staff members?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the clinical results of data and information available on medical staff members reviewed with objective and evidence-based information, as available, for external benchmarking?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the data and information from the monitoring reviewed at least every 12 months by the individual’s department or service head, senior medical manager, or medical staff body, and the results, conclusions, and any actions taken are documented in the medical staff member’s credentials file and other relevant files?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When the findings affect the appointment or privileges of the medical staff member, Is there a process to take action on the findings, and such “for cause” actions documented in the practitioner’s file and reflected in the list of clinical privileges? Is notification sent to those sites in which the practitioner provides services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Medical Staff Reappointment and Renewal of Clinical Privileges
                	//SQE.12 At least every three years, the hospital determines, from the ongoing monitoring and evaluation of each medical staff member, if medical staff membership and clinical privileges are to continue with or without modification.
                    question: "Based on the ongoing monitoring and evaluation of the medical staff member, does the hospital determine, at least every three years, if medical staff membership and clinical privileges are to continue with or without modification?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there evidence in the file of each medical staff member that all credentials that require periodic renewal, payment of a registration fee, or other action by the medical staff member are current?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are credentials obtained subsequent to initial appointment evident in the file of the medical staff member and have been verified from the primary source prior to use in modifying or adding to clinical privileges?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the renewal decision documented in the medical staff member’s credential file and includes the identification of the reviewer and any special conditions identified during review?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Nursing Staff
                	//SQE.13 The hospital has a uniform process to gather, to verify, and to evaluate the nursing staff’s credentials (license, education, training, and experience).
                    question: "Does the hospital have a standardized procedure to gather the credentials of each nursing staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are licensure, education/ training, and, when available, experience, documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are licensure and education/ training verified from the original source according to the parameters found in the intent of SQE.9?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a record maintain of the credentials of every nursing staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a process to ensure that the credentials of contract nurses valid and complete prior to assignment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: ". Does the hospital have a process to ensure that nurses who are not employees of the hospital, but accompany private physicians and provide services to the hospital’s patients, have valid credentials.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.14 The hospital has a standardized process to identify job responsibilities and to make clinical work assignments based on the nursing staff member’s credentials and any regulatory requirements.
                    question: "Are licensure, education/ training, and experience of nursing staff members used to make clinical work assignments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the process take into account relevant laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the process support nurse staffing plans?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.14.1 The hospital has a standardized process for nursing staff participation in the hospital’s quality improvement activities, including evaluating individual performance when indicated?
                    question: "Do nursing staff participate in the hospital’s quality improvement activities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the performance of individual nursing staff members reviewed when indicated by the findings of quality improvement activities? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is appropriate information from the review process documented in the nurse’s credentials or other file?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Other Health Care Practitioners
                	//SQE.15 The hospital has a uniform process to gather, to verify, and to evaluate other health professional staff members’ credentials (license, education, training, and experience).
                    question: "Does the hospital have a standardized process to gather the credentials of each health professional staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are licensure, education/ training, and, when available, experience, documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are licensure and education/ training verified from the original source according to the parameters found in the intent?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a record maintained on other health professional staff members that contains copies of any required license, certification, or registration?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a process to ensure that other staff who are not employees of the hospital but accompany private physicians and provide services to the hospital’s patients have valid credentials that are comparable to the hospital’s requirements for credentials?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.16 The hospital has a uniform process to identify job responsibilities and to make clinical work assignments based on other health professional staff members’ credentials and any regulatory requirements. 
                    question: "Are licensure, education, training, and experience of other health professional staff members used to made clinical work assignments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the process take into account relevant laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the process support the staffing process for other health professionals?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//SQE.16.1 The hospital has a uniform process for other health professional staff member’s participation in the hospital’s quality improvement activities?
                    question: "Does other health professional staff participate in the hospital’s quality improvement activities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the performance of other health professional staff members reviewed when indicated by the findings of quality improvement activities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is appropriate information from the review process documented in the health professional’s file?",
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
