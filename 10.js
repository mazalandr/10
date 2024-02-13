//task1
//Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)
console.log("На компьютере с ОС ${navigator.platform}   с помощью браузера  ${navigator.userAgent)  я открыл страничку  ${location.href} ")

//task2
//В файле html есть разметка:
/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */
// Вывести в консоль каждое из имен (содержимое каждого li).
// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)
let names = document.querySelectorAll('li')
names.forEach(el =>{
    console.log(el.textContent)
})

//task3
//Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
for (let i = 0; i < names.length; i++) {
  names[i].textContent = i;
}

//task4
//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptatum velit quibusdam voluptatem! Dolorum, exercitationem tempora? Possimus exercitationem fuga corporis harum suscipit vel distinctio doloribus dolorum repudiandae. Beatae, quo saepe?'
paragraph.style.fontsize = '36px';
paragraph.style.fontweight = 'bold';
document.body.append(paragraph)

//task5
//Написать в html тег заголовка с текстом "Сегодня:" 
//После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
let date = new Date() 
let t5 = document.getElementById('data')
let t5data = date.toLocaleDateString( 'ru-RU' )
t5.innerText = t5data

//task6
//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
function makeTag(nameT, colorT, contentT){
  let tag = document.createElement(nameT);
  tag.style.color = colorT
  tag.innerText = contentT
  return tag
}
let p =makeTag('p','red','dhbcchc')
let h3 = makeTag('h3','yellow','fkeswcfwww')
let a = makeTag('a','black','fekoeeeee')
console.log(p)
console.log(h3)
console.log(a)
document.body.append(p)
document.body.append(h3)
document.body.append(a)
//task7
//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.getElementById('select')
for(let i=1960; i < 2020; i++){
  let years = document.createElement('options')
  years.value = i
  years.innerText = i
  select.appendChild(years)
}

//task8
//Вставить в страницу (в html документ) ul.
//Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
const clients = [
  {name: "Женя", order: true},
  {name: "Кристина", order: true},
  {name: "Павел", order: false},
  {name: "Виолетта", order: false},
  {name: "Костя", order: true}
]
let ul = document.getElementById('ul')
for(i=0;i<clients.length;i++){
  let li = document.createElement('li')
  let name = clients[i].name
  let payed = clients.order === true? ' оплатил ':' отменил '
  li.innerText='Клиент '+name + payed + 'заказ'
  ul.append(li)
}  

//task9
//Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
let div = document.createElement('div')
div.background='yellow'
div.pading = '10px'
div.height = '40px'
for(i=0;i<linksArr.length;i++){
  let a = document.createElement('a')
  a.innerText(linksArr[i])
  a.setAttribute('href', linksArr[i])
  a.setAttribute('target', '_blank')
  div.append(a)
}
document.body.append(div)

//task10
//Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
let elements = document.getElementsByClassName("forRemove");
for (let element of elements) {
  element.remove();
}