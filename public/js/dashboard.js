const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log("clicked me");
  console.log(event.target);

  // let blogPost = window.location.pathname.split('/');
  let blogPostId = event.target.getAttribute("data-id");
  console.log(blogPostId);

  const response = await fetch(`/api/blogPost/${blogPostId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.assign(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

const editComment = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  // get text and trim whitespace
  // const comment_body = document.getElementById("editBtn").value.trim();

  // get post id from URL
  //   const url = window.location.toString().split("/");
  //   const post_id = url[url.length - 1];

  // console.log(blogPost);

  let blogPostId = event.target.getAttribute("data-id");

  document.location.assign(`/create/${blogPostId}`);
};

const editButton = document.querySelectorAll("#editBtn");

for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editComment);
}

const deleteButton = document.querySelectorAll("#deleteBtn");

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deletePostHandler);
}
