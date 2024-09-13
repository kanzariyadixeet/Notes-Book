import React, { useContext } from 'react'
import NotesAdd from './NotesAdd'
import { Context } from '../ContextApi'

export default function Controls() {
    const { search, setsearch } = useContext(Context)

    return (
        <>
            <div className="controls ">

                <input type="text" className="search-input mb-2" value={search} onChange={(e) => { setsearch(e.target.value) }} placeholder="Search orders..." />
                <NotesAdd />


            </div>
        </>
    )
}
