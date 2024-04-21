from flask import request
from config import app


@app.route("/endpoint1", methods=["POST"])
def get_home():
    data = request.json
    users = data['users']
    genres = data['genres']
    min_year = data['minYear']
    max_year = data['maxYear']

    print("======================")
    print("Flask API endpoint: 'endpoint1' has been called with following data...\n")
    print(f"Users: {users}")
    print(f"Genres: {genres}")
    print(f"Min Year: {min_year}")
    print(f"Max Year: {max_year}")
    print("======================")

    return {"endpoint1": "POOP!"}


if __name__ == "__main__":
    app.run(debug=True)
