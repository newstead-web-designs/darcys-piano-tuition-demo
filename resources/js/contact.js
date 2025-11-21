// Grab the form
const form = document.querySelector('form[name="contact"]');

// Grab all the preferred days checkboxes
const checkboxes = document.querySelectorAll('input[name="preferred-days"]');

// Grab the hidden field
const hiddenField = document.getElementById('preferred_days_list');

/**
 * Update hidden field with only selected days as bullet list
 */
function updateHiddenField() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => `- ${cb.value}`); // bullet formatting

  hiddenField.value = selected.join('\n'); // Join bullets with single newline
}

// Listen for checkbox changes
checkboxes.forEach(cb => cb.addEventListener('change', updateHiddenField));

// Ensure hidden field is updated before submitting
form.addEventListener('submit', updateHiddenField);

// Initialize hidden field on page load
updateHiddenField();
