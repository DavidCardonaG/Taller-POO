export default class Usuario{

    url = 'http://localhost:3800/usuarios/';

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }


    crearPerfil(perfil){
        axios.post(this.url,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    buscarPerfil(email){
        return axios.get(this.url)
       .then(({data}) => {
           //console.log(data.find(user => user.correo === email))
           localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correo === email)))
       })
       
    }

    editarPerfil(perfil,id){
        axios.put(this.url+id,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    eliminarPerfil(id,perfil){
        alert('¿SEGURO QUE DESEA ELIMINAR EL PERFIL ')
        axios.delete(this.url+id,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }
  
    
}