import React from 'react'
import NewletterSignUp from '../../component/newletterSignUp/NewletterSignUp'
import Hero from '../../component/hero/Hero'

function About() {
    return (
        <main>
            <Hero
                title="About"
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, incidunt iure ducimus minus obcaecati excepturi!"
            />
            <NewletterSignUp />
        </main>
    )
}

export default About