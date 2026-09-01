import { supabase } from "./supabase.js";

const loggedOutNav = document.querySelector("#logged-out-nav");
const loggedInNav = document.querySelector("#logged-in-nav");
const logoutButton = document.querySelector("#logout-button");

async function updateNav() {
    const { data } = await supabase.auth.getUser();

    if (data.user) {
        loggedOutNav.hidden = true;
        loggedInNav.hidden = false;
    } else {
        loggedOutNav.hidden = false;
        loggedInNav.hidden = true;
    }
}

logoutButton.addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout failed:", error.message);
        return;
    }

    window.location.href = "./index.html";
});

updateNav();