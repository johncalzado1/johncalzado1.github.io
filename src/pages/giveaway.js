import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

export default function GiveAWay() {

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("/participants")
      .onSnapshot((querySnapshot) => {
        var names = [];
        querySnapshot.forEach(function (doc) {
          names.push(doc.data().name);
        });
        setData(names)
      })
  }, [])

  const renderData = (data) => {
    return data.map(item => <li>{item}</li>)
  }

  return <div>{data ? <ul>{renderData(data)}</ul> : "Loading..."}</div>

}
