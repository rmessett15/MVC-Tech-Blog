let blogPost = window.location.pathname.split("/");

const editComment = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  // get text and trim whitespace
  const comment_body = document.getElementById("editBtn").value.trim();

// get post id from URL
//   const url = window.location.toString().split("/");
//   const post_id = url[url.length - 1];

  console.log(blogPost);

  document.location.assign(`/create/${blogPost[2]}`);
};

const editButton = document.querySelectorAll("#editBtn");

for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editComment);
}


