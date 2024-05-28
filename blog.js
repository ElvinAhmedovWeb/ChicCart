document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.blog-post');
    const postsPerPage = 3; // Number of posts per page
    const totalPosts = posts.length;
    let currentPage = 1;

    // Function to display posts for the current page
    function displayPosts(page) {
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        posts.forEach((post, index) => {
            if (index >= startIndex && index < endIndex) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Function to create pagination buttons
    function createPaginationButtons() {
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', function() {
                currentPage = i;
                displayPosts(currentPage);
                updateActiveButton();
            });
            paginationContainer.appendChild(button);
        }

        document.querySelector('.blog').appendChild(paginationContainer);
    }

    // Function to update active pagination button
    function updateActiveButton() {
        const buttons = document.querySelectorAll('.pagination button');
        buttons.forEach(button => {
            button.classList.remove('active');
            if (parseInt(button.textContent) === currentPage) {
                button.classList.add('active');
            }
        });
    }

    // Display initial posts and pagination buttons
    displayPosts(currentPage);
    createPaginationButtons();
});
