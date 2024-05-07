$(function () {
    $(".book-list").sortable();
    $(".book-list").disableSelection();
});

document.addEventListener('DOMContentLoaded', async () => {
    let params = new URLSearchParams(window.location.search);
    let page = params.get('page');

    const sort = document.getElementById("sortOptions");

    sort.addEventListener('change', async () => {
        const selectedSort = sort.value;
        const currentPage = page;


        history.replaceState({}, '', `/bookshelf?page=${currentPage}&sort=${selectedSort}`);

        location.reload();
    });

    page.addEventListener('change', async () => {
        const selectedPage = page;
        const currentSort = sort.value;

        history.replaceState({}, '', `/bookshelf?page=${selectedPage}&sort=${currentSort}`);

        location.reload();
    });
});

