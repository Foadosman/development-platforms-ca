import { supabase } from "./supabase.js";

const form = document.querySelector("#register-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        message.textContent = error.message;
        message.className = "error-message";
        return;
    }

    message.textContent = "Registration successful! Check your email to confirm your account.";
    message.className = "success-message";
    form.reset();
});