use yew::prelude::*;
use yew_router::prelude::*;

pub mod auth;
pub mod home;

use auth::Auth;
use home::Home;

/// App routes
#[derive(Routable, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[at("/auth")]
    Auth,
    #[not_found]
    #[at("/page-not-found")]
    PageNotFound,
    #[at("/")]
    Home,
}

/// Switch app routes
pub fn switch(routes: &AppRoute) -> Html {
    match routes.clone() {
        AppRoute::Home => html! { <Home /> },
        AppRoute::Auth => html! { <Auth /> },
        AppRoute::PageNotFound => html! { "Page not found" },
    }
}
