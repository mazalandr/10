//С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”
  let ul = document.getElementsByTagName('ul')
for(i=0;i<ul.length;i=+2){
  let ull = ul[i]
  ull.setAttribute('class','item')
}

let aaa = document.getElementsByTagName('a')
for(i=0;i<aaa.length;i=+2){
    let aa = aaa[i]
    aa.setAttribute('class','custom-link')
  }
