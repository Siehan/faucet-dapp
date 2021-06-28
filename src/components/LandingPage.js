//ok
import Navigation from "./Navigation";
import Header from "./Header";
import Login from "./Login";
import Faucet from "./Faucet";
import RobinetToken from "./RobinetToken";
import Features from "./Features";
import ListFeatures from "./ListFeatures";
import Receipt from "./Receipt";
import Pricing from "./Pricing";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Features />
        <ListFeatures />
        <Login />
        <Faucet />
        <RobinetToken />
        <Receipt />
        <Pricing />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
