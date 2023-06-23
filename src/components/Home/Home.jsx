import Header from '../Header/Header'
import css from '../../styles/app.module.scss'
import Hero from '../Hero/Hero'
import Expertise from '../Expertise/Expertise'
import Footer from '../Footer/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom';
import InfoPost from '../InfoPost/InfoPost'

const Home = () => {
    return <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Expertise />
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        {/* <Experience /> */}
        <Footer />
    </div>
};

export default Home;