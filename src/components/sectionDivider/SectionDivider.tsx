import React, { FC, ReactElement } from 'react';


import './sectionDivider.style.scss';
interface IDivider {
  reportLength: number
}

const SectionDivider: FC<IDivider> = ({ reportLength }): ReactElement => {
  return (
    <div className="section-divider">
      <div className="line" />
      <div className="report-count">
        <h4>{`${reportLength} reports`}</h4>
      </div>
    </div>
  )
}

export default SectionDivider;
