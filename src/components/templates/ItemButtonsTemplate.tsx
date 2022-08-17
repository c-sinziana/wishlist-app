// butoanele cu care putem interactiona cu itemele din wishlist
import React from "react";
import { ActionItemButtonAtom} from "../atoms/ActionItemButtonAtom";


export const ItemButtonsTemplate = () => {
    return (
        <div>
            <ActionItemButtonAtom buttonText="Add item"/>
            <ActionItemButtonAtom buttonText="Remove item"/>
            <ActionItemButtonAtom buttonText="Reserve item"/>
        </div>
    )
}