// -------------Mobile Store-----------------

// -----------selectors-----------------
const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");
const nameInput = document.querySelector(".create.input");
const priceInput = document.querySelector(".price.input");
const formbutton = document.querySelector(".form.button");

// ----------vars-----------------

const phones = [];

let index = null;

// --------------CRUD------------------
// -------------functions-----------------
// create phone
form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(formbutton.textContent);

    const phone = {
        name: nameInput.value,
        price: +priceInput.value,
    };

    if (formbutton.textContent === "create") {
        phones.push(phone);
    }
    else {
        phones.splice(index, 1, phone);
        formbutton.textContent = "create";
        index = null;
    }

    clearInputs();
    displayPhones();
});

// clear inputs
function clearInputs() {
    nameInput.value = "";
    priceInput.value = "";
}

// show phones 
function displayPhones() {
    tableBody.innerHTML = "";

    phones.forEach((phone, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${phone.name}</td>
                <td>${phone.price}</td>
                <td>
                    <svg 
                    onclick="updatePhone(${index})"
                    class="text-info"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24">

                        <path d="M0 0h24v24H0z" fill="none" />

                        <g fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">

                            <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />

                            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />

                        </g>
                    </svg>

                    <svg class="text-danger"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 1024 1024"
                        onclick="deletePhone(${index})">

                        <path d="M0 0h1024v1024H0z" fill="none" />

                        <path fill="currentColor"
                            d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32m-200 0H360v-72h304z" />

                    </svg>
                </td>
            </tr>
        `;
    });
}

displayPhones();

// delete phone
function deletePhone(index) {
    phones.splice(index, 1);
    displayPhones();
}

// update phone
function updatePhone(updatedIndex) {
    nameInput.value = phones[updatedIndex].name;
    priceInput.value = phones[updatedIndex].price;

    formbutton.textContent = "update";

    index = updatedIndex;
}
