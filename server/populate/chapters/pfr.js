(function() {
    if (Chapters.find({code: 'pfr'}).fetch().length == 0) {
        Chapters.insert({
            name: "Patient and Family Rights",
            code: "pfr",
            selected: false,
            data: [
                {
                    question: "Does hospital leadership work to protect and advance patient and family rights?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership understand patient and family rights as identified in laws and regulations and in relation to the cultural practices of the community or individual patients served?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital respect the right of patients, and in some circumstances the right of the patient�s family, to have the prerogative to determine what information regarding their care would be provided to family or others, and under what circumstances?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all staff knowledgeable about patients� rights and can they explain their responsibilities in protecting s� rights?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the department/ service leaders and staff of the hospital identify the most common barriers in its patient population?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the department/ service leaders develop and implement a process to overcome or limit barriers for patients seeking care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the department/ service leaders develop and implement a process to limit the impact of barriers on the delivery of services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patients� values and beliefs identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do staff provide care that is respectful of the patient�s values and beliefs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital respond to routine as well as complex requests related to religious or spiritual support?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do staff members identify patient expectations and needs for privacy during care and treatment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is a patient�s expressed need for privacy respected for all clinical interviews, examinations, procedures/ treatments, and transport?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

		{
                    question: "Is confidentiality of patient information maintained according to laws and regulations? (Also see MOI.2 and MOI.7)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

		{
                    question: "Are patients requested to grant permission for the release of information not covered by laws and regulations? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Has the hospital determined its level of responsibility for patient�s possessions? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do patients receive information about the hospital�s responsibility for protecting personal belongings? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients� possessions safeguarded when the hospital assumes responsibility or when the patient is unable to assume responsibility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital develop and implement a process to protect all patients from assault?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are vulnerable populations that are at additional risks identified? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital develop and implement a process to protect vulnerable populations from other safety issues? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are remote or isolated areas of the facility monitored? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do staff members understand their responsibilities in the protection processes? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital support and promote patient and family participation in care processes? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital facilitate a patient�s request to seek a second opinion without fear of compromise to his or her care within or outside the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are staff members trained on the policies and procedures and their role in supporting patient and family participation in care processes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients informed of their medical conditions and any confirmed diagnosis? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients informed of the planned care and treatment(s)?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients told when informed consent will be required and the process used to give consent? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients informed about the expected outcomes of care and treatment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients informed about any unanticipated outcomes of care and treatment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients and families informed about their right to participate in care decisions to the extent they wish?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Has the hospital identified its position on withholding resuscitative services and forgoing or withdrawing life-sustaining treatments?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital�s position conform to its community�s religious and cultural norms and any legal or regulatory requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital inform patients and families about their rights to refuse or to discontinue treatment and the hospital�s responsibilities related to such decisions? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital inform patients about the consequences of their decisions? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital inform patients about available care and treatment alternatives?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital guide health professionals on the ethical and legal considerations in carrying out patient wishes regarding treatment alternatives? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital respect and support the patient�s right to assessment and management of pain?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital respect and support the patient�s right to assessment and management of the dying patient�s needs? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do the hospital staff understand the personal, cultural, and societal influences on the patient�s experiences with pain?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do the hospital staff understand the personal, cultural, and societal influences on the patient�s experience with death and dying?  ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients informed about the process for voicing complaints, conflicts, and differences of opinion?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are complaints, conflicts, and differences of opinion investigated by the organization?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are complaints, conflicts, and differences of opinion that arise during the care process resolved?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do patients and families participate in the resolution process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is information about patient rights and responsibilities provided in writing to each patient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is the statement of patient rights and responsibilities posted or otherwise available from staff at all times? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital have a process to inform patients of their rights and responsibilities when written communication is not effective or appropriate? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients and families informed as to the scope of a general consent, when used by the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Has the hospital defined how a general consent, when used, is documented in the patient record? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are patients and families informed about which tests and treatments require informed consent? (Also see PFR.5.1)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital develop and implement a clearly defined informed consent process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are designated staff trained in the process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do patients learn about the process for granting informed consent in a manner and language that they understand? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do patients give informed consent consistent with the process? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is there a uniform recording of informed consent? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is consent obtained before surgical or invasive procedures?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is consent obtained before anesthesia and procedural sedation?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is consent obtained before the use of blood and blood products?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Has the hospital listed those additional procedures and treatments that require separate consent?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is consent obtained before the additional and/ or other high-risk procedures and treatments? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Is the identity of the individual providing the information to the patient and family noted in the patient�s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question:"Are patients informed of the following elements as relevant to their condition and planned treatment? a) the patient�s condition; b) the proposed treatment (s); c) the name of person providing the treatment; d) potential benefits and drawbacks; e) possible alternatives; f) likelihood of success; g) possible problems related to recovery; and h) possible results of nontreatment. (Also see PFR.5.2)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Do patients know the identities of the physicians or other practitioners responsible for their care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital develop and implement a process to respond to a patient�s request for additional information on the practitioner responsible for his or her care?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital develop and implement a process for when others can grant informed consent?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the process respect law, culture, and custom?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are individuals, other than the patient, granting consent noted in the patient�s record? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital support patient and family choices to donate organs and other tissues? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital provide information to patients and families on the donation process? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital provide information to the patients and family on the manner in which organ procurement is organized? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital ensure that adequate controls are in place to prevent patients form feeling pressured to donate? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital define the organ- and tissue- donation processes and ensure that the process is consistent with the region�s laws and regulations and its religious and cultural values?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital identify consent requirements and develop a consent process consistent with those requirements? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Are staff trained in the contemporary issues and concerns related to organ donation and the availability of transplants?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
		{
                    question: "Does the hospital cooperate with relevant hospitals and agencies in the community to respect and implement choices to donate?",
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
