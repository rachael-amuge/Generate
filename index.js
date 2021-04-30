// var button = document.getElementsByClassName('btn');
// var input = document.getElementById('display');
// var arr = Array.from(button)
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener('click', function (e) {
//       input.value +=  e.currentTarget.innerHTML;
//     })
// }


const input = document.querySelector('.calculator-screen');
const buttons = Array.from(document.querySelectorAll('button'))

for(let i = 0; i <buttons.length;i++){
  buttons[i].addEventListener('click', function(){
    input.value += buttons.innerHTML;
  })
}