const form = document.querySelector('.form');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('blog-title');
const contentInput = document.getElementById('blog-content');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!username || !title || !content) {
        alert('Please fill out all fields!');
        return;
    }

    const blogPost = {
        username: username,
        title: title,
        content: content,
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    existingPosts.push(blogPost);

    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

    window.location.href = 'blog.html';
});