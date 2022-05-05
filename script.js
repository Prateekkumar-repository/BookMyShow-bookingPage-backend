function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.email.value;
    const number = event.target.contact.value;
    const date = event.target.bookingDate.value;
    const slot = event.target.showSlot.value;

    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('number',number);
    // localStorage.setItem('date',date);
    // localStorage.setItem('slot', slot);

    const userDetailsObject = {
      name,
      email,
      number,
      date,
      slot
    };

    localStorage.setItem(userDetailsObject.email, JSON.stringify(userDetailsObject));

    showBookingsOnScreen(userDetailsObject);

}


function showBookingsOnScreen(user) {
    const parentNode=document.getElementById('userBookings');
    const childHTML = `<li> ${user.name} - ${user.email}- ${user.date}- ${user.slot} </li>`;
    parentNode.innerHTML += childHTML;
}