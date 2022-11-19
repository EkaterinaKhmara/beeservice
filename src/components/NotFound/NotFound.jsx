import React from 'react';
import './NotFound.css';



export default function NotFound() {

    return (

        <div className='notFound'>

            <div className='notFoundBody'>

                <div className='notFoundBody__numb'>
                    <h1 className='bigNum first'>4</h1>
                    <h1 className='bigNum second'>0</h1>
                    <h1 className='bigNum third'>4</h1>
                </div>

                <div className='notFoundBody__pic'>
                    <img src="/img/other/404pic.png" alt="404error" />
                    <p>Сторінка не знайдена</p>
                </div>

            </div>

        </div>
    )
}