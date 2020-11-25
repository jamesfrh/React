import React from "react";

const validation = (props) => {
    //to check conditions either use this
    //start here
    let validationMsg = "text is long enough";
    if(props.inputLength >= 5){
        validationMsg = "text too long!!!";
    }

    return(
        <div>
            <p>{validationMsg}</p>

        </div>
        //end here
    );

    /* or can use turnary expression
    return (
        <div>
            { props.inputLength > 5 ?
                <p>Text too long</p> :
                <p>Text too short</p>
            }


        </div>

    )
    */

}
export default validation;