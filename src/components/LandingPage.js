import Navigation from "./Navigation";
import Header from "./Header";
import Login from "./Login";
import Faucet from "./Faucet";
import RobinetToken from "./RobinetToken";
import Feature from "./Feature";
import Features from "./Features";
import Receipt from "./Receipt";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />

      <main>
        <Login />
        <Faucet />
        <RobinetToken />
        <Feature />

        <Features />
        <Receipt />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;