import { About3 } from "@/components/about-3";
import bananaImage from "@/assets/banana_main.png";
import bananaLogo from "@/assets/bananalogo.png";
import Alden from "@/assets/Alden.jpg";

const About = () => {
  return (
    <About3
      title="About Us"
      description="The Banana Cheese Spot is your go-to destination for the most unexpected yet delicious snack combo—crispy fried bananas and gooey melted cheese, all rolled into one perfect bite!"
      mainImage={{
        src: bananaImage,
        alt: "placeholder",
      }}
      breakout={{
        src: bananaLogo,
        alt: "logo",
        title: "More Than Just a Snack—It’s a Craving",
        description:
          "From late-night cravings to study break treats, we’ve served thousands of students and foodies with our signature banana cheese rolls. Freshly made, perfectly crisped, and totally addicting.",
        buttonText: "Order Now",
        buttonUrl: Alden,
      }}
      achievementsTitle="What We've Cooked Up So Far"
      achievementsDescription="We may have started as a small campus stall, but your love for our snacks turned us into a local favorite."
      achievements={[
        { label: "Rolls Served", value: "300+" },
        { label: "Satisfied Snackers", value: "800+" },
        { label: "Social Shares", value: "200+" },
        { label: "Campus Events Catered", value: "10+" },
      ]}
    />
  );
};

export { About };
