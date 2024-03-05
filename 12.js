//С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”
  let ul = document.querySelectorAll('ul')
  ul.forEach(element => { element.classList.add('list'); })
  let li = document.querySelectorAll('li')
for(i=0;i<li.length;i=+2){
  li[i].classList.add('item')
}

let aaa = document.querySelectorAll('a')
aaa.forEach(element => { element.classList.add('custom-link'); })
