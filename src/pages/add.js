import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import GiveAWay from "./giveaway";

export default function AddPerson() {

    const [value, setValue] = useState("")

    const addData = () => {
        const name = value;
        console.log("ADDING", name)
        const ref = firebase.firestore().collection("/participants")

        ref.doc(name).get().then((doc) => {
            if (doc.exists) {
                console.log("DOC EXISTS DON'T ADD")
                return
            } else {
                ref.doc(name).set({
                    name: name
                }).then(() => console.log("PARTICIPANT ADDED:", name))
            }
        })
    }

    return (
        <>
            <GiveAWay></GiveAWay>
            <p>
                <label><b>{"Name "}</b></label>
                <br></br>
                <input style={{ minHeight: 50, minWidth: 200, fontSize: 20 }} name="name" type="text" value={value} onChange={(val) => setValue(val.target.value)} />
            </p>
            <p><button onClick={addData} style={{ minHeight: 50, minWidth: 270, fontSize: 20 }}>Add</button></p>
        </>
    )

}
