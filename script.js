// function saveToLocalStorage(event) {
//     event.preventDefault();
//     const name = event.target.userName.value;
//     const email = event.target.email.value;
//     const number = event.target.contact.value;
//     const date = event.target.bookingDate.value;
//     const slot = event.target.showSlot.value;

//     // localStorage.setItem('name',name);
//     // localStorage.setItem('email',email);
//     // localStorage.setItem('number',number);
//     // localStorage.setItem('date',date);
//     // localStorage.setItem('slot', slot);

//     const userDetailsObject = {
//       name,
//       email,
//       number,
//       date,
//       slot
//     };

//     localStorage.setItem(userDetailsObject.email, JSON.stringify(userDetailsObject));

//     showBookingsOnScreen(userDetailsObject);

// }


// function showBookingsOnScreen(user) {
//     const parentNode=document.getElementById('userBookings');
//     const childHTML = `<li> ${user.name} - ${user.email}- ${user.date}- ${user.slot}
//         <button  oneClick=deleteUser ('${user.email}')  >Cancel Booking </button>


//     </li>`;
//     parentNode.innerHTML += childHTML;
// }

// function deleteUser(emailId) {

//     localStorage.removeItem(emailId);   
//     removeUserFromScreen(emailId);
// }
// function removeUserFromScreen(emailId) {
//     const parentNode=document.getElementById('userBookings');
//         const childNodeToBeDeleted = document.getElementById(emailId);
//         parentNode.removeChild(childNodeToBeDeleted);
// }


function saveToLocalStorage(event) {
    event.preventDefault();
       const name = event.target.userName.value;
        const email = event.target.email.value;
        const number = event.target.contact.value;
        const date = event.target.bookingDate.value;
        const slot = event.target.showSlot.value;
    const obj = {
        name,
        email,
        number,
        date,
        slot
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('userBookings');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('userBookings');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}