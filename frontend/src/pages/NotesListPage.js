import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'



const NotesListPage = () => {

    let [notes, setNotes] = useState([])
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [paginate, setpaginate] = useState(4);

    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {

        let response = await fetch('/api/v1/notes/')
        let data = await response.json()
        setNotes(data)
        setLoaded(true)
        setError(null);
    }



    const load_more_notes = (event) => {
        setpaginate((prevValue) => prevValue + 4);
    }

    const data = Object.values(notes);
    const search_parameters = Object.keys(Object.assign({}, ...data));
    const filter_items = [...new Set(data.map((item) => item.updated))];

    function search(notes) {
        return notes.filter(
          (item) =>
          item.created.includes(filter) &&
            search_parameters.some((parameter) =>
              item[parameter].toString().toLowerCase().includes(query)
            )
        );
      }

      if (error) {
        return <>{error.message}</>
      } 
      else if (!loaded) {
        return <><h1 className='loading'>loading...</h1></>;
      }
      else{}
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="wrapper">
          <div className="search-wrapper">
              <label htmlFor="search-form">
                  <input
                      type="search"
                      name="search-form"
                      id="search-form"
                      className="search-input"
                      placeholder="Search "
                      onChange={(e) => setQuery(e.target.value)}
                  />

              </label>

          {/* filter */}
          <div className="select">
                  <select
                      onChange={(e) => setFilter(e.target.value)}
                      className="custom-select"
                      aria-label="Filter Notes By Region"
                  >
                      <option value="">Filter by date</option>
                      {filter_items.map((item) => (
                          <option value={item}>{item}</option>
                      ))}
                  </select>
                  <span className="focus"></span>
              </div>
          </div>
        </div>

            <div className="notes-list">
                {search(notes).slice(0, paginate).map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
                <button className='load-button' onClick={load_more_notes} style={{color:'black'}}>More</button>
            </div>
            <AddButton />
            
        </div>
    )
}

export default NotesListPage
