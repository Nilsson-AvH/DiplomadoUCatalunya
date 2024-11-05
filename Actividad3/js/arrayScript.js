// localStorage
// ---------------
// sessionStorage

let items = localStorage.getItem('itemList')
items = items ? items.split(',') : [] /*esto es un if de una linea*/
showItem()

function addItem() {
    let item = document.getElementById('item').value
    item = item.split(',')
    for (let i = 0; i < item.length; i++) {
        if(item[i]){
            items.push(item[i]) // Agegar dato
            showItem()       
        }
    }
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    for (let i = 0; i < items.length; i++) {
        
        // html = html + '<div class="col-10 mb-3">' + items[i] + '</div>'
        // html = html + '<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem"(' + i + ')"> </a> </div>'
        html += `<div class="col-10 mb-3"> ${items[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
    }

    localStorage.setItem('itemList', items)
    document.getElementById('items').innerHTML = html // Enviar la informacion al HTML
}

function deleteItem(param) {
    items.splice(param, 1) // Borrar dato
    showItem()
}