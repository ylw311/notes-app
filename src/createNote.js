const createNote = () => {
    return(
        <div className="note new">
            <textarea 
                rows='8'
                cols='10'
                placeholder='Type something...'>

            </textarea>
       


            <div className="footer">
                <small>...Remaining</small>
                <button className='save'> Save </button>

            </div>
        </div>

    );
};

export default createNote;