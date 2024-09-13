import React, { useContext } from 'react'
import { Context } from '../ContextApi'
import Controls from './Controls'
import { MdDelete } from "react-icons/md";
import NotesEdit from './NotesEdit';

export default function Intput() {
    const { data, Delete, search } = useContext(Context)

    return (
        <div>
            <div className="container mt-5">

                <h1>Notes </h1>
                <Controls />
                <div className="table_scroll">
                    <div className="css_table">
                        <div className="css_thead">
                            <div className="css_tr">
                                <div className="css_th">S NO.</div>
                                <div className="css_th text-wrap Notes">Notes</div>
                                <div className="css_th">Notes Date</div>
                                <div className="css_th">Working Date</div>
                                <div className="css_th">Status</div>
                                <div className="css_th">Action </div>

                            </div>
                        </div>
                        <div className="css_tbody">
                            {data ? data.filter(e => e.Notes.toLowerCase().includes(search.toLowerCase()) || e.NotesDate.toLowerCase().includes(search.toLowerCase()) || e.Status.toLowerCase().includes(search.toLowerCase()) || e.WorkingDate.toLowerCase().includes(search.toLowerCase())).map((e, i) => {
                                return (
                                    <div className="css_tr" key={i + 1}>
                                        <div className="css_td" data-label="S NO.">{i + 1}</div>
                                        <div className="css_td text-wrap Notes" data-label="Notes">{e.Notes}</div>
                                        <div className="css_td" data-label="Notes Date">{e.NotesDate}</div>
                                        <div className="css_td" data-label="Workin gDate">{e.WorkingDate}</div>
                                        <div className="css_td" data-label="Status">{e.Status}</div>
                                        <div className="css_td Action" data-label="Action"><div className='d-flex align-items-center'><NotesEdit e={e} /> <MdDelete className='mx-1' onClick={() => Delete(e.ID)} style={{ width: "18px" }} /></div></div>
                                    </div>
                                )
                            }) : ""
                            }
                        </div>
                        <div className="css_tfoot">
                            <div className="css_th">S NO.</div>
                            <div className="css_th text-wrap Notes">Notes</div>
                            <div className="css_th">Notes Date</div>
                            <div className="css_th">Working Date</div>
                            <div className="css_th">Status</div>
                            <div className="css_th ">Action</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
