  
export default class InterfaceUsuario{
         pintarUsuario(data){
            data.forEach(element => {
                const {nombre,apellido,correo,id} = element
                let print = document.querySelector('.contenedor')
                print.innerHTML +=`
                <div class="card" style="width: 18rem;" >
                    <ul">
                        <li ">NOMBRE = ${nombre}</li>
                        <li ">APELLIDO = ${apellido}</li>
                        <li ">EMAIL = ${correo}</li>
                        <li ">ID KEY = ${id}</li>
                    </ul>
                </div>
                `  
            });
     }

    
}