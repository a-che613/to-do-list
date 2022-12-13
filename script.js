
 let button = document.getElementById('add');
 let input = document.getElementById('inp');
 let first = document.getElementById('p1');
 let btns = document.querySelector('.bankai');
 let inputFields = document.querySelector('.value');

let sum = 0;
function addTask() {
  button.addEventListener('click', () => {
  sum+=1;
  first.innerHTML += `<div class="ddd">
                        <input type="checkbox" class="check">
                        <input type="text" data-target=${sum} value="${input.value}" class="value">
                        <button class="bankai" data-trigger=${sum}>X</button>
                      </div>`;
  if (input.value != ""){
    input.value = "";
  }
  readData()

  })


}

function readData() {
  console.log(btns, inputFields);
}

  addTask();

 







 
// let check_box = document.querySelector('#che');


// check_box.addEventListener('click', () => {
//   let display = document.querySelector('#val');
//   display.style.backgroundColor = 'green';
// })

let check_bx = document.querySelector('.check');

check_bx.addEventListener('click', () => {
  let disp = document.querySelector('.value');
  disp.style.backgroundColor = 'green';
})