import React from 'react';
import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img className="write__Image" src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
            <form className="write_Form">
                <div className="write_Form__Group">
                    <label htmlFor="fileInput">
                        <i className="write_Form__Icon fa-regular fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder='Title' className="write_Form__Input" autoFocus={true} />
                </div>
                <div className="write_Form__Group">
                    <textarea placeholder="Write blog here" type="text" className="write_Form__Input write_Form__Input--Content"></textarea>
                </div>
                <button className="write_Form__Submit">
                    Post
                </button>
            </form>
        </div>
    )
}
