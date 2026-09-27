import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')

  const types = ['All', ...new Set(GUNS.map((gun) => gun.type))]

  const filteredGuns = useMemo(() => {
    return GUNS.filter((gun) => {
      const searchText = search.toLowerCase()

      const matchesSearch =
        gun.name.toLowerCase().includes(searchText) ||
        gun.type.toLowerCase().includes(searchText) ||
        gun.caliber.toLowerCase().includes(searchText)

      const matchesType = type === 'All' || gun.type === type

      return matchesSearch && matchesType
    })
  }, [search, type])

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="catalog-controls">
          <input
            type="search"
            className="search-input"
            placeholder="Search guns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item === 'All' ? 'All types' : item}
              </option>
            ))}
          </select>
        </div>

        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{filteredGuns.length} pieces</span>
        </div>

        {filteredGuns.length > 0 ? (
          <ul className="stock">
            {filteredGuns.map((gun) => (
              <GunCard key={gun.name} gun={gun} />
            ))}
          </ul>
        ) : (
          <p className="no-results">No guns match</p>
        )}
      </section>
    </>
  )
}

export default Catalog