import { Hero } from './components/Hero';
import { BrandCardGrid } from './components/BrandCardGrid';
import { DisclaimerBar } from './components/DisclaimerBar';
import { AboutSection } from './components/AboutSection';
import { MobilePopupModal } from './components/MobilePopupModal';
import { brands } from './data/brands';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const gclid = typeof searchParams.gclid === 'string' ? searchParams.gclid : undefined;

  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      <section id="brands" className="container mx-auto px-4 -mt-10 relative z-20">
        <BrandCardGrid brands={brands} gclid={gclid} />
      </section>

      <DisclaimerBar />
      
      <AboutSection />

      {/* Mobile-only Modal triggered by GCLID */}
      <MobilePopupModal brands={brands} gclid={gclid} />
    </div>
  );
}
