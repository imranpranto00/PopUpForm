    function handleNomineeSelection() {
        const nomineeType = document.querySelector('input[name="nominee"]:checked').value;

        if (nomineeType === "first-guarantor") {
            populateNomineeForm(getFirstGuarantorData());
        } else if (nomineeType === "second-guarantor") {
            populateNomineeForm(getSecondGuarantorData());
        } else if (nomineeType === "new-nominee") {
            clearNomineeForm();
        }
    }

    function getFirstGuarantorData() {
        return {
            name: document.getElementById('guarantor-name').value,
            mobile: document.getElementById('guarantor-mobile').value,
            relation: document.getElementById('relation-dropdown').value,
            dob: document.getElementById('employee-id').value, // Example field
            address: document.getElementById('guarantor-address').value,
            nationalId: document.getElementById('guarantor-national-id').value
        };
    }

    function getSecondGuarantorData() {
        return {
            name: document.getElementById('second-guarantor-name').value,
            mobile: document.getElementById('second-guarantor-mobile').value,
            relation: document.getElementById('relation-dropdown').value,
            dob: document.getElementById('employee-id').value, // Example field
            address: document.getElementById('second-guarantor-address').value,
            nationalId: document.getElementById('second-guarantor-national-id').value
        };
    }

    function populateNomineeForm(data) {
        document.getElementById('Nominee-name').value = data.name;
        document.getElementById('Nominee-mobile').value = data.mobile;
        document.getElementById('relation-dropdown').value = data.relation;
        document.getElementById('nominee-dob').value = data.dob; // Ensure this is correctly mapped
        document.getElementById('Nominee-address').value = data.address;
        document.getElementById('Nominee-national-id').value = data.nationalId;
    }

    function clearNomineeForm() {
        document.getElementById('Nominee-name').value = '';
        document.getElementById('Nominee-mobile').value = '';
        document.getElementById('relation-dropdown').selectedIndex = 0;
        document.getElementById('nominee-dob').value = '';
        document.getElementById('Nominee-address').value = '';
        document.getElementById('Nominee-national-id').value = '';
    }
