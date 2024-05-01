const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('book-title');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const title = searchInput.value.trim();
    if (title.length > 0) {
        try {
            const response = await fetch(`http://localhost:3333/api/books/${encodeURIComponent(title)}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar livros');
            }
            const data = await response.json();
            if (data && data.body && data.body.books.length > 0) {
                renderBooks(data.body.books);
            } else {
                searchResults.innerHTML = 'Nenhum livro encontrado';
            }
        } catch (error) {
            console.error('Erro:', error);
            searchResults.innerHTML = 'Erro ao buscar livros';
        }
    } else {
        searchResults.innerHTML = '';
    }
});

function renderBooks(books) {
    searchResults.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled', 'd-flex', 'flex-wrap');
    
    books.forEach(book => {
        const li = document.createElement('li');
        li.setAttribute('data-book-id', book.id);
    
        if (book.image !== undefined && book.image !== null) {
            li.innerHTML = `
            <li class="book-item p-2">
                <img src="${book.image}" alt="${book.title}" class="book-image poster img-fluid">
            </li>
            `;
        }
        
        li.addEventListener('click', () => {
            window.location.href = `/book/${book.id}`;
        });
        ul.appendChild(li);
    });
    
    searchResults.appendChild(ul);
    
}

let token = localStorage.getItem('token');
console.log(token)
document.cookie = `token=${token}; path=/`;
