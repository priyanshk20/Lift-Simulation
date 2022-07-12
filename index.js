const lifts = document.querySelector('#noOfLifts');
const floors = document.querySelector('#noOfFloors')
const generate = document.querySelector('#submit');

let liftVal = (lifts.value);
let floorsVal = (floors.value);

generate.addEventListener('click', ()=>{
    console.log(lifts.value);
    console.log(floors.value);
    validateInput(floorsVal,liftVal);
})


const validateInput= (a,b) => {
    if(a<0 || a==NaN || a==""){
alert("Input a valid number");
return 0;
    }

    else if(b<0 || b==NaN || b==""){
        alert("Input a valid number");
        return 0;
    }
}

