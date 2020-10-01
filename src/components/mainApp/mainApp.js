import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import NavigatorBar from '../bar/navBar'
import GagBoard from '../gagBoard/gagBoard'


var MainApp = (props) => {
    return (
        <div>
            <h1>Hey {localStorage.getItem("name")}</h1>
            <NavigatorBar setName={props.setName}/>
            {/* <GagBoard/> */}
        </div>
    )
}

export default MainApp;