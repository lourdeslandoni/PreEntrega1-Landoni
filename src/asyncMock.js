import cartuPocket2 from "./img/cartuPocket2.png"
import cartuPeque from "./img/cartuPeque.png"
import cartuNeceser from "./img/cartuNeceser.png"
import cartuNeceserXL from "./img/cartuNeceserXL.png"
import agendaTravel from "./img/agendaTravel.png"
import agendaZoo from "./img/agendaZoo.png"
import agendaBullet from "./img/agendaBullet.png"
import agendaDinos from "./img/agendaDinos.png"
import comboPerritos from "./img/comboPerritos.png"
import comboMatero from "./img/comboMatero.png"
import comboLibretas from "./img/comboLibretas.png"
import comboClean from "./img/comboClean.png"

const products = [
    { 
        id: '1', 
        name: 'Cartu Pocket', 
        price: 350, 
        category: 'cartuchera', 
        img: cartuPocket2, 
        stock: 10, 
        description:'Medidas expresadas en (largo x alto x ancho): (18 x 5 x 6) cm'
    },
    { 
        id: '2', 
        name: 'Cartu Peque', 
        price: 550, 
        category: 'cartuchera', 
        img: cartuPeque, 
        stock: 10, 
        description:'Medidas expresadas en (largo x alto x ancho): (18 x 7 x 8) cm'
    },
    { 
        id: '3', 
        name: 'Cartu Neceser', 
        price: 700, 
        category: 'cartuchera', 
        img: cartuNeceser, 
        stock: 10, 
        description:'Medidas expresadas en (largo x alto x ancho): (20 x 10 x 8) cm'
    },
    { 
        id: '4', 
        name: 'Cartu Neceser XL', 
        price: 900, 
        category: 'cartuchera', 
        img: cartuNeceserXL, 
        stock: 10, 
        description:'Medidas expresadas en (largo x alto x ancho): (23 x 19 x 12) cm'
    },
    { 
        id: '5', 
        name: 'Modelo Travel', 
        price: 350, 
        category: 'agenda', 
        img: agendaTravel, 
        stock: 10, 
        description:'Agenda 2023 con diseño personalizado'
    },
    { 
        id: '6', 
        name: 'Modelo Zoo', 
        price: 550, 
        category: 'agenda', 
        img: agendaZoo, 
        stock: 10, 
        description:'Agenda 2023 con diseño personalizado'
    },
    { 
        id: '7', 
        name: 'Modelo Bullet', 
        price: 650, 
        category: 'agenda', 
        img: agendaBullet, 
        stock: 10, 
        description:'Agenda 2023 con diseño personalizado'
    },
    { 
        id: '8', 
        name: 'Modelo Dinos', 
        price: 650, 
        category: 'agenda', 
        img: agendaDinos, 
        stock: 10, 
        description:'Agenda 2023 con diseño personalizado'
    },
    { 
        id: '9', 
        name: 'Combo Perritos', 
        price: 950, 
        category: 'combo', 
        img: comboPerritos, 
        stock: 10, 
        description:'Incluye Bolso A4 + Cartu "Neceser"'
    },
    { 
        id: '10', 
        name: 'Combo Matero', 
        price: 1000, 
        category: 'combo', 
        img: comboMatero, 
        stock: 10, 
        description:'Incluye Bolso Matero + Porta Mate + Yerbero'
    },
    { 
        id: '11', 
        name: 'Combo Libretas', 
        price: 700, 
        category: 'combo', 
        img: comboLibretas, 
        stock: 10, 
        description:'Incluye Libretas tamaño A6 (X2)'
    },
    { 
        id: '12', 
        name: 'Combo Clean', 
        price: 800, 
        category: 'combo', 
        img:comboClean, 
        stock: 10, 
        description:'Incluye Cestito + Jabón Artesanal a elección'
    },  
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(products => products.id === id))
        }, 2000)
    })
}