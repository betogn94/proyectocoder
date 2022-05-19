//import { productos } from "./data";

/*const getById = (id, array) => array.find((el) => el.id ===id);

const getProducts = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

const getProductById = async (id, setState) => {
    try {
        const result = await getProducts;
        setState(getById(id,result));
    }   catch(error) {
        console.log(error);
    }
};

export {getProductById}; */

const productos = [
    {
        name: 'Supreme Hoodie Black',
        categories: 'streetwear',
        price: 200,
        thumbnail:
            'https://assets.supremenewyork.com/229568/ma/F2BQr0KFGaQ.jpg',
        description:'Brushed-back fleece with rib gussets and pouch pocket. Tackle twill logo applique with metal studs at chest',    
        stock: 10,
        id: '1',    
    },
    {
        name: 'Supreme Hoodie White',
        categories: 'streetwear',
        price: 250,
        thumbnail:
            'https://assets.supremenewyork.com/229576/ma/1yoqeTcrbp4.jpg',
        description:'Brushed-back fleece with rib gussets and pouch pocket. Tackle twill logo applique with metal studs at chest',    
        stock: 5,
        id: '2',
    },
    {
        name: 'Supreme Sweater Black',
        categories: 'streetwear',
        price: 180,
        thumbnail:
            'https://assets.supremenewyork.com/228787/ma/poQfRxWgJ_c.jpg',
        description:'All cotton crewneck with printed graphic. High density silicone printed logos on front. Made exclusively for Supreme.',  
        stock: 12,
        id: '3',
    },
    {
        name: 'Supreme Skate Plat',
        categories: 'skate',
        price: 350,
        thumbnail:
            'https://assets.supremenewyork.com/231604/ma/ykhaaJQBPEE.jpg',
        description:'Skate Pro color Plat with natural veneer and black top ply. Printed logo on bottom with printed World Famous and box logo on top',  
        stock: 5,
        id: '4',
    },
    {
        name: 'Supreme Skate Gold',
        categories: 'skate',
        price: 390,
        thumbnail:
            'https://assets.supremenewyork.com/231605/ma/CpPmzuW6nU4.jpg',
        description:'Skate Pro color Gold with natural veneer and black top ply. Printed logo on bottom with printed World Famous and box logo on top',  
        stock: 3,
        id: '5',
    },
    {
        name: 'Supreme Wheels',
        categories: 'skate',
        price: 95,
        thumbnail:
            'https://assets.supremenewyork.com/231455/ma/lSjAGZIHXnE.jpg',
        description:'Skate Wheels with custom Supreme art. Each size sold separetely as a set of four wheels. Made exclusesively for Supreme.',  
        stock: 20,
        id: '6',
    },
];

export const getData = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const query = id ? productos.find(producto => producto.id === id) : productos
            resolve(query)
        }, 2000)
    })
}