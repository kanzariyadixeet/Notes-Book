import React, { useContext, useEffect } from 'react'
import { Context } from '../ContextApi'
import editimg from "../../public/edit.png"

export default function NotesEdit({ e }) {
    const { Notes, NotesDate, WorkingDate, Status, ID } = e
    const { EditSave, EditData, setEditData } = useContext(Context)



    const HendelInputData = (e) => {
        const name = e.target.name
        const value = e.target.value


        setEditData(
            {
                ...EditData,

                [name]: value
            }
        )
    }
    useEffect(() => {

        setEditData({
            Notes: Notes,
            NotesDate: NotesDate,
            WorkingDate: WorkingDate,
            Status: Status,
            ID: ID
        })

    }, [])



    return (
        <>
            <button type="button" className="" data-bs-toggle="modal" data-bs-target={`#${ID}`}>
                <img src={editimg} className='mx-1' alt="" style={{ width: "18px" }} />
            </button>


            <div className="modal fade" id={ID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Notes  Edit </h1>
                            <button type="button" className="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center flex-columnmodal-body d-flex justify-content-center flex-column">
                            <input type="text" className="search-input my-2" name='Notes' value={EditData.Notes} onChange={(e) => HendelInputData(e)} placeholder="Notes..." />
                            <div className='d-flex justify-content-between align-items-center px-3'>
                                <label htmlFor="">Notes Date:</label>
                                <input type="date" className="search-input my-2" name='NotesDate' value={EditData.NotesDate} onChange={(e) => HendelInputData(e)} placeholder="NotesDate..." />

                            </div>

                            <div className='d-flex justify-content-between align-items-center px-3'>
                                <label htmlFor="">Working Date:</label>
                                <input type="date" className="search-input my-2" name='WorkingDate' value={EditData.WorkingDate} onChange={(e) => HendelInputData(e)} placeholder="WorkingDate..." />
                            </div>
                            <input type="text" className="search-input my-2" name='Status' value={EditData.Status} onChange={(e) => HendelInputData(e)} placeholder="Status..." />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="filter-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" className="filter-btn" onClick={() => EditSave(EditData)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
