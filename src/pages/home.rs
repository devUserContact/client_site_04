use leptos::*;
use leptos::IntoView;

use crate::pages::components::*;

#[component]
pub fn PageHome() -> impl IntoView {
    view! {
        <div>
            <TitleCard/>
            <LandingText/>
        </div>
    }
}
