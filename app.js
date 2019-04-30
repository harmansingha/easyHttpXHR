const http = new easyhttp();

//GET Request
// http.getPosts('https://jsonplaceholder.typicode.com/posts', displayPosts);

// function displayPosts(err, posts){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// }

//POST Request
const data = {
  title: 'New Post',
  body: 'This is a custom post'
}
// http.createPost('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   }
//   else{
//     console.log(post);
//   }
// });

// http.updatePost('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


http.deletePost('https://jsonplaceholder.typicode.com/posts/1', delPost);

function delPost(err, response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
}
