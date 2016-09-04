(function() {
    if (Chapters.find({code: 'pci'}).fetch().length == 0) {
        Chapters.insert({
            name: "Prevention and Control of Infection",
            code: "pci",
            data: [
                {   //PCI.1 One or more individuals oversee all infection prevention and control activities. This individual(s) is qualified in infection prevention and control practices through education, training, experience, or certification. 
                    question: "Do one or more individuals oversee the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the individual(s) qualified for the hospital’s size, complexity of activities, and level of risks, as well as the program’s scope? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the individual(s) fulfill program oversight responsibilities as assigned or described in a job description? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.2 There is a designated coordination mechanism for all infection prevention and control activities that involves physicians, nurses, and others based on the size and complexity of the hospital. 
                    question: "Is there a designated mechanism for the coordination of the infection prevention and control program? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the coordination of infection prevention and control activities involve physicians and nurses, and others based on the size and complexity of the hospital? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the coordination of infection prevention and control activities involve infection prevention and control professionals? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.3 The infection prevention and control program is based on current scientific knowledge, accepted practice guidelines, and applicable law and regulations, and standards for sanitation and cleanliness. 
                    question: "Is the infection prevention and control program based on current scientific knowledge accepted practice guidelines, and local laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the infection prevention and control program based on standards from national or local agencies for sanitation and cleanliness?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the infection prevention and control program results reported to public health agencies as required?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital take appropriate action on reports from relevant public health agencies?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.4 Hospital leadership provides resources to support the infection prevention and control program. 
                    question: "Is the infection prevention and control program staffed according to the hospital’s size, complexity of activities, and level of risks, as well as the program’s scope?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership allocate and approve staffing and resources required for the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do information management systems support the infection prevention and control program? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.5 The hospital designs and implements a comprehensive program to reduce the risks of health care-associated infections in patients and health care workers. 
                    question: "Is there a comprehensive program that crosses all levels of the hospital, to reduce the risk of health care-associated infections in patients?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there a comprehensive program that crosses all levels of the hospital to reduce the risk of health care-associated infections in health care workers?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program incorporate a range of strategies that includes systematic and proactive surveillance activities to determine usual (endemic) rates of infection?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include systems to investigate outbreaks of infectious diseases? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are risk-reduction goals and measurable objectives established and reviewed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.5.1 All patient, staff, and visitor areas of the hospital are included in the infection prevention and control program. 
                    question: "Are all patient care areas of the hospital included in the infection prevention and control program? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all staff areas of the hospital included in the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all visitor areas of the hospital included in the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.6 The hospital uses a risk-based approach in establishing the focus of the health care–associated infection prevention and reduction program. 
                    question: "Has the hospital established the focus of the program through the collection of data related to a) through f)? a) Respiratory tract—such as the procedures and equipment associated with intubation, mechanical ventilator support, tracheostomy, and so on; b) Urinary tract—such as the invasive procedures and medical            technology  associated with indwelling urinary catheters, urinary  drainage systems, their care, and so on; c) Intravascular invasive devices—such as the insertion and care of central venous catheters, peripheral venous lines, and so on; d) Surgical sites—such as their care and type of dressing and associated aseptic procedures; e) Epidemiologically significant diseases and organisms—multidrug – resistant organisms, highly virulent infections; f) Emerging or reemerging infections with the community.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the data collected in a) through f) analyzed to identify priorities for reducing rates of infection? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the infection control strategies implemented to reduce the rates of infection for the identified priorities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.6.1 The hospital tracks infection risks, infection rates, and trends in health care-associated infections to reduce the risks of those infections.
                    question: "Are health care-associated infection risks, rates, and trends tracked?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are processes redesigned based on risk, rate, and trend data and information?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital assess the infection control risks at least annually and takes action to focus or refocus the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7 The hospital identifies the procedures and processes associated with the risk of infection and implements strategies to reduce infection risk.
                    question: "Does the hospital have identified those processes associated with infection risk? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have implemented strategies, education, and evidence-based activities to reduce infection risk in those processes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify which risks require policies and/or procedures, staff education, practice changes, and other activities to support risk reduction?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.1 The hospital reduces the risk of infections by ensuring adequate medical technology cleaning and sterilization and the proper management of laundry and linen. 
                    question: "Do methods for medical technology cleaning, disinfection, and sterilization address the principles of infection prevention and control?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are methods for medical technology cleaning, disinfection, and sterilization coordinated and uniformly applied throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the principles of infection prevention and control applied to laundry and linen management, including transportation, cleaning, and storage?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.1.1 The hospital identifies and implements a process for managing expired supplies and the reuse of single-use devices when laws and regulations permit.
                    question: "Does the hospital implement a process consistent with national laws and regulations and professional standards that identifies the process for managing expired supplies?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "a) devices and materials that may be reused; b) the maximum number of reuses specific for each device and material that is reused; c) the types of wear and cracking, among others, that indicate the device cannot be reused; d) the cleaning process for each device that starts immediately after use and follows a clear protocol;  e) identification of patients on whom reusable medical devices   have been used: and f) a proactive evaluation of the safety of reusing single-use items. The hospital collects infection prevention and control data related to reused devices and materials to identify risks and implements actions to reduce risks and improve processes.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are data used to identify risks, and actions implemented to reduce risk and improve processes?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.2 The hospital reduces the risk of infections through proper disposal of waste. 
                    question: "Is disposal of infectious waste and body fluids managed to minimize infection transmission risk? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the handling and disposal of blood and blood components managed to minimize infection transmission risk? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is the operation of the mortuary and postmortem area managed to minimize infection transmission risk?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.3 The hospital implements practices for safe handling and disposal of sharps and needles.
                    question: "Does the hospital identify and implement practices to reduce the risk of injury and infection from the handling and management of sharps and needles?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are sharps and needles collected in dedicated, closable, puncture-proof, leak-proof containers that are not reused?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital dispose of sharps and needles safely or contracts with sources that ensure  the proper disposal of sharps containers in dedicated hazardous waste sites or as determined by national laws and regulations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.4 The hospital reduces the risk of infections associated with the operations of food services.
                    question: "Does the hospital store food and nutrition products using sanitation, temperature, light, moisture, ventilation, and security in a manner that reduces the risk of infection?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital prepare food and nutrition products using proper sanitation and temperature?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are kitchen sanitation measures implemented to prevent the risk of cross contamination?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.7.5 The hospital reduces the risk of infection in the facility associated with mechanical and engineering controls and during demolition, construction and renovation. 
                    question: "Are engineering controls implemented to minimize infection risk in the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Has the hospital a program developed that uses risk criteria to assess the impact of renovation or new construction and implements the program when demolition, construction, or renovation takes place?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are risk and impact of the demolition, renovation, or construction on air quality and infection prevention and control activities assessed and managed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.8 The hospital provides barrier precautions and isolation procedures that protect patients, visitors, and staff from communicable diseases and protects immunosuppressed patients from acquiring infections to which they are uniquely prone. 
                    question: "Are patients with known or suspected contagious diseases isolated in accordance with recommended guidelines?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are patients with communicable diseases separated from patients and staff who are at greater risk due to immunosuppression or other reasons?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are negative-pressure rooms monitored routinely and available for infectious patients who require isolation for airborne infections; when negative-pressure rooms are not immediately available, rooms with HEPA filtration systems with a minimum of 12 air changes per hour may be used?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does cleaning of infectious rooms during the patient’s hospitalization and after discharge follow infection control guidelines?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.8.1 The hospital develops and implements a process to manage a sudden influx of patients with airborne infections and when negative-pressure rooms are not available.
                    question: "Does the hospital develop and implement a process to address managing patients with airborne infections for short periods of time when negative-pressure rooms not available?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital develop and implement a process for managing an influx of patients with contagious diseases?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff educated in the management of infectious patients when there is a sudden influx or when negative-pressure rooms are not available?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.9 Gloves, masks, eye protection, other protective equipment, soap, and disinfectants are available and used correctly when required.
                    question: "Does the hospital identify situations in which personal protective equipment required and ensures that it is available at any site of care at which it could be needed?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is personal protective equipment correctly used in those identified situations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are surface disinfecting procedures implemented for areas and situations in the hospital identified as at risk for infection transmission?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are soap, disinfectants, and towels or other means of drying located in areas where hand-washing and hand-disinfecting procedures required?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.10 The infection prevention and control process is integrated with the hospital’s overall program for quality improvement and patient safety, using measures that are epidemiologically important to the hospital.
                    question: "Are infection prevention and control activities integrated into the hospital’s quality improvement and patient safety program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring data collected and analyzed for the infection prevention and control activities and include epidemiologically important infections?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring data used to evaluate and support improvements to the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring data documented and reports of data analysis and recommendations provided to leadership on a quality basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {   //PCI.11 The hospital provides education on infection prevention and control practices to staff, physicians, patients, families, and other caregivers when indicated by their involvement in care.
                    question: "Does the hospital provide education about infection prevention and control to all staff and other professionals?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital provide education about infection prevention and control to patients and families?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all staff educated on the policies, procedures, and practices of the infection prevention and control program?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is periodic staff education provided in response to significant trends in infection data?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are findings and trends from the measurement activities communicated throughout the hospital and included as part of periodic education?",
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
