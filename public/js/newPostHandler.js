async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#titleInput").value.trim();
  const post_body = document.querySelector("#bodyInput").value.trim();

  if (title && post_body) {
    const response = await fetch(`/api/blogPost`, {
      method: "POST",
      body: JSON.stringify({
        title,
        post_body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".createBlogPost")
  .addEventListener("submit", newPostHandler);
