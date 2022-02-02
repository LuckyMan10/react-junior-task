import {FC} from 'react';
import {preload} from './type';


const Preload:FC<preload> = ({message}) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export {Preload}