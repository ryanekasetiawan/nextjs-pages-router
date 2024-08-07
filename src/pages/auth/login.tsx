import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    const { push } = useRouter();

    const handleLogin = () => {
        push("/product");
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
            <p>
                Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>
    )
};

export default LoginPage;