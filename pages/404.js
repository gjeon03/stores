import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
    </Container>
  );
}
