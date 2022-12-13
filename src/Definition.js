import React from 'react';
import Select from "./Select.js";


const Definition = ({ mean, main }) => {
    return (
        <>
        <div className="container-fluid">
          <div className="row dark-theme">
            <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline mb-4">
              {main.word}
            </div>
            
            <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
              meaning & definitions :
            </div>
            <div>
              <ol>
                <Select mean={mean} />
              </ol>
            </div>
          </div>
        </div>
      </> 
    );
};

export default Definition;

