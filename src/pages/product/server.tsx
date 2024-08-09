import { ProductType } from "@/types/product.type";
import ProductView from "@/views/Product";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// dipanggil setiap melakukan request
export async function getServerSideProps() {
  //fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
