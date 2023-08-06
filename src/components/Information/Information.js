import React from "react";
import { InformationBackground, InformationContainer, InformationButtonPages, InformationButtonLanguages } from "./InformationStyles.js";

function Information({ onClose, text }) {

    return (
        <div>
            {/* <InformationButtonPages onClick={onClose}>i</InformationButtonPages>
            <InformationButtonLanguages onClickCapture={onClose}>i</InformationButtonLanguages> */}


                <InformationBackground onClick={onClose}>
                    <InformationContainer>
                        { text } 
                    </InformationContainer>
                </InformationBackground>
        </div>


    );
}

export default Information;
