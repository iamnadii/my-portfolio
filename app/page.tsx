import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import { NavigationMenuDemo } from '@components/Nav';
import Projects from '@components/Projects';

export default function Home() {
    return (
        <div>
            <NavigationMenuDemo />
            <div className="flex flex-col gap-20">
                <div className="max-w-[1024px] my-0 mx-auto">
                    <Hero />
                </div>
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
