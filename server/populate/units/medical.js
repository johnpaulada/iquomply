(function() {
    if (Units.find({category: 'medical'}).fetch().length == 0) {
        Units.insert({
            'name': "SVP & Medical Director's Office",
            'category': "medical"
        });
        Units.insert({
            'name': "Medical Quality and Safety Office/Medical Education Office",
            'category': "medical"
        });
        Units.insert({
            'name': "Geriatric Doctor's Office",
            'category': "medical"
        });
        Units.insert({
            'name': "Infection Control Office",
            'category': "medical"
        });
        Units.insert({
            'name': "Department of Otorhinolaryngology (ENT Doctor's Office)",
            'category': "medical"
        });

        // Ophthalmology Doctor's Office/ Conf. Room
        // Department of Anesthesiology (Conference Room)
        // OB-Gyne Doctor's Office
        // Orthopedic Institute Office
        // Department of Medicine (Doctor's Office & Conf. Room)
        // Surgical Conference Room
        // Section of Nephrology Office
        // Heart Institute (HI) Doctor's Office/ Heart Room
        // Cancer Doctor's Office/ Conf. Room
        // Medical Records Management Department
        // Neuroscience Doctor's Office/ Conf. Room
        // Pedia Doctor's Office/ Conference Room
        // Transplant Service Office
        // Admission Department
        // Social Service Dept
        // Out-Patient Department (OPD)
        // Emergency Care Services
        // Pre-Anesthetic Risk Evaluation & Stratification (PARES) Clinic
        // Mood Disorder Center
        // Pain Management Center
        // Clinical Nutrition Services
        // Wellness Center
    }
})();
