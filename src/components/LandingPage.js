import Navigation from "./Navigation";
import Header from "./Header";
import ListFeatures from "./ListFeatures";
import Features from "./Features";
import Login from "./Login";
import Faucet from "./Faucet";
import RobinetToken from "./RobinetToken";
import Receipt from "./Receipt";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <ListFeatures />
        <Features />
        <Login />
        <Faucet />
        <RobinetToken />
        <Receipt />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
