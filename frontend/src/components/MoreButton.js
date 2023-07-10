import React, { useState, useEffect }  from 'react'

const MoreButton = () => {

const [paginate, setpaginate] = useState(4);

const load_more_notes = (event) => {
    setpaginate((prevValue) => prevValue + 4);
}
  return (
    <div>
      <button className='load-button' onClick={load_more_notes}>Load More</button>
    </div>
  )
}

export default MoreButton
