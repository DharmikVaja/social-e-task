import "./App.css";
import DesignAvatar from "./components/Pages/DesignAvatar/DesignAvatar";
import DownloadComp from "./components/Pages/DownloadComp/DownloadComp";
import FollowUs from "./components/Pages/FollowUs/FollowUs";
import Footer from "./components/Pages/Footer/Footer";
import HangOut from "./components/Pages/HangOut/HangOut";
import Hero from "./components/Pages/Hero/Hero";
import InterestedJoin from "./components/Pages/IntersetedJoin/InterestedJoin";
import MetaverseSlide from "./components/Pages/MetaverseSlide/MetaverseSlide";
// import ParticleBackground from "./components/Pages/Particle/ParticleBackground";
import ReadyCarousel from "./components/Pages/ReadyCarousel/ReadyCarousel";

function App() {
  return (
    <>
      {/* <ParticleBackground /> */}
      <Hero />
      <DownloadComp/>
      <DesignAvatar/>
      <HangOut/>
      <MetaverseSlide/>
      <ReadyCarousel/>
      <InterestedJoin/>
      <FollowUs/>
      <Footer/>
    </>
  );
}

export default App;
