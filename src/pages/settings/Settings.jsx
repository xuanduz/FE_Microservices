import React from 'react';
import './settings.css';
import Sidebar from '../../components//sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="setting_Wrapper">
                <div className="setting_Wrapper__Title">
                    <span className="setting_Wrapper__Title--Update">
                        Update Your Account
                    </span>
                </div>
                <form className="setting_Wrapper__Form">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="NXD" />
                    <button className="setting_Wrapper__Form--Submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
