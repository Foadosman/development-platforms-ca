import { supabase } from "./supabase.js";

const form = document.querySelector("#article-form");
const titleInput = document.querySelector("#title");
const categoryInput = document.querySelector("#category");
const bodyInput = document.querySelector("#body");
const message = document.querySelector("#message");

async function checkAuth() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        window.location.href = "./login.html";
    }
}

checkAuth();

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const category = categoryInput.value.trim();
    const body = bodyInput.value.trim();

    const { error } = await supabase
        .from("articles")
        .insert([
            {
                title,
                category,
                body,
            },
        ]);

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.textContent = "Article published successfully!";
        form.reset();
});