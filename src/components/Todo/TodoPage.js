import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

const TodoPage = ({ movies, loading }) => {
    return (
        <div className="Todo">
        <Header />

        <Footer url='/' footerText='Back Home'/>
      </div>
    )
}

export default TodoPage;
