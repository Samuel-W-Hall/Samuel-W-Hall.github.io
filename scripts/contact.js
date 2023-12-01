// ----------FINDING ELEMENTS----------
const inputFields = document.querySelectorAll('.input-group');

// ----------DEFAULT VARIABLES----------


// ---------DEFAULT FIELD LABELS----------

// Callback functions
const emptyLabel = function(e) {
    // Once user starts typing...
    const inputGroup = this.closest('.input-group');
    const label = inputGroup.children[1];
    // 'Clear' label
    label.style.opacity = 0;
};

const keyCheck = function(e) {
    // If user pressed backspace...
    const backspacePressed = (e.key == 'Backspace');
    const inputGroup = this.closest('.input-group');
    const inputVal = inputGroup.children[0].value;
    const label = inputGroup.children[1];
    // ... thus resulting in a black input field, THEN: 'Reset' label
    if (backspacePressed && inputVal.length == 1) label.style.opacity = 0.5;
}

const emptyFieldCheck = function(e) {
    const inputGroup = this.closest('.input-group');
    const inputVal = inputGroup.children[0].value;
    const label = inputGroup.children[1];
    // If clicked off input field when it's empty, then 'reset label
    if (inputVal == '') label.style.opacity = 0.5;
}

inputFields.forEach((field) => {
    const input = field.children[0];
    input.addEventListener('keypress', emptyLabel);
    input.addEventListener('keydown', keyCheck);
    input.addEventListener('blur', emptyFieldCheck);
});

