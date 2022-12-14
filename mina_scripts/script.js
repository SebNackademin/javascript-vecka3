let classListReference = [];

function filterStudents(filterValue)
{
    let classListElements = document.querySelectorAll(".class-list-item");
    classListElements.forEach((listItem) => {

        const itemName = listItem.querySelector("#class-list-item-name").innerText;
        if(itemName.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        }

    });
}


function createStudent(inputName, inputPhone, inputYears)
{
    // Håller hårdkodade värden samlat vid toppen istället 
    // för att sprida ut dessa i koden/funktionen så andra
    // utvecklare inte behöver leta dessa (eller när du kommer 
    // tillbaka till koden efter ett längre tag).
    const btnText = "Ta bort";
    
    // Hämtar referens till <div class="class-list">
    let classListEl = document.querySelector(".class-list");

    // Skapar vår "container/klassrad":
    // <div class="class-list-item"></div>
    let classListItem = document.createElement("div");
    classListItem.classList.add("class-list-item");
    classListEl.appendChild(classListItem);

    // Skapar elementen som ska vara i klassraden:
    // <span>inputName</span>
    let classListItemName = document.createElement("span");
    classListItemName.id = "class-list-item-name";
    classListItemName.innerText = inputName;
    // <span>inputPhone</span>
    let classListItemPhone = document.createElement("span");
    classListItemPhone.id = "class-list-item-phone";
    classListItemPhone.innerText = inputPhone;
    // <span>inputYears</span>
    let classListItemYears = document.createElement("span");
    classListItemYears.id = "class-list-item-years";
    classListItemYears.innerText = inputYears;
    // <button onclick="removeStudent()">btnText</button>
    let classListItemRemoveBtn = document.createElement("button");
    classListItemRemoveBtn.innerText = btnText;
    classListItemRemoveBtn.onclick = removeStudent;

    // Lägg till elementen i "container/klassraden":
    classListItem.appendChild(classListItemName);
    classListItem.appendChild(classListItemPhone);
    classListItem.appendChild(classListItemYears);
    classListItem.appendChild(classListItemRemoveBtn);

    /* Resultat:
        <div class="class-list-item">
            <span>inputName</span>
            <span>inputPhone</span>
            <span>inputYears</span>
            <button onclick="removeStudent()">btnText</button>
        </div>
    */
}

function removeStudent()
{
    console.log("Vi ska ta bort studenten från listan");
}