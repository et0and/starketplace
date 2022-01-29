import HomeHeader from './Header/HomeHeader';
import Footer from './Footer/Footer';

export default function About() {
    return (
        <div className="layout-container">
            <HomeHeader />

            <section className="layout">
                <div className="measure-narrow hero-text">
                <p>Te Wāhi Auaha (literally 'the making space') is a makerspace at Takapuna Grammar School, Tāmaki Makaurau.
                </p>
                <p>
                    Presently, it has two Ultimaker 3D printers, a computer suite with Adobe Creative Cloud, a laser cutter/engraver, a t-shirt + mug press, and a wide range of hand tools + materials. 
                </p>

                <p>
                    The space is open by appointment for individual projects. Otherwise, the space hosts ArtLab and Robotics Club every Tuesday after school for students to come and work on their projects. 
                </p>
            </div>
            </section>

            <Footer />
            
        </div>
    )
}
