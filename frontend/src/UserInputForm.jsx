import React from 'react';
import './UserInputFormStyle.css'

function UserInputForm({ onAddUser, onAddGenre, onAddMinYear, onAddMaxYear }) {
    const handleAddUser = (event) => {
        onAddUser(event.target.previousSibling.value);
    };

    const handleAddGenre = (event) => {
        onAddGenre(event.target.previousSibling.value);
    };

    const handleAddMinYear = (event) => {
        onAddMinYear(event.target.previousSibling.value);
    };

    const handleAddMaxYear = (event) => {
        onAddMaxYear(event.target.previousSibling.value);
    };

    return (
        <div>
            <input className="UserInput" type="text" placeholder="Enter username..." />
            <button className="UserInputButton" onClick={handleAddUser}>Add User</button><br/><br/>

            <input className="UserInput" type="text" placeholder="Enter genres..." />
            <button className="UserInputButton" onClick={handleAddGenre}>Add genre</button><br/><br/>

            <input className="UserInput" type="text" placeholder="Enter min year..." />
            <button className="UserInputButton" onClick={handleAddMinYear}>Add min year</button><br/><br/>

            <input className="UserInput" type="text" placeholder="Enter max year..." />
            <button className="UserInputButton" onClick={handleAddMaxYear}>Add max year</button><br/><br/>
        </div>
    )
}

export default UserInputForm;
