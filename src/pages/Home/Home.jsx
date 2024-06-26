import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import Subscribe from "../../components/Subscribe/Subscribe";
import Sponsor from "../../components/Sponsor/Sponsor";
import {
  HeroWrapper,
  HomeContainer,
  HeroTextWrapper,
  CatalogBtn,
  HeroTitle,
  HeroText,
  HeroTitleSpan,
  AnimatedText,
} from "./Home.styled";

const textAnimate = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
    },
  },
};

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - Home Page</title>
          <meta
            name="description"
            content="Unlock boundless journeys with Camp On Wheels. Rent a camping car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."
          />
          <meta
            name="keywords"
            content="camping car rental, adventure travel, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <HomeContainer>
        <HeroWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <HeroTextWrapper>
              <HeroTitle>
                Discover the Freedom of Mobile Exploration with{" "}
                <HeroTitleSpan>Camp On Wheels</HeroTitleSpan>
              </HeroTitle>
              <HeroText>
                Embark on unforgettable journeys with CampOnWheels, where every
                road leads to new adventures. With our fleet of comfortable and
                fully-equipped camping cars, you can roam wherever your
                wanderlust takes you, and unwind amidst nature's embrace. Start
                your journey today and experience the thrill of the open road,
                without sacrificing the comforts of home.
              </HeroText>
              <div style={{ textAlign: "end" }}>
                <CatalogBtn to="catalog">View our Catalog</CatalogBtn>
              </div>
            </HeroTextWrapper>
          </motion.div>
          <AnimatedText>
            <motion.div
              variants={textAnimate}
              initial="initial"
              animate="animate"
            >
              Camp On Wheels
            </motion.div>
          </AnimatedText>
        </HeroWrapper>
        <About />
        <Subscribe />
        <Testimonials />
        <Sponsor />
      </HomeContainer>
    </>
  );
}

export default Home;
