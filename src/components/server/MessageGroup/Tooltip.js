import { AddReaction, EditIcon } from "utils/images";

import React from "react";

const Tooltip = () => {
    return (
        <div className="tooltip">
            <div className="tooltip-icon">
                <img src={AddReaction} alt="add-reaction" />
            </div>
            <div className="tooltip-icon">
                <img src={EditIcon} alt="add-reaction" />
            </div>
            <div className="tooltip-icon"></div>
            <div className="tooltip-icon"></div>
        </div>
    );
};

export default Tooltip;
