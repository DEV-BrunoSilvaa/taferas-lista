import React from "react"

const Filter = () => {
  return (
    <div className="filter">
    <div className="filter-options">
        <div>
            <p>Status</p>
            <select>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Imcomplete">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Icompleta</p>
            <button>Asc</button>
            <button>Desc</button>
        </div>
    </div>
    </div>
  )
}

export default Filter
