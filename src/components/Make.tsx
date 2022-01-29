import HomeHeader from './Header/HomeHeader';
import Footer from './Footer/Footer';

export default function Make() {
    return (
        <div className="layout-container">
            <HomeHeader />

            <section className="layout">
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
            <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr4vQsrJ4hCqmd4K?backgroundColor=white" frameborder="0" onmousewheel="" width="100%" height="1621" style="background: transparent; border: 1px solid #fff;"></iframe>
            </section>

            <Footer />
            
        </div>
    )
}
