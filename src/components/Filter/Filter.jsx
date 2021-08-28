import "./Filter.css"

const Filter = ({ value, onChange }) => {
  return (
      <div className="Filter">
        <label>
          <p>Find contacts by name</p>
        <input
           type="text"
           name="filter"
           value={value}
           onChange={onChange}
          />
          </label>
    </div>
    )
}

export default Filter;