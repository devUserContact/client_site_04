use leptos::*;
use leptos_router::*;
use crate::app_leptos::index::*;

#[component]
pub fn SiteRouter() -> impl IntoView {
    view! {
        <div>
            <Router>
                <nav>
                    <A exact=true href="/">"Home"</A>
                    <A href="about">"About"</A>
                </nav>
                <main>
                    <Routes>
                        <Route path="" view=|| view! { <Home/> }/>
                        <Route path="about" view=|| view! { <About/> }/>
                    </Routes>
                </main>
            </Router>
        </div>
    }
}

#[component]
pub fn About() -> impl IntoView {
    view! {
        <div class="container">
            <p class="textStyle">a simple about section</p>
        </div>
    }
}
