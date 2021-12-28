const createNotes = async () =>{
    const  notesText = document.getElementById('notes-text').value;
    const authorText = document.getElementById('author-text').value;

    const response = await axios({
        url:"http://localhost:3000/",
        method:"POST",
        data:{
            notes:notesText,
            author:authorText,
        },
    });

    if(response.data===true)
    {
        alert("Note created successfully");
    }
    else
    {
        alert("Note creation failed");
    }
};


