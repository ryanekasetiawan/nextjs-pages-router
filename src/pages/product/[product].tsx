import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detai Product Page </h1>
      <p>Product: {query.product}</p>
    </div>
  )
};

export default DetailProductPage;