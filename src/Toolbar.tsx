import React from 'react'

import './styles/Toolbar.css'
import { SortBy, SortOrder } from './CompanyWrapper'

interface Props {
  total?: number
  sortBy: SortBy
  sortOrder: SortOrder
  setSortBy: (sort: SortBy) => void
  setSortOrder: (order: SortOrder) => void
}

function Toolbar({ total, sortBy, setSortBy, sortOrder, setSortOrder }: Props) {
  return (
    <div className='toolbar'>
      {!!total && <div className='total'>Totaal gevonden: {total}</div>}

      <div className='sort'>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          className='sort-select'
          data-testid='sortSelect'
        >
          {Object.values(SortBy).map((sort, index) => {
            return (
              <option value={sort} key={index}>
                {sort}
              </option>
            )
          })}
        </select>

        <button
          onClick={() =>
            setSortOrder(
              sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC
            )
          }
          className={`sort-btn ${sortOrder === SortOrder.ASC ? 'asc' : 'desc'}`}
          title={sortOrder === SortOrder.ASC ? 'Aflopend' : 'Oplopend'}
          data-testid='sortBtn'
        ></button>
      </div>
    </div>
  )
}

export default Toolbar
