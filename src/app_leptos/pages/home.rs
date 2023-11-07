use leptos::*;

use crate::app_leptos::pages::components::*;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div>
            <TitleCard/>
            <LandingText/>
        </div>
    }
}
