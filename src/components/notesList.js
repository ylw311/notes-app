import Note from './note';
import CreateNote from './CreateNote';

const notesList = ({note, handleAddNote, handleDeleteNote}) => {
    return (
    <div className='notelist'>
        {note.map((n) => <Note id={n.id} text={n.text} date={n.date} handleDeleteNote={handleDeleteNote}/>)}
        <CreateNote handleAddNote={handleAddNote}/>
    </div>
        

    );
};

export default notesList;