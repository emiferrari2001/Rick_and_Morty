const validate = (name, valor) => {
    //console.log(name)
    //console.log(valor)
    let retorno = {}
    if(name.toString() === 'email'){
        
        if(!/\S+@\S+\.\S+/.test(valor)){
            //msjEmail = 'Ingrese un email válido'
            retorno.email = 'Ingrese un email válido'
            return retorno;
        }
        if(valor.length < 0){
            retorno.email = 'El email no puede estar vacío'
            return retorno;
        }
        if(valor.length > 35){
            retorno.email = 'El email no puede tener más de 35 caracteres'
            return retorno
        }
        retorno.email = '';
    }
    if(name.toString() === 'password'){
        if(!/[A-Z]/.test(valor)){
            retorno.password = 'La password debe incluir al menos una mayúscula';
            return retorno
        }
        if (valor.length < 6 || valor.length > 10){
            retorno.password = 'La password debe tener entre 6 y 10 caracteres'
            return retorno
        }
        retorno.password = '';
    }
    return retorno
}
export default validate;