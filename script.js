function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.email.value;
    const number = event.target.contact.value;
    const date = event.target.bookingDate.value;
    const slot = event.target.showSlot.value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('number',number);
    localStorage.setItem('date',date);
    localStorage.setItem('slot', slot);
}
