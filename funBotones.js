//variables Globales
let nameGame = document.getElementById('nameGame');
let typeGame = document.getElementById('typeGame');
let descriptionGame = document.getElementById('descriptionGame');
let indexForm = document.getElementById('indexForm');


const agregarRegistro= ()=>{
    const newGame = {
        name: nameGame.value,
        type: typeGame.value,
        description: descriptionGame.value
    }
    // validacion(newGame);
    console.log("validcaion: ",validacion(newGame));
    //////////////crea un nuevo elemento
    if(validacion(newGame)){
        let listProd = JSON.parse(localStorage.getItem('listProduct'));
        listProd === null ? listProd=[]: console.log('ya tienes un registro guardado');
        listProd.push(newGame);
        localStorage.setItem('listProduct',JSON.stringify(listProd));
       clearForm();
       showTable();
    }
}

const showTable= ()=>{
    let listProd = JSON.parse(localStorage.getItem('listProduct'));

    listProd === null ? listProd=[]: console.log('ya tienes un registro guardado en showtable');

    document.getElementById('tbodyTable').innerHTML='';
    let row='';
    listProd.forEach((element, index) => {
        row += `<tr>
                <td>${index + 1}</td>
                <td>${element.name}</td>
                <td>${element.type}</td>
                <td>${element.description}</td>
                <td>
                <button class="btn-editar" onClick="search(${index})">Editar</button>
                <button class="btn-eliminar" onClick="deleteItem(${index})">Eliminar</button></td>
        </tr>
        `
    });
    document.getElementById('tbodyTable').innerHTML= row;
}

const clearForm= ()=>{
    nameGame.value='';
    typeGame.value='';
    descriptionGame.value='';
}

const validacion = (newGame)=>{
    const {name, type, description} = newGame;
    (name !=='' && type !== '' && description !== '') ? alert(`Nombre: ${name} Tipo: ${type} Descripcion: ${description}`) : alert('campo esta vacio, reviselo!!') ;
    if(name ===''){
        return false;
    }else{
        return true;
    }
};

const search = (index)=>{
    let listProd = JSON.parse(localStorage.getItem('listProduct'));
    // console.log(listProd[index]);
    nameGame.value = listProd[index].name;
    typeGame.value = listProd[index].type;
    descriptionGame.value = listProd[index].description;
    indexForm.value = index;

    document.getElementById('btnAction').innerText='Editar';
}
const deleteItem = (index)=>{
    console.log(index);

}

showTable();
const actualizar = ()=>{

    console.log('hola estas ahi_');
}
const LimpiarRegistro= ()=>{
    let listProd = JSON.parse(localStorage.getItem('listProduct'));
    listProd.reset();
    console.log();
}
const ActualizarRegistro= ()=>{
    console.log('hola estas ahi_');
}



