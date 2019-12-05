import React from 'react';
import { CopyInput } from './components/CopyInput';

interface IProps {
    code: number,
};

export const LobbyPage = ({code}: IProps) => {
    return <>
        <h1 className="is-size-4 has-text-weight-bold">Lobby</h1>
        Waiting for other players. Send them this link to join:
        <div className="field">
            <div className="control">
                <CopyInput type="text" className="input is-small" value={window.location.href} readOnly={true}/>
            </div>
        </div>
        <table className="table is-hoverable">
            <thead>
                <tr><th></th><th>Username</th></tr>
            </thead>
            <tbody>
                <tr><th>1</th><td>player 1</td></tr>
                <tr><th>2</th><td>player </td></tr>
            </tbody>
        </table>
    </>
};

export default LobbyPage;