import Hero from '@/components/home/Hero';
import PropertySearch from '@/components/home/PropertySearch';
import TrustBar from '@/components/home/TrustBar';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import BuyersOwners from '@/components/home/BuyersOwners';
import FinalCta from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <TrustBar />
      <FeaturedProperties />
      <BuyersOwners />
      <FinalCta />
    </>
  );
}
