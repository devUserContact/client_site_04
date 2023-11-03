mod app_leptos;
use app_leptos::index;
use leptos::*;


pub fn main() {
    mount_to_body(|| view! { <index::App/> })
}
