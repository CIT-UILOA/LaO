import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "./components/Nav";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Title>Law & Order</Title>
            <Nav />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
