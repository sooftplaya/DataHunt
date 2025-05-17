document.addEventListener('DOMContentLoaded', function() {
    const entryModal = document.getElementById('entryModal');
    const confirmButton = document.getElementById('confirmButton');

    // Show modal on page load
    entryModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Close modal on button click
    confirmButton.addEventListener('click', function() {
        entryModal.style.opacity = '0';
        setTimeout(() => {
            entryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });
});