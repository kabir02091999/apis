
var formulario = document.getElementById("enviar");
var tarea = document.getElementById("formulario");
formulario.addEventListener("click" ,enviar);
var res = document.getElementById("respuesta");

agregar();

function agregar(){
    res.innerHTML=``;
    fetch("http://localhost/practica1/practica1.4/baque/datos.php")
    .then(dato=>dato.json())
    .then(dato =>{
        
        //console.log(dato.length);
        
        for (let index = 0; index < dato.length; index++) {
            //console.log(dato[index].tarea);
            var id=dato[index].if;
            res.innerHTML+=`
                <div id="${dato[index].if}">
    
                    <p>${dato[index].tarea}</p>
                    <button  onclick="borrar('${id}}')">borrar</button>
                    <input type="button" onclick="edita('${id}','${dato[index].tarea}')" value="editar">

                </div>`;
    
        }
        
    })
    
    }

function enviar() {
        var datos = new FormData(tarea);//ojo con esto estas agarrando el form del html
        //console.log(datos);
        fetch("http://localhost:80/practica1/practica1.4/baque/purevaphp.php",{
        method:"POST",body: datos
        })
        .then(res => res.json())
        .then(data =>{
        
            //console.log(data);
            //console.log("la peticion termino")
            agregar();
    
        })

}

function borrar(id){
    var datos= new FormData();//ojo 
    datos.append("id",id);//para poder enviar al body
    datos.append("aaa",false);
    datos.append("ccc",39);

    console.log(id);
    fetch("http://localhost:80/practica1/practica1.4/baque/id.php",{
        method:"POST",body: datos
    })
    .then(res => res.text())
    .then(data =>{
    
        //console.log(data);
        //console.log("la peticion termino")
        agregar();

    })

}

function edita(id,tex){

    //console.log(id);
    //console.log(tex);
    var cambio=document.getElementById(id);
    var idN= id + "n";
    //console.log(idN);
    
    cambio.innerHTML=`
        
        <p>${tex}</p>
        <button  onclick="borrar('${id}}')">borrar</button>
        <input type="button" onclick="edita('${id}','${tex}')" value="editar">
        <input type="text" id="${idN}" placeholder="cambiar">
        <button  onclick="enviar_datos('${id}','${idN}')">enviar</button>
        
        `;

}

function enviar_datos(id,idN){//ojo id 

    var nuevatarea= document.getElementById(idN);
    //console.log(nuevatarea.value);
    console.log(nuevatarea.value);
    var datos= new FormData();//ojo 
    datos.append("id",id);//para poder enviar al body
    datos.append("nuevo",nuevatarea.value);

    //console.log(id);
    fetch("http://localhost:80/practica1/practica1.4/baque/cambio.php",{
        method:"POST",body: datos
    })
    .then(res => res.text())
    .then(data =>{
    
        //console.log(data);
        var actualisa = document.getElementById(id);
        actualisa.innerHTML=`<div id="${id}">
    
            <p>${nuevatarea.value}</p>
            <button  onclick="borrar('${id}}')">borrar</button>
            <input type="button" onclick="edita('${id}','${nuevatarea.value}')" value="editar">

            </div>`;
    
    })


}