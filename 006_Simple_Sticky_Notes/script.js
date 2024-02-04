let random_margin = ["-5px", "1px", "5px", "10px", "7px"];
let random_colors = ["#3dc2ff !important","#46c45a !important","#ff3de8 !important","#ff65a3 !important","#bc83e6 !important","#ebb328 !important"];
let random_degree = ["rotate(3deg)", "rotate(-1deg)", "rotate(2deg)", "rotate(-3deg)", "rotate(3deg)", "rotate(-3deg)"];
let index = 0;

// Load the textarea
window.onload = () => { 
    loadNotes();
    document.querySelector("#user-input").select();
}

// add new note button
document.querySelector("#add-note-button").addEventListener('click',() =>{
    const text = document.querySelector("#user-input").value;
    // Checking for empty note
    if(text.trim() !== ''){
        createStickyNoteAndSave(text); // Modified here
        document.querySelector("#user-input").value = '';
        document.querySelector("#modal").style.display = "none";
    }
});

// add note
document.querySelector("#add-note").addEventListener("click", () =>{
    document.querySelector("#modal").style.display = "block";
    const textarea = document.querySelector('#user-input');
    textarea.classList.add('animate__animated','animate__bounceIn');
});

// Hiding textarea
document.querySelector("#hide").addEventListener("click",() =>{
    document.querySelector("#modal").style.display = "none";
    const modal = document.querySelector("#modal");
    textarea.classList.remove('animate__bounceIn');
});

// Create note function
createStickyNoteAndSave = (text) => {
    createStickyNote(text);
    saveNotesToLocalStorage();
    const newNote = document.querySelector('.note:last-child');
    newNote.classList.add('animate__animated','animate__backInDown');
    setTimeout(()=>{
        newNote.classList.remove('animate__animated','animate__backInDown')
    },500)
}

// Create note function
createStickyNote = (text) => {
    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");
    let deleteIcon = document.createElement("i");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;
    deleteIcon.classList = "bi bi-trash3 delete__icon";

    details.appendChild(noteText);
    note.appendChild(details);
    note.appendChild(deleteIcon);

    if(index > random_colors.length - 1)
        index = 0;

    note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    // Remove with icon
    deleteIcon.addEventListener("click",()=>{
        note.classList.add('animate__animated','animate__backOutDown');
        setTimeout(() =>{
            note.remove();
            saveNotesToLocalStorage();
        }, 500);
    });

    document.querySelector("#all-notes").appendChild(note);
}

// Load notes from storage
loadNotes = () =>{
    const notes = JSON.parse(localStorage.getItem('notes'));
    if(notes){
        notes.forEach(note => createStickyNote(note));
    }
}

// Save notes to local storage
saveNotesToLocalStorage = () =>{
    const notes = Array.from(document.querySelectorAll('.note h1')).map(note => note.textContent);
    localStorage.setItem('notes',JSON.stringify(notes));
}

// Clear all button
document.querySelector("#clear-all-button").addEventListener('click',()=>{
    const allNotes = document.querySelectorAll('.note');
        // Add animation classes to each note
        allNotes.forEach(note => {
            note.classList.add("animate__animated", "animate__backOutDown");
        });
            // Remove the notes after animation completes
    setTimeout(() => {
        allNotes.forEach(note => {
            // removes notes 
            note.remove();
        });
        saveNotesToLocalStorage(); // Update local storage after removing notes
    }, 500);

});
