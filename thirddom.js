const li = document.getElementsByTagName('li');
// console.log(li[4].textContent);
for(let i=0; i<li.length; i++){
    li[i].style.background='aqua';
}
// last li tag does not contain any class name so
// we can not acces the property of the last 
// list item by using 
// getElementsByClassName