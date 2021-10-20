import React,  { useState, useEffect } from "react";
import GlobalFiltersIconWidget from "../../components/pophealth-filters/GlobalFiltersIconWidget";
import PopHealthGlobalFiltersModal from "../../components/pophealth-filters/PopHealthGlobalFiltersModal";

export default (props) => {
    const {
        pageHeading,
    } = props;
    
      const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="row page-header py-2">
            <div className="col-10">
                <div className="font-heading ml-2">{pageHeading}</div>
                <div className="font-subheading ml-2">POPHEALTH DASHBOARD</div>
            </div>
            <div className="col-2">
                <span className="filter filter-clearall" variant="link">Clear All</span>
                <span className="filter filter-icon" onClick={() => setModalShow(true)}>
                    <GlobalFiltersIconWidget content={4}/>
                </span>

                <PopHealthGlobalFiltersModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );
}