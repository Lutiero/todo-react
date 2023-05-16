function Filter({filter, setFilter, setOrder}) {
  return (
    <div className='filter'>
      <h2>Filtrar</h2>
      <div className='filter-options'>
        <div>
          <p>Status</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='incompleted'>Incomplete</option>
          </select>
        </div>
        <div>
          <p>Order</p>
          <button onClick={() =>  setOrder('ASC')}>ASC</button>
          <button onClick={() => setOrder('DESC')}>DESC</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;