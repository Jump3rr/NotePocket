export class Db {
    constructor() {
        this.lsNotesKey = 'notes';
    }
    saveNotes(notes) {
            localStorage.setItem(this.lsNotesKey, JSON.stringify(notes));
    }
    getNotes() {
        const notesFromLocalStorage = JSON.parse(localStorage.getItem(this.lsNotesKey));

        if (notesFromLocalStorage)
        {
            const convertedNotes = notesFromLocalStorage.map ( notes => {
                notes.createDate = new Date(notes.createDate);
                return notes;
            });
            return convertedNotes;
        }

        else return [];
    }
}