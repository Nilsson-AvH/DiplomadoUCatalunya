let orders = localStorage.getItem('categoryListObject')
orders = orders ? JSON.parse(orders) : [] /* Esto es un if de una linea */
showOrder()

function addOrder() {
    let orderItem = document.getElementById('order').value // Acá traemos el valor de id="order" del documento html
    let quantityItem = document.getElementById('quantity').value // Acá traemos el valor de id="quantity" del documento html
    let productItem = document.getElementById('product').value // Acá traemos el valor de id="product" del documento html
    let valueItem = document.getElementById('value').value // Acá traemos el valor de id="value" del documento html

    if (orderItem && quantityItem && productItem && valueItem) {
        orders.push({'orderOrder':orderItem, 'quantityOrder':quantityItem, 'productOrder':productItem, 'valueOrder':valueItem})
        showOrder()
    } 
    else if (orderItem=="") {
        alert("Digite alguna mondá en Order")
        document.getElementById('order').focus()
    }
    else if (quantityItem=="") {
        alert("Digite alguna mondá en Quantity")
        document.getElementById('quantity').focus()
    }
    else if (productItem=="") {
        alert('Digite algo en producto')
        document.getElementById("product").focus()
    }
    else {
        alert('Digite alguna mondá en Value')
        document.getElementById('value').focus()
    }
}

function showOrder() {
    document.getElementById('order').value = ''
    document.getElementById('quantity').value = ''
    document.getElementById('product').value = ''
    document.getElementById('value').value = ''

    let html = ''
    orders.forEach((element, index) => {
        html += `<div class="col-3 mb-3"> ${element.orderOrder} </div>`
        html += `<div class="col-2 mb-3"> ${element.quantityOrder} </div>`
        html += `<div class="col-3 mb-3"> ${element.productOrder} </div>`
        html += `<div class="col-2 mb-3"> ${element.valueOrder} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteOrder(${index})">X</a> </div>`
    });

    localStorage.setItem('categoryListObject', JSON.stringify(orders))
    document.getElementById('orders').innerHTML = html
}

function deleteOrder(param) {
    orders.splice(param, 1) //Borrar dato
    showOrder()
}