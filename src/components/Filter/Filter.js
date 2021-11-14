import React from 'react';
import "./Filter.css";
export const Filter = () => {
    return(
        <div>
            <section className="filter">
                <form className="form-control">
                <input type="search"name="search"id="search"placeholder="Search for a country..."></input>
                </form>
                <div className="region-filter">
                    <select name="select"id="select"className="select">
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </section>
        </div>
    );
};
