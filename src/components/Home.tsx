import HomeHeader from './Header/HomeHeader';
import Footer from './Footer/Footer';

export default function Home() {

    return (
        <div className="layout-container">
            <HomeHeader />
            <section className="layout">
                <div className="hero-rect" style={{backgroundImage: "url('/assets/hero.png')"}}>
                    <div className="inner-text measure-narrow">
                        <p>Te Wāhi Auaha is a makerspace based at Takapuna Grammar School, Tāmaki Makaurau.</p>
                    </div>
                </div>
            </section>

            <section className="layout">
                <div className="flex justify-between">
                    <div className="measure mr-1em">
                        <h3 className="gray-title">Tool guides</h3>
                        <h2>
                            Guides to the things we use
                        </h2>
                        <p>Te Wāhi uses many different kinds of free and open source software that can be run on multiple platforms. Jump in to get learning about these tools and use them yourself.
                        </p>
                            <a rel="noreferrer" target="_blank" href="https://learn.tewahi.com" className="inline-block mt-1 button-sm button-bg-black">Learn more about tools</a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/tools.jpg')",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        width: '300px',
                        height: '300px',
                        marginTop:'1em'
                    }}
                    className="home-section-img w-full ml-1em" />
                </div>
            </section>

            <section className="layout">
                <div className="flex justify-between">
                    <div className="measure mr-1em">
                        <h3 className="gray-title">Project ideas</h3>
                        <h2>
                            Some projects to help get you started
                        </h2>
                        <p>Get started right away with a template project that you can freely customise to your liking. They can be made as simple or complex as you like, and provide a great starting point for learning about the different tools we have available.
                       
                        </p>
                            <a rel="noreferrer" target="_blank" href="https://learn.tewahi.com/projects/digitalkaitiaki" className="inline-block mt-1 button-sm button-bg-black">Learn more about projects</a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/idea.jpg')",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        width: '300px',
                        height: '300px',
                        marginTop:'1em'
                    }}
                    className="home-section-img w-full ml-1em" />
                </div>
            </section>

            <section className="layout">
                <div className="flex justify-between">
                    <div className="measure mr-1em">
                        <h3 className="gray-title">Exhibitions</h3>
                        <h2>
                            Virtual showcases of art made at Te Wāhi and Takapuna Grammar School
                        </h2>
                        <p>Explore past and present virtual exhibitions hosted by Te Wāhi, or learn more about any upcoming events you can participate in.
                        </p>
                        <a rel="noreferrer" target="_blank" href="https://exhibition.tewahi.com" className='inline-block mt-1 button-sm button-bg-black'>
                        Learn more about exhibitions
                        </a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/show.jpg')",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        width: '300px',
                        height: '300px',
                        marginTop:'1em'
                    }}
                    className="home-section-img ml-1em" />
                </div>
            </section> 

            <section className="layout">
                <div className="flex justify-between">
                    <div className="measure mr-1em">
                        <h3 className="gray-title">Visual Arts Innovation</h3>
                        <h2>
                            Index of some 10VAI work
                        </h2>
                        <p>Browse an archive of past student work, made as part of the Year 10 Visual Arts Innovation course at Takapuna Grammar School.
                        </p>
                        <a rel="noreferrer" target="_blank" href="https://vai.tewahi.com" className='inline-block mt-1 button-sm button-bg-black'>
                        Enter the archive
                        </a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/vai.jpg')",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        width: '300px',
                        height: '300px',
                        marginTop:'1em'
                    }}
                    className="home-section-img ml-1em" />
                </div>
            </section> 

            <Footer className="footer-home"/>
        </div>
    )
}
