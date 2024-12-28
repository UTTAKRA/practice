const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const submitButton = document.getElementById('btnSubmit');
const displayText = document.getElementById('displayText');


submitButton.addEventListener('click', () => {
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    displayText.textContent = `You entered: ${firstName} ${lastName}`;
    console.log(`User Input: ${firstName} ${lastName}`);
});
