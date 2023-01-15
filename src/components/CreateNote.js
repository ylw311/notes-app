import {useState} from 'react';
import note from './note';

const CreateNote = ({handleAddNote}) => {

    const [newText, setNewText] = useState('');
    const limit = 200;


    const handleChange = (event) => {
        if (limit-event.target.value.length >=0) {
            setNewText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (newText.trim().length > 0) {
            handleAddNote(newText);
            setNewText('');
        }

    };

    return (
        <div className="note new">
            <textarea 
                rows='8'
                cols='10'
                placeholder='Type something...'
                value={newText}
                onChange={handleChange}
            ></textarea>



            <div className="footer">
                <small> {limit - newText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}> Save </button>

            </div>
        </div>

    );
};

export default CreateNote;