import {MdDeleteForever} from 'react-icons/md'
    
const note = () => {
    return (
        <div className='note'>
        
            <span>note</span>

            <div className="footer">
                <small>date</small>
                <MdDeleteForever className='delete' size='1.3em'/>
            </div>


        </div>
    );
};

export default note;