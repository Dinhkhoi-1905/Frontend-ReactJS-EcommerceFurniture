import { useParams } from 'react-router-dom';
import ProductDataService from "../services/ProductService";
import { useEffect, useState } from 'react';
const ProductDetail = () => {
    const { id } = useParams();
    const initialProductState = {
        id: null,
        title: "",
        description: "",
        published: false
      };
    useEffect(() => {
        if (id)
          getProduct(id);
      }, [id]);
    const [product, setProduct] = useState(initialProductState);
    const getProduct = id => {
      ProductDataService.get(id)
        .then(response => {
             setProduct(response.data);
            // product = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    // console.log({id});
    console.log({product});

    // const product = ProductDataService.get(id)
 
    return ( 
      <div>
        <h2>{product.name}</h2>
        {/* <img src={product.image} alt={product.name} /> */}
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
}
// function ProductDetail(props) {
// }

export default ProductDetail;




