import React from 'react'
import Hero from '../../component/hero/Hero'
import HomeCategoriesList from '../../component/homeCategoriesList/HomeCategoriesList'
import FeaturedBlogs from '../../component/featuredBlogs/FeaturedBlogs'
import LatestBlogs from '../../component/latestBlogs/LatestBlogs'
import NewletterSignUp from '../../component/newletterSignUp/NewletterSignUp'

function Home() {
    return (
        <main>
            <Hero
                title="My Blog"
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, incidunt iure ducimus minus obcaecati excepturi!"
            />
            <HomeCategoriesList />
            <FeaturedBlogs />
            <LatestBlogs />
            <NewletterSignUp />
        </main>
    )
}

export default Home