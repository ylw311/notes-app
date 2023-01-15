import Note from './note';

const notesList = ({note}) => {
    return (
    <div className='notelist'>
        {note.map ((note) => <Note id={note.id} text={note.text} date={note.date}/>)}
    </div>
    );
};

export default notesList;