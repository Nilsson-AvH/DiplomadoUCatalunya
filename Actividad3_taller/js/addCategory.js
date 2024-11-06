let categs = localStorage.getItem('categoryListArray') // Traemos lo que esta en localStorage en categs
categs = categs ? categs.split(',') : [] // separamos lo qye haya en categs en comas y si no hay nada creamos arreglo vacio
showCategories()

function addCategory(){
    let category = document.getElementById('category').value // Acá traemos el valor de id="category" del documento html
    category = category.split(',') // Lo separamos con comas
    for (let i = 0; i < category.length; i++) {
        if (category[i]) {
            categs.push(category[i])
            showCategories()
        }       
    }
}

function showCategories(){
    document.getElementById('category').value = '' // Limpiamos los campos
    let html = ''
    for (let i = 0; i < categs.length; i++) {
        html += `<div class="col-10 mb-3"> ${categs[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deletecategories(${i})"> X </a> </div>`
    }

    localStorage.setItem('categoryListArray', categs)
    document.getElementById('categorys').innerHTML = html // Enviar la informacion al HTML
}

function deletecategories(param) {
    categs.splice(param, 1) // Borrar dato
    showCategories()
}