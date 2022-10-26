const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido=document.getElementById('apellido')
const correo= document.getElementById('correo')
const button = document.getElementById ('submit')
const textarea = document.getElementById('textarea')

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textarea: /^[a-zA-ZÀ-ÿ\s]{1,300}$/, // Letras y espacios, pueden llevar acentos.
 
}

const formValidado ={
    nombre:false,
    apellido:false,
    correo:false,
    textarea:false,

}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateForm()
})

nombre.addEventListener('change', (e)=>{
   if(e.target.value.trim().length >0) formValidado.nombre=true
})

apellido.addEventListener('change', (e)=>{
    if(e.target.value.trim().length >0) formValidado.apellido=true
 })

correo.addEventListener('change', (e)=>{
    if(e.target.value.trim().length >0) formValidado.correo=true
 })
textarea.addEventListener('change', (e)=>{
    if(e.target.value.trim().length >0) formValidado.textarea=true
 })

const validateForm= () =>{
    const formValues= Object.values(formValidado)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) {formulario.submit()}
    else alert('Debe Verificar que los campos esten llenos ')
}


