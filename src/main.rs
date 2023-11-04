mod app_leptos;
use app_leptos::router::SiteRouter;
use leptos::*;


pub fn main() {
    mount_to_body(|| view! { <SiteRouter/> })
}
