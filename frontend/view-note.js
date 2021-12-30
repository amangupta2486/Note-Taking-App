const fetchNotes = async() =>{
    const response = await axios({
        method: 'GET',
        url: 'https://aman-gutpa-note-taking-app.herokuapp.com',
    });

    const notesList = response.data;

    const notesListTag = document.getElementById('view-note-list');

    for(let i=0;i<notesList.length;i++){
        const tag =`
        <li class="view-note-block">
            <div>${notesList[i].notes}</div>
            <div class="view-note-author">${notesList[i].author}</div>
        </li>`
        ;

        notesListTag.innerHTML += tag;
    }
};

fetchNotes();