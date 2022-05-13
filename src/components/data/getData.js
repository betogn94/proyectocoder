import { productos } from "./data";

const getById = (id, array) => array.find((el) => el.id ===id);

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

export {getProductById};