use leptos::IntoView;
use leptos::*;

#[component]
pub fn PageMusic() -> impl IntoView {
    #[derive(Debug, Clone)]
    struct Project {
        title: String,
        year_created: u16,
        artwork_url: String,
        spotify_url: String,
        bandcamp_url: String,
        description: String,
    }

    view! {
        <div class="container">
            <p class="textStyle">music page</p>
            <div class="musicGrid">

            </div>
        </div>
    }
}
