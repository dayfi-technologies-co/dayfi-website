import Faq from "./faq";
import FooterTop from "./footerTop";
import HomeHero from "./hero";
import HomeProducts from "./homeProducts";
import JoinUs from "./joinUs";

export default function Page() {
  return (
    <div className="bg-[#F6F5FE]">
      <HomeHero />
      <HomeProducts />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}
