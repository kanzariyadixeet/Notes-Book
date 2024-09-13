import { useContext } from 'react'
import { Context } from '../ContextApi'


export default function NotesAdd() {
    const { InputData, setInputData, Save } = useContext(Context)
    const { Notes, NotesDate, WorkingDate, Status } = InputData


    const HendelInputData = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputData(
            {
                ...InputData,

                [name]: value
            }
        )
    }


    return (
        <>
            <button type="button" className=" filter-btn mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Notes Add +
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Notes  Add</h1>
                            <button type="button" className="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center flex-column ">
                            <input type="text" className="search-input my-2" name='Notes' value={Notes} onChange={(e) => HendelInputData(e)} placeholder="Notes..." />
                            <div className='d-flex justify-content-between align-items-center px-3'>
                                <label htmlFor="">Notes Date:</label>
                                <input type="date" className="search-input my-2" name='NotesDate' value={NotesDate} onChange={(e) => HendelInputData(e)} placeholder="NotesDate..." />
                            </div>
                            <div className='d-flex justify-content-between align-items-center px-3'>
                                <label htmlFor="">Working Date:</label>
                                <input type="date" className="search-input my-2" name='WorkingDate' value={WorkingDate} onChange={(e) => HendelInputData(e)} placeholder="WorkingDate..." />
                            </div>
                            <input type="text" className="search-input my-2" name='Status' value={Status} onChange={(e) => HendelInputData(e)} placeholder="Status..." />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="filter-btn" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                disabled={Notes === "" || NotesDate === "" || WorkingDate === "" || Status === ""}
                                style={{ cursor: (Notes === "" || NotesDate === "" || WorkingDate === "" || Status === "") ? "not-allowed" : "pointer" }}
                                className="filter-btn"
                                data-bs-dismiss="modal"
                                onClick={() => Save(InputData)}
                            >
                                Save
                            </button>                    </div>
                    </div>
                </div>
            </div >

        </>
    )
}
