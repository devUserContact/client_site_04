use leptos::*;
use crate::app_leptos::router::SiteRouter;

pub fn App() -> impl IntoView {
    view! { <SiteRouter/> }
}
