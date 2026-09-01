import { supabase } from "./supabase.js";

const articlesContainer = document.querySelector("#articles");

async function loadArticles() {
    const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        articlesContainer.innerHTML = "<p>Could not load articles.</p>";
        return;
    }

    if (data.length === 0) {
        articlesContainer.innerHTML = "<p>No articles found.</p>";
        return;
    }

    articlesContainer.innerHTML = "";

    data.forEach((article) => {
    const articleElement = document.createElement("article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.category}</p>
            <p>${article.body}</p>
        `;
    
        articlesContainer.appendChild(articleElement);
    })

}

loadArticles();