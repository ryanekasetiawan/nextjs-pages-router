import { useSession } from "next-auth/react";
import Head from "next/head";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Profile</h1>
      <h2>{data && data.user.fullname}</h2>
    </div>
  );
};

export default ProfilePage;
