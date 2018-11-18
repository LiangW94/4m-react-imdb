import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

const TextInput = ({ name, label, onChange, placeholder, value }) => {
  let wrapperClass = 'form-group';

  return (
    <div>
      <Header />
      <div className={wrapperClass}>
        <label htmlFor="{name}">{label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
        </div>
      </div>
      <Footer url='Movielist' footerText='Movie List' />
    </div>
  );
};



export default TextInput;
