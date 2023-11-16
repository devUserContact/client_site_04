use leptos::*;
use leptos_router::*;

use crate::pages::home::PageHome;
use crate::pages::about::PageAbout;
use crate::pages::music::PageMusic;

#[component]
pub fn SiteRouter() -> impl IntoView {
    view! {
        <div>
            <Router>
                <nav class="navContainer">
                    <A class="navText" exact=true href="/">"home"</A>
                    <A class="navText" href="music">"music"</A>
                    <A class="navText" href="about">"about"</A>
                </nav>
                <main>
                    <Routes>
                        <Route path="" view=|| view! { <PageHome/> }/>
                        <Route path="music" view=|| view! { <PageMusic/> }/>
                        <Route path="about" view=|| view! { <PageAbout/> }/>
                    </Routes>
                </main>
            </Router>
        </div>
    }
}
