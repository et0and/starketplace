import HomeHeader from './Header/HomeHeader';
import Footer from './Footer/Footer';

// function padZero(str:string) {
//     if (str.length < 2) {
//         return `0${str}`
//     }
//     return str
// }

export default function Home() {

//     const calculateTimeLeft = () => {

//         const now = new Date();
//         const offset = new Date().getTimezoneOffset() / 60

//         console.log(offset)
 
//         // Get the localized end date for your countdown
//         const end = new Date(Date.UTC(
//             2021, // Year
//             11-1,  // Month (0 is January, so 3 minus 1 is 2, which is March)
//             23,   // Day
//             9 + offset,   // Hour
//             0,    // Minutes
//             0,    // Seconds
//             0     // Milliseconds
//         ));

//         const difference = +end - +now

//         let timeLeft = {
//             days: '00',
//             hours: '00',
//             minutes: '00',
//             seconds: '00'
//         };
    
//         if (now < end) {
//           timeLeft = {
//             days: padZero(`${Math.floor(difference / (1000 * 60 * 60 * 24))}`),
//             hours: padZero(`${Math.floor((difference / (1000 * 60 * 60)) % 24)}`),
//             minutes: padZero(`${Math.floor((difference / 1000 / 60) % 60)}`),
//             seconds: padZero(`${Math.floor((difference / 1000) % 60)}`),
//           };
//         }

    
    //     return timeLeft;
    //   };

    //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    //   useEffect(() => {
    //     setTimeout(() => {
    //       setTimeLeft(calculateTimeLeft());
    //     }, 1000);
    //   });

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
                            <a rel="noreferrer" target="_blank" href="https://learn.tewahi.com" className="inline-block mt-1 button-sm button-bg-black">Learn More about tools</a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/printer.jpg')",
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
                            <a rel="noreferrer" target="_blank" href="https://learn.tewahi.com/projects" className="inline-block mt-1 button-sm button-bg-black">Learn More about projects</a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/projects.jpg')",
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
                        <h3 className="gray-title">Online exhibition</h3>
                        <h2>
                            A virtual showcase of art made at Te Wāhi and Takapuna Grammar School
                        </h2>
                        <p>Explore past and present virtual exhibitions hosted by Te Wāhi, or learn more about any upcoming events you can participate in.
                        </p>
                        <a href="/" className='inline-block mt-1 button-sm button-bg-black'>
                        Learn More about exhibitions
                        </a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/exhibition.jpg')",
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
                        <h3 className="gray-title">Make something</h3>
                        <h2>
                            Submit a file or two and get something made
                        </h2>
                        <p>Use our online portal to submit files for printing or lasercutting, or organise a time to meet about your project.
                        </p>
                        <a href="https://airtable.com/embed/shr4vQsrJ4hCqmd4K" rel="noreferrer" className="inline-block mt-1 button-sm button-bg-black">Submit a file</a>
                    </div>
                    <div style={{
                        backgroundImage:"url('/assets/make.jpg')",
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
