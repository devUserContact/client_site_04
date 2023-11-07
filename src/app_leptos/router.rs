use leptos::*;
use leptos_router::*;

#[path = "pages.rs"] mod pages;
use pages::home::*;
use pages::about::*;


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
                        <Route path="" view=|| view! { <PageHome/> }/>
                        <Route path="about" view=|| view! { <PageAbout/> }/>
                    </Routes>
                </main>
            </Router>
        </div>
    }
}
