import Note from './note';
import CreateNote from '../createNote';

const notesList = ({note}) => {
    return (
    <div className='notelist'>
        {note.map ((note) => <Note id={note.id} text={note.text} date={note.date}/>)}
        <CreateNote />
    </div>

    );
};

export default notesList;