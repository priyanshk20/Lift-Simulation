const lifts = document.querySelector('#noOfLifts');
const floors = document.querySelector('#noOfFloors')
const generate = document.querySelector('#submit');

let liftVal = parseInt(lifts.value);
let floorsVal = parseInt(floors.value);

generate.addEventListener('click', ()=>{
    generateFloors(floors.value);
})


// const validateInput= (a,b) => {
//     if(a<0 || a==NaN || a==){
// alert("Input a valid number");
// return 0;
//     }

//     else if(b<0 || b==NaN || b==""){
//         alert("Input a valid number");
//         return 0;
//     }
// }


const generateFloors = (n) => {

    for(let i=0;i<n;i++){
        let currLevel = `L-${n-i-1}`
        let floorNo = `Floor-${n-i-1}`
        let currFloor = document.createElement('div')
        currFloor.setAttribute('id',floorNo)

        currFloor.classList.add('level')
        currFloor.innerHTML=`
        <p>${floorNo}</p>
    <div class=floor>
      <button id="up">🔼</button>
      <button id="down">🔽</button>
    </div>
        `;
    document.getElementById('simulation').appendChild(currFloor);
    }
}

