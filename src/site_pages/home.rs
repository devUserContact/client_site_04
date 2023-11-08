use leptos::*;
use leptos::IntoView;

use crate::site_pages::components::*;

#[component]
pub fn PageHome() -> impl IntoView {
    view! {
        <div>
            <TitleCard/>
            <LandingText/>
        </div>
    }
}
