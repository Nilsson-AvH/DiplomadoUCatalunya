
let items = localStorage.getItem('itemListObject')
items = items ? JSON.parse(items) : [] /*esto es un if de una linea*/
showItem()


function addItem() {
    let nameItem    = document.getElementById('item').value // Acá traemos el valor de id="item" del documento html
    let descripItem = document.getElementById('descrip').value // Acá traemos el valor de id="descrip" del documento html
    let valueItem   = document.getElementById('value').value // Acá traemos el valor de id="value" del documento html

    if (nameItem && descripItem && valueItem){
         items.push({'nombreArticulo':nameItem,'descripArticulo':descripItem,'valorArticulo':valueItem})
         console.log(typeof nameItem)
         showItem()
    }
    else if (nameItem==""){
            alert("Usted no digito una mondá en Nombre")
            document.getElementById('item').focus()
    }
    else if (descripItem==""){
            alert("Usted no digito una mondá en Descripcion")
            document.getElementById('descrip').focus()
    }
    else{
            alert("Usted no digito una mondá en Valor")
            document.getElementById('value').focus()
    }
}


function showItem() {
    document.getElementById('item').value = '' // Limpiamos los campos
    document.getElementById('descrip').value = ''
    document.getElementById('value').value = ''

    let html = ''
    items.forEach((element, index) => {
        html += `<div class="col-3 mb-3"> ${element.nombreArticulo} </div>`
        html += `<div class="col-5 mb-3"> ${element.descripArticulo} </div>`
        html += `<div class="col mb-3"> ${element.valorArticulo} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${index})"> X </a> </div>`
    });

    localStorage.setItem('itemListObject', JSON.stringify(items))
    document.getElementById('items').innerHTML = html // Enviar la informacion al HTML
}

function deleteItem(param) {
    items.splice(param, 1) // Borrar dato
    showItem()
}