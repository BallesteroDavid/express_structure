// ici le controller pour mon crud products
let productId = 3;
const products = [
    {id: 1, name: 'stylo', price: 2},
    {id: 2, name: 'stylo', price: 3},
]

exports.listProducts = (req, res) => {
    
    // récupération des produits en bdd dans la variable products
    res.status(200).json({
        success: true,
        message: 'liste des produits',
        data: products
    });
}

// logique affichage d'un produit
exports.getProductsId = (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    
    if(!product){
        // gestion d'erreur si pas de produit trouvé
        res.status(404).json({
            success: false,
            message: "produit non trouvé",
            data: null
        });
    }

    // 200 produit trouvé

    res.status(200).json({
        success: true,
        message: 'produit trouvé',
        data: product
    })
}

// ajout d'un produit
exports.createProduct = (req, res) => {
    const {name, price} = req.body
    
    if(!name || !price || typeof price !== 'number') {
        res.status(400).json({
            success: false,
            message: 'name string et price int obligatoire',
            data: null
        });
    };

    // création d'un objet produit avec id auto-increment
    const newProduct = {id: productId++, name, price};
    // injecte l'objet dans le tableau
    products.push(newProduct);
    
    console.log(products);
    
    res.status(201).json({
        success: true,
        message: 'produit crée',
        data: newProduct
    })
}

// logique test
exports.test = (req, res) =>{
    console.log('route test de mon controller prduct');
    res.send('route test de mon controller product');
}
