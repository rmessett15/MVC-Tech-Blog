const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log('clicked me')
  console.log(event.target);

//   let blogPost;

  const response = await fetch(`/api/blogPost/${blogPost.id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.redirect(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

const deleteButton = document.querySelectorAll("#deleteBtn");

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deletePostHandler);
}