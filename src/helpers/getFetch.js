const productos = [
    { id: "1",category:'Escalera', name: 'ESCALERAS DE ALUMINIO', picture: 'escalera',stock:5,precio:'$ 50.00',description:'Pala Cuadrada Truper de 40 pulgadas, para mover materiales de poco peso con mayor facilidad en trabajos de construcción. Está fabricada con cabeza de acero al carbón y mango en madera de fresno.' },
    { id: "2",category:'Escalera', name: 'Escalera de Aluminio - 4', picture: 'WERNER',stock:5,precio:'$ 50.00',description:'Escaleras de uso general para su empresa, oficina y hogar.' },
    { id: "3", category:'Pala',name: 'Pala Truper', picture: 'pala',stock:10,precio:25,description:'Pala de la marca truper' },
    { id: "4", category: 'Tambos',name:'TAMBOS DE PLÁSTICO', picture: 'tambo2',stock:10,precio:25,description:'Excelentes para uso en interiores y exteriores. Polietileno libre de corrosión y resistente a abolladuras.' },
    { id: "5", category: 'Cascos',name:'CASCO PARA IMPACTO MENOR', picture: 'casco',stock:10,precio:25,description:'Protección ligera para recorridos en almacén, lectores de contadores y procesadores de alimentos.' },
    { id: "6",category:'Escalera', name: 'ESCALERAS DE FIBRA DE VIDRIO CON EXTENSIÓN', picture: 'werner1',stock:5,precio:'$ 50.00',description:'Trabajar a cierta altura requiere escaleras industriales de alta calidad.'},
    { id: "7",category:'Tambos', name: 'TAMBOS DE PLÁSTICO ROJOS', picture: 'tambo',stock:15,precio:'$ 3,696',description:'Cuando identificar contenidos sea importante, utilice este tambo de alta visibilidad.' },
]

export const getFetch = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(productos)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
})
