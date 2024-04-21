import React, {useState} from 'react';
import UserInputForm from './UserInputForm';
import './UserInputFormStyle.css'


function App() {
    const [users, setUsers] = useState([]);
    const [genres, setGenres] = useState([]);
    const [minYear, setMinYear] = useState(null);
    const [maxYear, setMaxYear] = useState(null);
    const [movieRec, setMovieRec] = useState('');

    const handleAddUser = (value) => {
        setUsers(prevUsers => [...prevUsers, value]);
    };

    const handleAddGenre = (value) => {
        setGenres(prevGenres => [...prevGenres, value]);
    };

    const handleAddMinYear = (value) => {
        setMinYear(value);
    };

    const handleAddMaxYear = (value) => {
        setMaxYear(value);
    };


    const sendDataToEndpoint = async () => {
        const response = await fetch('http://127.0.0.1:5000/endpoint1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                users,
                genres,
                minYear,
                maxYear
            })
        });

        if (response.ok) {
            const data = await response.json();
            setMovieRec(data["endpoint1"]);
            console.log('Data sent successfully:', data['endpoint1']);
        } else {
            console.log('Error sending data');
        }
    }


    return (
        <div>
            <h2>Recommendation Form</h2>
            <UserInputForm
                onAddUser={handleAddUser}
                onAddGenre={handleAddGenre}
                onAddMinYear={handleAddMinYear}
                onAddMaxYear={handleAddMaxYear}
            />

            <button className="UserInputButton" onClick={sendDataToEndpoint}>Get Recommendation</button>
            <p>Your recommendation is... {movieRec}</p>

            <p>Entered Users:</p>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>

            <p>Entered Genres:</p>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>

            <p>Min Year: {minYear}</p>
            <p>Max Year: {maxYear}</p>
        </div>
    )
}

export default App;
