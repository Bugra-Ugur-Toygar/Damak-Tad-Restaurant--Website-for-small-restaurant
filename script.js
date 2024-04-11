document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;


    if (name && email && phone) {
        alert('Thank you for your reservation inquiry. We will get back to you soon.');
    } else {
        alert('Please fill out all required fields.');
    }
});