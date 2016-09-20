(function() {
    if (Chapters.find({code: 'aop'}).fetch().length == 0) {
        Chapters.insert({
            name: "MMU",
            code: "mmu",
            selected: false,
            data: [
                {	//MMU.1 Medication use in the hospital is organized to meet patient needs, complies with applicable laws and regulations, and is under the direction and supervision of a licensed pharmacist or other qualified professional.
                    question: "Is written document identify how medication use organized and managed throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all settings, services, and individuals who manage medication processes included in the organizational structure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does a licensed pharmacist or other qualified individual directly supervise the activity of the pharmacy or pharmaceutical services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there at least one documented review of the medication management system within the previous 12 months?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do the pharmacy or pharmaceutical service and medication use comply with applicable laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are appropriate sources of drug information readily available to those involved in medication use?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Selection and Procurement
                	//MMU.2 Medication for prescribing or ordering are stocked, and there is a process for medication not stocked or normally available in the hospital or for times when the pharmacy is closed.
                    question: "Is there a list of medication stocked in the hospital or readily available from outside sources?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the process used to develop the list (unless determined by regulation or an authority outside the hospital) include representation from all those who prescribe and manage medications in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a process for obtaining medication during the night or when the pharmacy is closed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.2.1 There is a method for overseeing the organization’s medication list and medication use.
                    question: "Is there a method for overseeing medication use in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are health care practitioners involved in ordering, dispensing, administrating, and patient monitoring processes involved in evaluating and maintaining the medication list?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are decisions to add or to remove medications from the list guided by criteria?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When medications are newly added to the list, is there a process or mechanism to monitor how the drug is used and any unanticipated adverse events?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the list reviewed at least annually based on safety and efficacy information?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Storage
                	//MMU.3 Medications are properly and safely stored.
                    question: "Are medications stored under condition suitable for product stability, as they represent critical high-risk individual patient care units?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are controlled substances accurately accounted for according to applicable laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications and chemicals used to prepare medical medication accurately labeled with contents, expiration, dates, and warnings? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do all medication storage area, including medication storage areas on patient care units periodically inspected to ensure that medications are stored properly?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications protected from loss or theft throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.3.1 There is a process for storage of medications and nutrition products that require special consideration.
                    question: "Does the hospital establish and implement a process for how products requiring special consideration are stored?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for how radioactive, investigational, and similar medication are stored?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for how sample medication are stored and controlled?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "oes the hospital establish and implement a process for how medication brought in by the patient are identified and stored?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.3.2. Emergency medications are available, monitored, and safe when stored out of the pharmacy.
                    question: "Are emergency medications available in the units where they will be needed or are readily accessible within the hospital to meet emergency needs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for emergency medication are stored, maintained, and protected from loss or theft?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are emergency medications are monitored and replaced in a timely manner after use or when expired or damaged?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.3.3 The hospital has a medication recall systems
                    question: "",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a medication recall system in place?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for use of medication known to be expired or outdated?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for the destruction of medication known to be expired or outdated?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Ordering and Transcribing
                	//MMU.4 Prescribing, ordering, and transcribing are guided by policies and procedures.
                    question: "",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for the safe prescribing, ordering, and transcribing of medication in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for managing illegible prescription and order, including measure to prevent continued occurrence?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is staff trained in correct prescribing, ordering, and transcribing processes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do patient records contain a list of current medication taken prior to admission, and this information is made available to the pharmacy and the patient’s health care practitioners?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are initial medication orders compared to the list of medication taken prior to admission, according to the hospital’s established process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.4.1 The hospital defines the elements of a complete order or prescription
                    question: "Does the required element of complete medication order or prescription include at least a) through e) identified in the intent? a) The data necessary to accurately identify the patient; b) The elements of all order or prescriptions; c) When generic or brand names are acceptable or required; d) Whether or when indications for use are required on a PRN (pro re nata, or “as needed”) or other medication order; e) the types of orders that are weight based or otherwise adjusted, such as for children, frail elderly, and other similar populations.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a process to manage medication orders that are incomplete, illegible, or unclear?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a process to manage special types of orders, such as emergency, standing, or automatic stop, and any elements unique to such orders?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a process to monitor the completeness and accuracy of medication order and prescription?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.4.2 The hospital identifies those qualified individuals permitted to prescribe or to order medications.
                    question: "Do only those permitted by the hospital and by relevant licensure, laws, and regulations prescribe or order medications?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process to place limits, when appropriate, on the prescribing or ordering practices of individual?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are individuals permitted to prescribe and to order medications known to the pharmaceutical service or others who dispense medications?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.4.3 Medications prescribed and administered are written in the patient’s record.
                    question: "Are medications prescribed or ordered recorded for each patient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is medication administration recorded for each dose?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is medication information kept in the patient’s record or inserted into his or her record at discharge or transfer?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Preparing and Dispensing
                	//MMU.5 Medications are prepared and dispensed in a safe and clean environment.
                    question: "Are medication prepared and dispensed in clean and safe areas with appropriate medical technology, equipment, and supplies?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does medication preparation and dispensing adhere to laws, regulation and professional standard of practice?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff preparing sterile trained in the principles of medication preparation aseptic techniques?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.5.1 Medication prescriptions or orders are reviewed for appropriateness.
                    question: "Does the hospital define the patient-specific information required for an effective review process, and the source or availability of this information is available at all times when the pharmacy is open or closed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Apart from exceptions identified in the intent, Are each prescription or order reviewed for appropriateness prior to dispensing and administration and include elements a) through g in the intent. Thus, each prescription or order is evaluated for appropriateness? a) the appropriateness of the drug, dose, frequency, and route of administration; b) therapeutic duplication; c) real or potential allergies or sensitivities; d) real or potential interactions between the medication and other medications or food; e) variation from organization criteria for use; f) patient’s weight and other physiological information; and g) other contraindications.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a process to contact the individual who prescribed or ordered the medications when questions arise?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are individuals permitted to review order or prescription judged competent to do so and are provided resource to support the review process?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is review facilitated by a record (profile) for all patients receiving medications, and this record is available at all times when the pharmacy is open or closed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is computer software, when used to cross-check drugs for drug/drug interactions and allergies, current and updated according to the program manufacturer’s recommendations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.5.2 A system is used to dispense medications in the right dose to the right patient at the right time.
                    question: "s there a uniform medication dispensing and distribution system in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "After preparation, are medications not immediately administered labeled with the name of the medication, the dosage/ concentration, the date prepared, the expiration date, and the patient’s name?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications dispensed in the most ready-to-administer form?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the system support accurate and timely dispensing?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Administration
                	//MMU.6 The hospital identifies those qualified individuals permitted to administer medications.
                    question: "Does the hospital identify those individuals, by job description or the privileging process, authorized to administer medications?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do only those permitted by the hospital and by relevant licensure, laws, and regulations administer medications?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a process to place limits, when appropriate, on the medication administration of individuals?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.6.1 Medication administration includes a process to verify the medication is correct based on the medication prescription or order.
                    question: "Are medications verified with the prescription or order?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the dosage amount of the medication verified with the prescription or order?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the route of administration verified with the prescription or order?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications administered on a timely basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications administered as prescribed and noted in the patient’s record?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.6.2 Policies and procedures govern medications brought into the organization for the patient self-administration or as samples.
                    question: "Does the hospital establish and implement a process to govern patient self-administration of medication?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process to govern the management, use, and documentation of any medication brought into the hospital for or by the patient?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process to govern the availability, management, use, and documentation of medication sample?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//Monitoring
                	//MMU.7 Medication effects on patients are monitored.
                    question: "Are medications effects on patients monitored?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are medications adverse effects on patients monitored and documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process that identifies those adverse effects that are to be recorded in the patient’s record and those that must be reported to the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are adverse effects documented in the patient’s record as identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are adverse effects reported as identify by the process in the time frame required?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {	//MMU.7.1 The hospital establishes and implements a process for reporting and acting in medication errors and near misses.
                    question: "Does the hospital establish a definition for a medication error and near miss?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a process for reporting and acting on medication error and near misses?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are those accountable for taking action on the report identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital use medication error and near misses reporting information to improve medication use process?",
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
