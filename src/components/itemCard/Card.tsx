import React, { FC, ReactElement, useState } from 'react';
import Button from '../button/Button';
import Tag from '../tag/Tag';

import './card.style.scss';

type reportType = {
  title: string
  description: string
  severity: string
  id?: string
  tags: string[]
}

interface ICard {
  report: reportType,
  addTag: Function,
  deleteReport: Function
}

const Card: FC<ICard> = ({ report, addTag, deleteReport }): ReactElement => {
  const [tagInput, setTagInput] = useState("");
  const [showTageInput, setShowTagInput] = useState(false);

  const handleAddTagClick: Function = () => {
    if (tagInput === "") return setShowTagInput(!showTageInput);
    addTag(report.id, tagInput)
    setTagInput("");
    return setShowTagInput(!showTageInput);
  }

  return (
    <div className={`item-card ${report.severity}`}>
      <div className="item-card-header">
        <div className="tags">
          {report.tags.map((title: string, idx: number) => (
            <Tag title={title} key={idx} />
          ))}
        </div>
        <div className="add-tag-container">
          <Button
            title=""
            iconName={showTageInput ? 'plus' : 'edit'}
            onClickHandler={handleAddTagClick}
            styleClass="btn"
          />
          {showTageInput && (
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="add tag"
            />
          )}
        </div>
      </div>
      <div className="item-card-body">
        <div className="content">
          <h4>{report.title}</h4>
          <p>{report.description}</p>
        </div>
        <div className="delete-btn-wrapper">
          <Button
            title=""
            iconName="times-circle"
            onClickHandler={() => deleteReport(report.id)}
            styleClass="btn"
          />
        </div>
      </div>
    </div>
  )
}

export default Card;
