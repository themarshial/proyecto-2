class Product{
    constructor(name,description){
        this.name=name;
        this.description=description;
    }
}


class UI{
    addProduct(product){
        const productList = document.getElementById('listaProducto');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card-center-margin">
            <div class="card-body">
                <strong>Usuario</strong>: ${product.name}
                <strong>Description</strong>: ${product.description}
                <a href="#" class="boton-delete-product" name="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
        localStorage.setItem(product.name, product.description);
    }

    resetForm(){
        // document.getElementById('card-center-margin').reset();//este metodo reset resetea el formulario
        localStorage.removeItem('.card-body');
    }
}



const buttonAgregar = document.getElementById('Agregar').addEventListener('click',(e)=>{
    const  text= document.getElementById('inputJuegos').value;
    const description= document.getElementById('inputDescription').value;

    // console.log(text,description);
    const product= new Product(text,description);
    const ui = new UI();

    if(text === ''|| description === '' ){
        console.log('Completa los campos POR FAVOR!!','background:red');
     }

    ui.addProduct(product);
    
});


const eliminarFila = document.getElementById('product-list'.addEventListener('click',(e)=>{
    const ui = new UI();
    ui.resetForm(e.target);
}));


// const text= document.getElementById('inputJuegos');
// const description= document.getElementById('inputDescription');
// const buttonAgregar=document.getElementById('Agregar');
// let list = [];

// const Agregar= () => {
//     console.log('HOLA JONA');
// };

// buttonAgregar.addEventListener("submit", ()=>{
//     console.log(text.value);
//     console.log(description.value);
// //para guardar
//     // localStorage.setItem('user', 'Juan');
//     //para obtener con su clave
//     const nombreUser= localStorage.getItem('user')
//     console.log(nombreUser);
//     // list = JSON.parse(localStorage.getItem('listOp'));
//     // if(list === null){
//     //     list = [];
//     // }
    
    

// });