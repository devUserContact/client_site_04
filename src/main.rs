use leptos::*;

mod app_leptos;
use app_leptos::app;


pub fn main() {
    mount_to_body(|| view! { <app::App/> })
}
