import { Link } from 'react-router-dom'
import PageNotFoundImg from '../assets/page-not-found.jpg'
export const PageNotFound = () => {
  return (
   <main>
        <section className="pnf">
            <div className="oops">
                <p data-testid="pnfText">Oops - Page not found</p>
                <img src={PageNotFoundImg} alt="Page Not Found" />
                <Link to='/'><button data-testid="homeBtn">Go back to word counter</button> </Link>
            </div>
        </section>
   </main>
  )
}
