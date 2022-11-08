import { useParams } from 'react-router-dom'

function Show({ catalog  }) {
    const { id } = useParams();
    const product = catalog ? catalog.find(p => p._id === id) : null;
    console.log(product);

    const loading = () => {
        return <h1>Loading . . .</h1>
    };

    const loaded = () => {
        return (
            <section>
                    <h1>{product.name}</h1>
                <div className="productCard">
                    <img style={{ width: 400, height: 500, borderRadius: 10 }}
                        className="product-image" 
                        src={product.image} 
                        alt={product.name} 
                    />
                    <h3>Precio menudeo: $ {product.cost} Litro.</h3>
                    <h3>Precio mayoreo: $ {product.mayoreo} Litro.</h3>
                    <div className="productDescription">
                        <h3>Descripcion:</h3>
                        <h4>{product.description}</h4>
                    </div>
                </div>
            </section>
        )
    };
    return catalog ? loaded() : loading();
}

export default Show;