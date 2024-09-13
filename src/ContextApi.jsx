import React, { createContext, useState, useEffect } from "react";



const Context = createContext()


const ContextApi = ({ children }) => {

    const initializeData = () => {
        const storedData = localStorage.getItem("Notes");
        return storedData ? JSON.parse(storedData) : [];
    };

    const [search, setsearch] = useState("")
    const [data, setData] = useState(initializeData);

    const [Coponet, setCoponet] = useState("")



    const [InputData, setInputData] = useState({
        Notes: "",
        NotesDate: "",
        WorkingDate: "",
        Status: "",
        ID: ""
    })

    const [EditData, setEditData] = useState({
        Notes: "",
        NotesDate: "",
        WorkingDate: "",
        Status: "",
        ID: ""
    })

    const Save = (e) => {

        e.ID = new Date().getTime()

        setData([...data, e])
        setInputData({
            Notes: "",
            NotesDate: "",
            WorkingDate: "",
            Status: ""
        })
    }



    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(data));
    }, [data, InputData, EditData])



    const EditSave = (b) => {

        const updatedData = data.map((item) =>
            item.ID === b.ID ? b : item
        );

        setData(updatedData)

    }

    const Delete = (w) => {
        setData(data.filter((e) => e.ID !== w))
    }

    return (
        <Context.Provider value={{ search, setsearch, InputData, setInputData, Save, data, Coponet, setCoponet, EditSave, EditData, setEditData, Delete }}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextApi }