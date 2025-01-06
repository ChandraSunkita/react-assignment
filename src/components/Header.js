import React from 'react'

export const Header = ({heading, subheading}) => {
  return (
    <header>
        <section className='header'>
            <h1 data-testid="heading">{heading}</h1>
            <p data-testid="subHeading">{subheading}</p>
        </section>
    </header>
  )
}
