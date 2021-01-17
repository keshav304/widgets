import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Search = () => {
    // state for search term
    const [term, setTerm] = useState('');
    //state for stori api response
    const [results, setResult] = useState([]);

    useEffect(() => {
        //direct async await is not allowed 
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            //updating results
            setResult(data.query.search);
        };
        // excuting the function which makes api request
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 800);
            return () => {
                clearTimeout(timeoutId)
            }
        }
    }, [term]);

    //buildig the list of result
    const renderedResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="item">
                    <div className="right floated content">
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
                            GO
                        </a>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    );
}
export default Search;