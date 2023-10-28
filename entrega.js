class ProductManager {
    constructor(){
        this.products = []; 
    }

    addProduct(newProduct){
        //verificar que el 'code' no se repita
        if(this.products.some(product => product.code === newProduct.code)){
            console.log(`El producto con código "${newProduct.code}" ya existe.`);
        } 
        else {
            //crear nuevo producto y agregarlo a Products[]
            const p = new Products (newProduct, generarId());
            this.products.push(p);
        }
    }

    //obtener los productos
    get Productos(){
        return this.products.map(e => e); 
    }
    getProductById(id){
        const product = this.products.find(e => e.id === id)
        if(!product) {throw new Error(`El producto con el id ${id} no existe`)}
        else {console.log(`Producto encontrado`)}
    }
}

class Products {
    constructor({code, title, description, price, thumbnail, stock}, id){
        this.id = id;
        this.code = notNull(code, 'code')
        this.title = notNull(title, 'title')
        this.description = notNull(description, 'description')
        this.price = notNull(price, 'price')
        this.thumbnail = notNull(thumbnail, 'thumbnail')
        this.stock = notNull(stock, 'stock')
    }
    /* asPOJO() {
        return {
            code: this.code,
            title: this.title,
            description: this.description,
            price: this.price, 
            thumbnail: this.thumbnail,
            stock: this.stock
        }
    } */
}
//verificar que todos los campos sean obligatorios
function notNull(valor, propiedad) {
    if (valor === null || valor === undefined) {
        throw new Error(`el valor de ${propiedad} no puede ser null`)
    }
    return valor;
}

//generar id autoincrementable
let id = 1; 
function generarId(){
    return id++; 
}


//crear productos y agregarlos mediante addProducts()
const pm = new ProductManager(); 

const p1 = {
    code: "product1",
    title: "Product 1",
    description: "Descripción del Producto 1",
    price: 30.00,
    thumbnail: "producto1.jpg",
    stock: 100
}
const p2 = {
    code: "product2",
    title: "Product 2",
    description: "Descripción del Producto 2",
    price: 50.00,
    thumbnail: "producto2.jpg",
    stock: 200
}

pm.addProduct(p1)
pm.addProduct(p2)

console.log(pm.Productos)