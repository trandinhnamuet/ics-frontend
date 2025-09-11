

import Slide from "./components/Slide";
import ProductSolutionGrid from "./components/ProductSolutionGrid";
import CustomerShow from "./components/CustomerShow";
import IntroICS from "./components/IntroICS";
import NewsOverview from "./components/NewsOverview";

export default function HomePage() {
  return (
    <>
      <Slide />
      <ProductSolutionGrid />
      <IntroICS />
      <NewsOverview />
      <CustomerShow />
    </>
  );
}
