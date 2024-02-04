const DOMSelectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    bday: document.querySelector(".bday"),
    container: document.querySelector(".container"),
    button: document.querySelector(".display"),
}
function bye(){
    DOMSelectors.name.value= "";
    DOMSelectors.bday.value= "";
}
let data =[];
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    let data2 = 
        {
            name: DOMSelectors.name.value,
            bday: DOMSelectors.bday.value
        }

    data.push(data2)
    console.log(data)
    bye()
})
function clearfields(){
    DOMSelectors.container.innerHTML = "";
}

function SortByMonth(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const monthA = new Date(arr[i].bday).getMonth();
            const monthB = new Date(arr[j].bday).getMonth();
            if (monthA > monthB) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
        }}}}

function insertcards(arr){
    SortByMonth(arr)
    arr.forEach((data) => {
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
            <h2 class="nam">${"Name: "+data.name}</h2>
            <h2 class="bda">${"Birthday: "+data.bday}</h2>
        </div>`
        )})}

DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault();
    clearfields()
    insertcards(data)})