import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Counter = () => {
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const textRef = useRef();
    const handleTextAreaChange = () => {
        const value = textRef.current.value;
        setCharCount(value.length);
        value.length ? setWordCount(value.trim().split(' ').length): setWordCount(0);
    }
    const handleClear = () => {
        textRef.current.value = '';
        setCharCount(0);
        setWordCount(0);
    }

  return (
    <section className="counter">
        <textarea onChange={handleTextAreaChange} ref={textRef} data-testid="textArea" placeholder='Type or paste your text'></textarea>
        <button onClick={handleClear} disabled={charCount ? '' : 'disabled'} data-testid="clearBtn">Clear</button>

        <p className="result">
          <span data-testid="charLength">Character: {charCount}</span>
          <span data-testid="wordLength">Word: {wordCount}</span>
        </p>

        <Link to='/joke'><span className='navButton'>Joke Page</span> </Link>
    </section>
  )
}