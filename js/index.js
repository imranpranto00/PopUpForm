// function validateField(FieldID) {
//     const inputElement = document.getElementById(FieldID);
//     // console.log(inputElement);

//     if (inputElement.value.trim() === "") {
//         alert(`${inputElement.id} is required.`);
//     }
// }
// //validate Name field

// function validateNameField(fieldId) {
//     const inputElement = document.getElementById(fieldId);
//     const inputValue = inputElement.value;


//     // Check if the value contains only letters and spaces
//     if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
//         alert(`${inputElement.id} must be a valid string (only letters and spaces).`);
//     }

// }

// // number checking and length
// function validateNumberField(fieldId) {
//     const inputElement = document.getElementById(fieldId);
//     const inputValue = inputElement.value.trim();


//     // Check if the value is not a number
//     if (isNaN(inputValue)) {
//         alert(`${inputElement.id} must be a number.`);
//         return;
//     }
// }

// //validate mobile number

// function validateMobileField(fieldId) {
//     const inputElement = document.getElementById(fieldId);
//     const inputValue = inputElement.value.trim();


//     // Check if the value is not a number

//     if(isNaN(inputValue) && inputValue.length!=11){
//         alert(`${inputElement.id} must be 11 number.`);
//         return;
//     }
// }



