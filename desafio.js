class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(producto){
        if(!this.isProductValid(producto)){
            console.log("Error el producto ingresado no es válido")
            return
        }
        
        if(this.isCodeDuplicate(producto.code)){
            console.log("Error el código del producto ya ha sido utilizado")
            return
        }

        producto.id = this.nextId++
        this.products.push(producto)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const producto_encontrado = this.products.find( (producto)=> producto.id  === id )
        if(producto_encontrado){
            return producto_encontrado
        }else{
            console.log("Error el producto solicitado no ha sido encontrado")
        }
    }

    isProductValid(producto){
        return(
            producto.title &&
            producto.description &&
            producto.price &&
            producto.thumbnail &&
            producto.code &&
            producto.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some( (producto)=> producto.code === code)
    }

}


// crear una instancia de ProductManager
const productManager = new ProductManager()

// Agregar productos
productManager.addProduct({
    title: "Producto 1",
    description: "Descripcion del producto 1",
    price: 8,
    thumbnail: "./imagenProductoA.jpg",
    code: "P-001",
    stock: 5
})

productManager.addProduct({
    title: "Producto 2",
    description: "Descripcion del producto 2",
    price: 10,
    thumbnail: "./imagenProductoB.jpg",
    code: "P-002",
    stock: 9
})

// Obtener los productos
const productsList = productManager.getProducts()
console.log(productsList)

// Obtener productos por su ID
const productId = productManager.getProductById(2)
console.log(productId)

// Obtener producto inexistente
const noProduct = productManager.getProductById(8)