export class NotesUI {
    constructor(containerSelector) {
        this.notesContainer = document.querySelector(containerSelector);
    }

    addNote(note) {
        const htmlNote = this.createNote(note);
        const container = this.getNotesContainer(note.pinned);
        container.appendChild(htmlNote);
    }
    createNote(note) {
        const htmlNote = document.createElement('div');
        htmlNote.className="inNotes";

        if(note.pinned == true) {
            htmlNote.style.order=1;
        }
        else {
            htmlNote.style.order=2;
        }

        console.log(htmlNote.style.order);
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlButton = document.createElement('button');
        const htmlTime = document.createElement('time');
        
        htmlNote.style.backgroundColor=note.color;

        htmlNote.classList.add('note');
        htmlNote.setAttribute('name', note.id);
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlButton.innerHTML = 'Remove'; 
        htmlTime.innerHTML = note.createDate.toLocaleString(); 
        htmlButton.id = note.id;

        htmlNote.appendChild(htmlTitle);
        htmlNote.appendChild(htmlContent);
        htmlNote.appendChild(htmlButton);
        htmlNote.appendChild(htmlTime);

        return htmlNote;
    }
    getNote(id) {
        return document.querySelector('#' + id);
    }
    getNotesContainer() {
        return this.notesContainer;
    }
}
