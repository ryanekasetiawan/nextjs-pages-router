// import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
// import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();
  // client-side
  //   const { data, error, isLoading } = useSWR(
  //     `/api/product/${query.product}`,
  //     fetcher
  //   );

  return (
    <div>
      {/* client-side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/* server-side & static-side*/}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// server-side rendering
export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  //fetch data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}

// static-site generation
// fungsi ini digunakan untuk mendapatkan daftar semua produk yang ada di database
// dan mengembalikan path yang dapat digunakan untuk static generation
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       product: product.id,
//     },
//   }));

//   return { paths, fallback: false };
// }

// Fungsi getStaticProps digunakan untuk mendapatkan data secara statis
// Fungsi ini akan dipanggil setiap kali saat halaman diload secara statis
// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   //fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
