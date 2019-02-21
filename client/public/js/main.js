'use strict' 

// Funciones generales que se cargaran en toda la pagina

async function formToJSON(formID){
    let json = {}
    // Obtenemos el formulario
    let body = new FormData(document.querySelector(formID));  
    // Evitamos se que corra asincronicamente con 'async away'
   await body.forEach((value, key, parent)=>{
    //    Recorremos sus campos y guardamos los datos en un objeto json
       json[key] = value;
   })
   
//    retornamos el objeto json con los datos
   return json;

}

function ajaxSuccess(res, next){
    if(res.ok){
       next(res)
    }
    else{
        alert(res.msg)
    }
}

async function login(e){
    e.preventDefault(); 
    console.log('on login function()')

    let data = await formToJSON('#login-form') 
    console.log(data) 

    $.ajax({
        url: 'account/login',
        type: 'POST',
        data: JSON.stringify(data),
        "contentType": 'application/json',
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                localStorage.setItem('token', value.token);
                localStorage.setItem('user', JSON.stringify(value.user));
                location = 'admin/'+ value.token;
            })
            
        },
        error: (err)=>{
            console.log(err);
        },
    }) 
    return false;
}