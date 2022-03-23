const productos = [
    { id: 1, title: 'Escaleras', picture: 'escalera',stock:5,precio:50,description:'Pala Cuadrada Truper de 40 pulgadas, para mover materiales de poco peso con mayor facilidad en trabajos de construcción. Está fabricada con cabeza de acero al carbón y mango en madera de fresno.' },
    { id: 2, title: 'Palas', picture: 'pala',stock:10,precio:25,description:'Pala de la marca truper' },
    { id: 3, title: 'Palas', picture: 'pala',stock:10,precio:25,description:'Pala de la marca truper' },
    { id: 4, title: 'Palas', picture: 'pala',stock:10,precio:25,description:'Pala de la marca truper' }
]

export const getFetch = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(productos)
         }, 2000)
    } else {
        reject('400 not found')
        
    }
})
