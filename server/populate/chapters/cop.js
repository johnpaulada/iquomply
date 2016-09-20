(function() {
    if (Chapters.find({code: 'cop'}).fetch().length == 0) {
        Chapters.insert({
            name: "Care of Patients",
            code: "cop",
            selected: false,
            data: [
                {
                    question: "Do the hospital’s department/ service leaders collaborate to provide uniform care processes? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the provision of uniform care reflect local and regional laws and regulations? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: ". Is uniform care provided that meets requirements the following requirements a) through e) in the intent? a) Access to and appropriateness of care and treatment do not depend on the patient’s ability to pay or the source of payment. b) Access to appropriate care and treatment by qualified practitioners does not depend on the day of the week or time of day c) Acuity of the patient’s condition determines the resources allocated to meet the patient’s needs. d) The level of care provided to patients (for example, anesthesia care) is the same throughout the organization. e) Patients with the same nursing care needs receive comparable levels of nursing care throughout the organization.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is care planning integrated and coordinated among settings, departments and services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is care delivery integrated and coordinated among settings, departments and services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results or conclusion of any patient care team meetings or other collaborative discussions written in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the care for each patient planned by the responsible physician, nurse, and other health professionals within 24 hours of admission as an inpatient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the planned care individualized and based on the patient’s initial assessment data and identified needs? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the plan of care updated or revised and reviewed by the multidisciplinary team based on the reassessment of the patient by the health care practitioners?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the initial plan of care and any revisions to the plan of care documented in the patient’s record? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the care planned for each patient reviewed when initially developed and when revised based on changes in the patient’s condition by the multidisciplinary team and documented in the patient’s record? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the planned care provided for each patient and documented in the patient’s record by the health professional providing the care. (Also see COP.2.3; ASC.3; ASC.5; and MOI.10.1, ME 4)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a uniform process for prescribing patient orders?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do diagnostic imaging and clinical laboratory test orders include a clinical indication/rationale when required for interpretation? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do orders are prescribed only by those qualified to do so?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are orders found in a uniform location in patient records?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are procedures and treatment performed documented in the patient’s record? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the person requesting, and the reason for requesting, the procedure and treatment documented in the patient’s record?  ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results of procedures performed documented into the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does Hospital leadership have identified the high-risk patients and services?  ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When high-risk services are provided by the hospital, does leadership establish and implement guidelines and procedures for those services and for the care of high-risk patients for at least a) through i) of the intent? a) emergency patients; b) comatose patients; c) patients of life supports; d) care of patients with a communicable disease; e) care of immunosuppresed patients; f) care of patients receiving dialysis; g) care of patients in restraints; h) care of patients receiving chemotherapy; and i) care of vulnerable patient populations, including frail. Elderly, dependent children and patients at risk of abuse and/or neglect.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does staff have been trained and used the guidelines and procedures for care? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership identify additional risks that may affect high-risk patients and services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is evaluation of the high-risk services included in the hospital’s quality improvement program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a systematic process for staff recognition of and response to a patient whose condition appears to be worsening? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital develop and implement documented criteria, describing early warning signs of a change or deterioration in a patient’s condition and when to seek further assistance?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Based on the hospital’s early warning criteria, does staff seek additional assistance when they have concerns about a patient’s condition?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital inform the patient and family how to seek additional assistance when they have concern about a patient’s condition?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are resuscitation services available and provided to all patients 24 hours a day, every day, throughout all areas of the hospital? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medical technology for resuscitation and medications for basic and advance life support standardized and available for use based on the needs of the population served? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In all areas of the hospital, is basic life support implemented immediately upon recognition of cardiac or respiratory arrest, and is advanced life support implemented in fewer than 5 minutes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does an individual with education, knowledge, and expertise oversee the administration of blood and blood products (Also see AOP.5.11, ME1)?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are clinical guidelines and procedures established and implemented for the handling, use and administration of blood and blood products (Also see AOP.5.11, ME 2)? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do clinical guidelines and procedures address the process for a) through e) in the intent? a) procurement of blood from the blood bank or blood storage area; b) patient identification; c) blood administration; d) monitoring of the patient; and e) identification and response to signs of potential transfusion reactions.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is variety of food choices or nutrition, consistent with the patient’s condition, care, and needs, regularly available?  ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Prior to feeding patients, do all inpatients have orders for food in their records?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the order based on the patient’s nutritional status and needs? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the distribution of food timely, and special requests are met? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When families provide food, are they educated about the patients’ diet limitations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do patients assessed at nutrition risk receive nutrition therapy?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is a collaborative process used to plan, to deliver, and to monitor nutrition therapy? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the patient’s response to nutrition therapy monitored and documented in the patient record? (Also see AOP.2, ME 1)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Based on the scope of services provided, does hospital have process to identify patients in pain? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When pain is an expected result of planned treatments, procedures, or examinations, are patients informed about the likelihood of pain and options for pain management? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do patient in pain receive care according to pain management guidelines and according to patient goals for pain management?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Based on the scope of services provided, does the hospital have process to communicate with and to educate families about pain?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Based on the scope of services provided, does the hospital have process to educate staff about pain?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff educated about the unique needs of patients and their families at the end of life?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does end-of-life care provided by the hospital address dying patients’ needs, at least including evaluation of elements a) through e) in the intent? a) providing appropriate treatment for any symptoms according to the wishes of the patient and family; b) sensitively addressing such issues as autopsy and organ donation; c) respecting the patient’s values, religion, and cultural preferences; d) involving the patient and family in all aspects of care; and e) responding to the psychological, emotional, spiritual, and cultural concerns of the patient and family",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the quality of the end-of-life care evaluated by family and staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are interventions taken to manage pain and primary or secondary symptoms?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are symptoms and complications prevented to the extent reasonably possible? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do interventions address patient and family psychosocial, emotional, and spiritual needs regarding dying and grieving? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do interventions address patient and family religious and cultural concerns? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the patient and family involved in care decisions? (Also see PFR.)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are trained staff available to provide safe, high-quality care to the organ/tissue transplant program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital’s leadership allocate resources for the organ/tissue transplant program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are information management systems used to support the quality of the organ/tissue transplant program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does one or more individual oversee the organ/ tissue transplant program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the individual(s) qualified for the program’s scope and complexity?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the individual(s) fulfill the program’s oversight responsibilities as defined by the transplant program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document the composition of the tissue/organ specific transplant team?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document the team members’ responsibilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Based on the services provided by the transplant team, does the team include individuals experienced in medicine, nursing, nutrition, pharmacology, social service, physiological services, and transplant coordination?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program evaluate team members for qualifications, training and experience at the time each individual is being considered for the transplant team?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the individual responsible for the coordination of the live donor’s and transplant recipient’s care identified and available through all phases of transplant care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the clinical transplant coordinator facilitate continuity of care for transplant patients (candidates and recipients) through the pre-transplant, transplant, and discharge phases of transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the clinical transplant coordinator facilitate continuity of care for living donors during evaluation, donation and discharge phases of donation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the coordination of organ/transplant activities communicated to all staff involved in the transplant program activities?  ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document organ-specific candidate selection criteria?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are results of medical evaluation included in the determination of suitability for transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document organ compatibility confirmation in the transplant candidate’s medical record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program follow the hospital’s policy when obtaining informed consent from transplant candidates? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the informed consent process, does the transplant program inform the prospective transplant candidate of potential psychosocial risks?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: ". In addition to the information provided to any surgical patient as part of the informed consent process, does the transplant program inform the prospective transplant candidate of organ donor risk factors that could affect the success of the graft or the candidate’s health as a recipient, including but not limited to, a) through d) of the intent? a) the donor’s history; b) condition of the organ(s) used; c) age of the organ(s); and d) the potential risk of contracting infectious disease(s) if disease(s) cannot be detected in an infected donor",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the informed consent process, does the transplant program inform the prospective transplant candidate of the transplant center’s observed and expected one-year survival rate?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the informed consent process, does the transplant program inform the prospective transplant candidate about immunosuppressive drugs and potential associated costs? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the informed consent process, does the transplant program inform the prospective transplant candidate of alternative treatments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant team follow written organ recover protocols, which include reviewing the donor data, recipient blood type, and other vital data to ensure compatibility before organ recovery takes place?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the transplant surgeon responsible for confirming, in writing, the medical suitability of donor organs for transplantation into the recipient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When an organ arrives at the transplant center, do the transplanting surgeon and at least one other licensed health care professional at the transplant center verify that the donor’s blood type and other vital data are compatible with the recipient prior to transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the transplant surgeon responsible for confirming that donor evaluation and donor testing for infectious diseases and malignancy have been completed before organ recovery and organ transplant occur?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When an organ arrives at the transplant center, do the transplanting surgeon and at least one other licensed health care professional at the transplant center verify that evaluation and testing of the donor organ shows no evidence of disease and the condition of the organ is suitable for transplant?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the transplant program documented organ-specific clinical practice guidelines for the pre-transplant, transplant, and discharge phases of transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is each transplant patient under the care of a multidisciplinary patient care team coordinated by the patient’s primary transplant physician throughout the pre-transplant, transplant, and discharge phases of transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are transplant candidates evaluated for the suitability of other medical and surgical therapies that may yield short- and long-term survival rates comparable to transplantation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do transplant candidates receive a psychological evaluation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program update clinical information in the transplant patient’s medical record on an ongoing basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the living donor the right to make a decision about donation in a setting free of coercion and pressure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is an individual with knowledge of living organ donation; transplantation, medical ethics, and informed consent identified as and advocate for the living donor?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the individual appointed as the living donor advocate not involved in routine transplantation activities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the individual appointed as the living donor advocate inform, support, and respect the living donor in a culturally appropriate manner during decision making?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is informed consent for living donation obtained by trained staff and is in a language the prospective living donor can understand? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the inform process, does the program inform the prospective living donor of potential psychological risk of donation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the inform process, does the program inform the prospective living donor of potential complications and risk associated with living organ donation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "In addition to the information provided to any surgical patient as part of the inform process, does the program inform the prospective living donor of potential future health problems?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program inform the prospective living donor of alternative treatments for the transplant candidate?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program inform the prospective living donor of the donor’s right to opt out of donation at any time during the donation process? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document define organ-specific living donor selection criteria? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document define organ-specific living donor selection criteria? ",
                    question: "2",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results of a medical evaluation related to the living donor’s own physical health included in the determination of suitability for donation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the results of a psychological evaluation included in the determination of suitability for donation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the transplant program document organ compatibility confirmation in the living donor’s medical record?",
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
