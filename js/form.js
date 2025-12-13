// Contact form validation

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Validation functions
    function validateName(name) {
        if (name.trim() === '') {
            return 'Name is required';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
            return 'Name can only contain letters and spaces';
        }
        return '';
    }

    function validateEmail(email) {
        if (email.trim() === '') {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    function validateMessage(message) {
        if (message.trim() === '') {
            return 'Message is required';
        }
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        return '';
    }

    // Display error message
    function showError(input, errorMessage) {
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.textContent = errorMessage;
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
    }

    // Clear error message
    function clearError(input) {
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.textContent = '';
        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
    }

    // Real-time validation on input
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            const error = validateName(this.value);
            if (error) {
                showError(this, error);
            } else {
                clearError(this);
            }
        });

        nameInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                const error = validateName(this.value);
                if (!error) {
                    clearError(this);
                }
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const error = validateEmail(this.value);
            if (error) {
                showError(this, error);
            } else {
                clearError(this);
            }
        });

        emailInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                const error = validateEmail(this.value);
                if (!error) {
                    clearError(this);
                }
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const error = validateMessage(this.value);
            if (error) {
                showError(this, error);
            } else {
                clearError(this);
            }
        });

        messageInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                const error = validateMessage(this.value);
                if (!error) {
                    clearError(this);
                }
            }
        });
    }

    // Form submission validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            const nameError = validateName(nameInput.value);
            const emailError = validateEmail(emailInput.value);
            const messageError = validateMessage(messageInput.value);

            // Clear previous errors
            clearError(nameInput);
            clearError(emailInput);
            clearError(messageInput);

            // Show errors if any
            let hasErrors = false;

            if (nameError) {
                showError(nameInput, nameError);
                hasErrors = true;
            }

            if (emailError) {
                showError(emailInput, emailError);
                hasErrors = true;
            }

            if (messageError) {
                showError(messageInput, messageError);
                hasErrors = true;
            }

            // If no errors, submit form (in a real application, this would send data to a server)
            if (!hasErrors) {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
                
                // Clear any remaining error states
                clearError(nameInput);
                clearError(emailInput);
                clearError(messageInput);
            } else {
                // Focus on first error field
                if (nameError) {
                    nameInput.focus();
                } else if (emailError) {
                    emailInput.focus();
                } else if (messageError) {
                    messageInput.focus();
                }
            }
        });
    }
});



