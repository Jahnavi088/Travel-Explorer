
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formOutput = document.getElementById('form-output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        formOutput.innerHTML = `<p>Thank you, ${name}! We have received your message.</p>`;
        formOutput.style.opacity = '0';
        setTimeout(() => {
            formOutput.style.opacity = '1';
        }, 100);
    });
});