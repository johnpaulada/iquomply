(function() {
    if (Chapters.find({code: 'cop'}).fetch().length == 0) {
        Chapters.insert({
            name: "Care of Patients",
            code: "cop",
            selected: false,
            data: [
                {
                    question: "Does hospital leadership and those responsible for facility management know what laws, regulations, and other requirements apply to the hospital’s facilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership implement the applicable requirements or approved alternatives?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership ensure that the hospital meets the conditions of facility reports or citations from inspections by local authorities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are there written programs that address the risk areas a) to g)? a) Safety and Security Safety—The degree to which the hospital’s buildings, grounds, and equipment do not pose a hazard or risk to patients, staff, and visitors. Security—Protection from loss, destruction, tampering, or unauthorized access or use. b) Hazardous materials—Handling, storage, and use of radioactive and other materials are controlled, and hazardous waste is safely disposed. c) Emergencies—Response to epidemics, disasters, and emergencies is planned and effective. d) Fire safety—Property and occupants are protected from fire and smoke. e) Medical technology—Technology  is selected, maintained, and used in a manner to reduce risks. f) Utility systems—Electrical, water, and other utility systems are maintained to minimize the risks of operating failures. ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are the programs current and are fully implemented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a process to review and to update the program(s) when changes in the hospital’s environment occur or at a minimum, on an annual basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When independent entities are present within the patient care facilities to be surveyed, does the hospital ensure that the entities comply with all aspects of the facility management programs identified elements a) through d)? a) Safety and Security Safety—The degree to which the hospital’s buildings, grounds, and equipment do not pose a hazard or risk to patients, staff, and visitors. Security—Protection from loss, destruction, tampering, or unauthorized access or use. b) Hazardous materials—Handling, storage, and use of radioactive and other materials are controlled, and hazardous waste is safely disposed. c) Emergencies—Response to epidemics, disasters, and emergencies is planned and effective. d) Fire safety—Property and occupants are protected from fire and smoke ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are program oversight and direction assigned to one or more individuals qualified by experience and training?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are evidence of the training and experience of the qualified individual(s) documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the individual(s) plan and implement the program, including elements a) through g)? a) planning all aspects of the program; b) implementing the program; c) educating staff; d) testing and monitoring the program; e) periodically reviewing and revising the program; and f) providing annual reports to the governing body on the effectiveness of the program",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a program to provide a safe physical facility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have documented current, accurate inspection of its physical facilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include assessing safety and security during times of construction and renovation and implementing strategies to reduce risks? (Also see PCI.7.5)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a program to provide a safe physical facility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have documented current, accurate inspection of its physical facilities?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include assessing safety and security during times of construction and renovation and implementing strategies to reduce risks? (Also see PCI.7.5)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a program to provide a secure environment, including monitoring, and securing areas identified as security risks? (Also see AOP.5.3 and AOP.6.3)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program ensure that all staff, contract workers, and vendors identified?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are all security risk areas and restricted areas identified, documented, monitored, and kept secure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital plan and budget to meet applicable laws, regulations, and other requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital plan and budget for upgrading or replacing systems, building, or components needed for the continued operation of a safe, secure, and effective facility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does hospital leadership apply the budgeted resources to provide for a safe and secure facility in accordance with approved plans?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify the type, location, and quantities of all hazardous materials and waste and has a complete and current inventory of all such materials within the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement safe handling, storage, and use of hazardous materials and waste?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement the proper protective equipment and procedures required during use? (Also see AOP.6.3, ME.3)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement proper labeling of hazardous materials and waste?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement documentation requirements, including any permits, licenses, or other regulatory requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement a reporting and investigation mechanism for spills, exposures, and other incidents?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

{
                    question: "Does the program establish and implement procedures for the management of spills and exposures, including the use of proper protective equipment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is information about the hazardous material related to safe handling, spill-handling procedures, and procedures for managing exposures up to date and available at all times?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program establish and implement the disposal of hazardous waste in a safe and legal manner?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have identified the major internal and external disasters, such as community emergencies, epidemics, and natural or other disasters, as well as major epidemic events that pose significant risks of occurring, taking into consideration the hospital’s geographic location?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify the probable impact that each type of disaster will have on all aspects of care and services?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a disaster program that identifies its response to likely disasters, including items a) to g)? a) determining the type, likelihood, and consequences of hazards, threats, and events; b) determining the hospital’s role in such events; c) communication strategies for events; d) the managing of resources during events, including alternative sources; e) the managing of clinical activities during an event, including alternative care sites; f) the identification and assignment of staff roles and responsibilities during an event; and g) the process to manage emergencies when personal responsibilities of staff conflict with the hospital’s responsibility for providing patient care.",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the entire program or at least critical elements c) through g) of the program have tested annually?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does at conclusion of every test have debriefing of the test conducted?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a program to ensure that all occupants of the hospital’s facilities safe from fire, smoke, or other non-fire emergencies?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include the documented assessment of fire risks, including when construction present in or adjacent to the facility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include the early detection of fire and smoke?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include the abatement of fire and containment of smoke?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program include the safe exit from the facility when fire and nonfire emergencies occur?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does all staff participate in at least one fire and smoke safety program test per year? (Also see FMS.11-FMS.11.2)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

{
                    question: "Does staff can demonstrate how to bring patients to safety?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are fire detection and abatement equipment and systems inspected, tested, and maintained according to manufacturers’ recommendations?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are inspection, testing, and maintenance of equipment and systems documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the fire safety program addresses eliminating or limiting smoking within the hospital facility?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program apply to patients, families, visitors, and staff?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the program identify who may grant patient expectation for smoking and when those expectations apply? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital establish and implement a medical technology program throughout the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is there an inventory of all medical technology?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the medical technology have inspected and tested when new and according to age, use, and manufacturers’ recommendations thereafter?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the medical technology program include preventive maintenance?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is staff providing these services qualified and trained for the services being provided?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have a system in place for monitoring and acting on medical technology hazard notices, recalls, reportable incidents, problems, and failure?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When laws and regulations require, does the hospital report any deaths, serious injuries, or illness that result of medical technology? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the medical technology management program address the use of any medical technology with a reported problem or failure, or that is the subject of a hazard notice or is under recall?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital inventory its utility systems components and map the distribution of them?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify, in writing, inspection and maintenance activities for all operating components of utility systems on the inventory?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital identify, in writing, the intervals for inspecting, testing, and maintaining all operating components of the utility systems on the inventory, based on criteria such as manufacturers’ recommendations, risks levels, and hospital experience?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital label utility system controls to facilitate partial or complete emergency shutdowns?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are utility systems and components inspected based on hospital-developed criteria?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are utility systems and components tested based on hospital criteria?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are utility systems and components maintained based on the hospital criteria?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are utility systems and components improved when necessary?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is potable water available 24 hours per day, 7 days a week?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is electrical power available 24 hours a day, 7 days a week?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital have identified the areas and services at greatest risk when power fails or water contaminated or interrupted?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital seek to reduce the risks of such events?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital plan alternative sources of power and water in emergencies?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital test alternative sources of water at least quarterly or more frequently if required by local laws and regulations or conditions of the source of water?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

{
                    question: "Does the hospital document the results of such test?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital test alternative sources of electricity at least quarterly if required by local laws and regulations, manufacturers’ recommendations, or conditions of the source of electricity?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the hospital document the results of such test?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "When emergency sources of power require a fuel source, does the hospital establish and has available, the necessary amount of on-site fuel stored? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is water quality monitored at least quarterly or more frequently based on local laws and regulations, conditions of the sources for water, and previous experience with water quality problems. Was the monitoring documented?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Is water used in renal dialysis tested and testing documented according to industry standards at least quarterly or more frequently based on local laws and regulations, conditions of the sources for water, and previous experience with water quality problems? ",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are actions taken and documented when water quality found to be unsafe?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring data collected and analyzed for each of the facility management programs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are monitoring data used to support planning for replacing or upgrading medical technology, equipment, and systems, and reducing risks in the environment?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are reports on monitoring data and recommendations provided to hospital leadership on a quarterly basis?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are education provided on an annual basis for each component of the hospital’s facility management and safety program to ensure that all staff on all shifts can effectively carry out their responsibilities? (Also see AOP.5.3, ME 4 and AOP.6.3, ME 4)",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does the education include visitors, vendors, contract workers, and others as identified by the hospital?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff knowledge tested regarding their roles in each of the facility management programs?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are training, testing and the results of testing documented for each staff member?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },

{
                    question: "Do staff member can describe and/or demonstrate their roles in response to a fire?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does staff can describe and/or demonstrate actions to eliminate, to minimize, or to report safety, security and other risks?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Does staff can describe and/or demonstrate precautions, procedures, and participation in emergencies, including the storage, handling, and disposal of medical gases and hazardous waste and materials?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Do staff members can describe and/or demonstrate procedures and their roles in internal and community emergencies and disasters?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff trained to operate medical technology according to their job requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff trained to operate utility systems according to their job requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff trained to operate utility systems according to their job requirements?",
                    selected: false,
                    accomplished: "No",
                    evidence: "",
                    actions: "",
                    completionDate: new Date(),
                    personResponsible: ""
                },
                {
                    question: "Are staff trained to maintain utility systems according to their job requirements?",
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
