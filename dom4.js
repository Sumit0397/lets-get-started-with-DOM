// QUERYSELECTOR
// const seconditem = document.querySelector('.list-group-item:nth-child(2)');
// //console.log(seconditem);
// seconditem.style.backgroundColor = 'green';

// const thirditem = document.querySelector('.list-group-item:nth-child(3)');
// // console.log(thirditem);
// thirditem.style.display = 'none';


// QUERYSELECTORALL
const items = document.querySelectorAll('.list-group-item');
//console.log(items);
items[1].style.color = 'green';

const odd = document.querySelectorAll('li:nth-child(odd)')

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}