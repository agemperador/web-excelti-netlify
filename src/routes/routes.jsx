import { BrowserRouter,Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import LogoSpinner from '../components/shared/logo-spinner/logo-spinner';
import { BooksProvider } from '../hooks/booksContext';
import NavBarMobile from '../components/header/nav-bar-mobile/nav-bar-mobile';

const Router = () => {
    const Home = lazy(() => import('../pages/home/home'));
    const Professionals = lazy(() => import('../pages/professionals/professionals'));
    const Footer = lazy(() => import('../components/footer/footer'));
    const Traduction = lazy(() => import('../pages/traduction/traduction'));
    const Training = lazy(() => import('../pages/training/training'));
    const Header = lazy(() => import('../components/header/header'));
    const InterpretationPage = lazy(() => import('../pages/interpretation/interpretation'));
    

    return (
        <BrowserRouter>
            <Suspense fallback={<LogoSpinner/>}>
                <BooksProvider>
                    <Header/>
                    <NavBarMobile/>
                </BooksProvider>
                {/* <ContactButton/> */}
                    <Switch>  
                        <Route exact path='/' component={Home} />
                        <Route exact path='/translation' component={Traduction} />
                        <Route exact path='/professionals' component={Professionals} />
                        <Route exact path='/training' component={Training} />
                        <Route exact path='/interpretation' component={InterpretationPage} />
                    </Switch>
                <Footer/>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;