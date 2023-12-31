import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ooooopsss...</h1>
      <h2>Page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
