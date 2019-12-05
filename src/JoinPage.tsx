import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router';

export const JoinPage = () => {
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [redirect, setRedirect] = useState<number>(0);

    const inputRef = React.createRef<HTMLInputElement>();

    const codeRegex = /^([0-9]{6})$/;
    const submitHandler = (ev: FormEvent) => {
        //console.log(ev);
        setLoading(true);

        const value = codeRegex.exec(inputRef.current!.value);
        if (!value) {
            setInvalid(true);
            setLoading(false);
        } else {
            setRedirect(parseInt(value[0]));
        }
        ev.stopPropagation();
        ev.preventDefault();
    };

    return <> 
        {redirect !== 0 && <Redirect to={"/join/" + redirect}></Redirect>}
        <h1 className="is-size-4 has-text-weight-bold">Join Game</h1>
        <form onSubmit={submitHandler}>
            <div className="field">
                <label htmlFor="roomCode" className="label">Room Code</label>
                <div className="control">
                    <input ref={inputRef} className={"input" + (invalid ? ' is-danger' : '')}
                        type="text" id="roomCode" placeholder="000000"></input>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className={"button is-success" + (loading ? ' is-loading': '')}>Join</button>
                </div>
            </div>
        </form>
    </>;
}

export default JoinPage;