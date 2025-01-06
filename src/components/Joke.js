import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Joke = () => {
    const [jokeData, setJokeData] = useState({});
    useEffect(() => {
        async function getJoke(params) {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            setJokeData(data);
        }
        getJoke();
    }, [])

    return (
    <div>
        <section className="joke">
            <p>
            <span data-testid="jokeHeadline">{jokeData.value}</span>
            <span> - api.chucknorris.io</span>
            </p>
            <Link to='/'><button className='navButton' data-testid="homeBtn">Go back to word counter</button> </Link>
        </section>
    </div>
  )
}
