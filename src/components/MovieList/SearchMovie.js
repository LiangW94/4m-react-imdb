import React from 'react';

// const style = {
//     color: {
//         color: 'white'
//     }
// }

const SearchMovie = ({ onSearchClick, onLuckyClick, onSearchValueChange, onEnterPress }) => {
    return (
        <div style={{ paddingTop: '160px', display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
            <div style={{ flex: '100%' }} >
                <input style={{ maxWidth: "30%", margin: "0 auto" }} className=" bd-highlight form-control" type="text" placeholder="Movie Full Name" aria-label="Search" onChange={e => onSearchValueChange(e)} onKeyPress={e => onEnterPress(e)}></input>
            </div>
            <div style={{ display: 'flex', flex: '0', justifyContent: 'center', marginTop: "30px" }}>
                <button className="btn btn-secondary" style={{ marginRight: "30px" }} type="button" onClick={onSearchClick}>Search</button>

                <button className="btn btn-secondary" type="button" onClick={onLuckyClick}>Feeling lucky?</button>
            </div>
        </div>
    );
}

export default SearchMovie;
