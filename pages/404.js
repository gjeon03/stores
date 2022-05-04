import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return <h1>404 - Page Not Found</h1>;
}
