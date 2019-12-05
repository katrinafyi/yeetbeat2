import React, { InputHTMLAttributes, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';


export const CopyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const ref = React.createRef<HTMLInputElement>();

    const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (ref.current) {
            ref.current.select();
            document.execCommand('copy');
        }
        (ev.target as HTMLElement).focus(); // hack
    };

    return <div className="field has-addons">
        <div className="control is-expanded">
            <input ref={ref} {...props}/>
        </div>
        <div className="control">
            <button className="button is-small" onClick={onClick}>
                <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </button>
        </div>
    </div>;
}