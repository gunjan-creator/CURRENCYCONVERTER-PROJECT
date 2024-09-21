/*const BASE_URL = link;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for (let select of dropdowns){
    for (currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD"){
        newOption.selected = "selected";
    }
    if (select.name === "to" && currCode === "INR"){
        newOption.selected = "selected";      
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    });
    select.append(newOption);
    }
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelectorAll("img");
    img.src = newSrc;

};

btn.addEventListener("click", async (evt) =>{
evt.peventDefault();
let amount = document.querySelectorAll(".amount input");
let amtVal  = amount.value;
if(amtVal === "" || amtVal < 1){
    amtval = 1;
    amount.value = "1";
}
//console.log(fromCurr.value, toCurr.value)
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
//console.log(rate);

let finalAmount = amtVal * rate;
msg.innerText = `${fromCurrvalue} = ${finalAmount} ${toCurr.value}`
});
*/
