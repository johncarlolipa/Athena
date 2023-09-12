import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="container">
      <h1>Ooooopsss...</h1>
      <h2>Page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
