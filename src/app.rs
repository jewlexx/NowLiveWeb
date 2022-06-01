use yew::prelude::*;

const REDIRECT_URI: &str = "https://id.twitch.tv/oauth2/authorize?client_id=6ucdumdkn0j562bf9oog38efzmx4vh&amp;response_type=token&amp;scope=user:read:follows&amp;redirect_uri=https://nowlive.jamesinaxx.me/auth/callback";

/// Root app component
#[function_component(App)]
pub fn app() -> Html {
    html! {
        <div class="app">
            <a href={REDIRECT_URI}>{ "Connect NowLive with Twitch" }</a>
            <div class="footer"><h3>{ "Developed with ❤️ by Juliette" }</h3></div>
        </div>
    }
}
