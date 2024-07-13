const formValidator = (() => {
    const createErrorMessageElement = (message) => {
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.innerText = message;
        return errorMessage;
    };

    const removeErrorMessages = (inputElement) => {
        const nextElement = inputElement.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
            nextElement.remove();
        }
    };

    const rules = {
        required: (value) => String(value).trim() !== '',
        email: (value) => /\S+@\S+\.\S+/.test(value),
        minLength: (length, value) => String(value).length >= length,
        password: (value) => {
            const strValue = String(value);
            const minLength = strValue.length >= 8;
            const hasUpperCase = /[A-Z]/.test(strValue);
            const hasLowerCase = /[a-z]/.test(strValue);
            const hasNumber = /[0-9]/.test(strValue);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(strValue);
            return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
        },
        checkboxClicked: (isChecked) => isChecked,
        confirmPassword: (password, confirmPassword) => password === confirmPassword
    };

    const validateInput = (inputElement, validations, form) => {
        removeErrorMessages(inputElement);
        for (const validation of validations) {
            const { rule, params, message } = validation;
            if (!rules[rule]) {
                console.error(`Validation rule "${rule}" is not defined.`);
                continue;
            }
            const valueToValidate = rule === 'checkboxClicked' ? inputElement.checked : inputElement.value;
            const compareValue = rule === 'confirmPassword' ? form.password : undefined;
            const isValid = rule === 'confirmPassword'
                ? rules[rule](compareValue, valueToValidate)
                : rules[rule](...(params || []), valueToValidate);
            if (!isValid) {
                const errorMessageElement = createErrorMessageElement(message);
                inputElement.insertAdjacentElement('afterend', errorMessageElement);
                return false;
            }
        }
        return true;
    };

    const validateInputs = (inputConfigs, form) => {
        let allValid = true;
        for (const config of inputConfigs) {
            const inputElement = document.getElementById(config.id);
            if (inputElement) {
                const isValid = validateInput(inputElement, config.validations, form);
                inputElement.addEventListener('input', () => validateInput(inputElement, config.validations, form));
                if (inputElement.type === 'checkbox') {
                    inputElement.addEventListener('change', () => validateInput(inputElement, config.validations, form));
                }
                if (!isValid) allValid = false;
            } else {
                console.warn(`Element with ID ${config.id} not found.`);
            }
        }
        return allValid;
    };

    return { validateInputs };
})();

export default formValidator;
