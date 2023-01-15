import {MdDeleteForever} from 'react-icons/md'
    
const note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{text}</span>

            <div className="footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete' size='1.3em'/>
            </div>


        </div>
    );
};

export default note;