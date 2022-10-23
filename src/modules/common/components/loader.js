import React from "react";

const Loader = ({text}) => {
    return (
        <div className="text-center spinner">
            <div className="spinner-border" role="status"/>
            <p>{text}...</p>
        </div>
    )
}
export default Loader