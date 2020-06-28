import React, { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react';
import Button from '../button/Button';
import './headerCard.style.scss';


interface IHeaderCard {
  updateReports: Function
}

const HeaderCard: FC<IHeaderCard> = ({ updateReports }): ReactElement => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    severity: "Low"
  })
  const handInputChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formInputs.title || !formInputs.description) return;
    updateReports(formInputs);
    setFormInputs({
      title: "",
      description: "",
      severity: "Low"
    })
    setShowForm(!showForm)
  }

  return (
    <div className="header-card">
      <div className="header">
        <h3>Crash Reports</h3>
        <Button
          title="New Report"
          onClickHandler={() => setShowForm(!showForm)}
          iconName={showForm ? "chevron-down" : "chevron-up"}
        />
      </div>
      {showForm && (
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="column">
              <div className="controls">
                <label>Report Title</label>
                <input
                  value={formInputs.title}
                  type="text" required={true}
                  name="title"
                  onChange={handInputChange}
                  placeholder="title of report" />
              </div>
              <div className="controls">
                <label>Crash Severity</label>
                <select value={formInputs.severity} name="severity" onChange={handInputChange}>
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="column">
              <div className="controls">
                <label>Discription</label>
                <textarea
                  name="description"
                  placeholder="Provide more info"
                  value={formInputs.description}
                  onChange={handInputChange}
                />
              </div>
            </div>
            <Button
              iconName="plus-circle"
              onClickHandler={handleSubmit} title="Add"
            />
          </form>
        </div>
      )}
    </div>
  )
}

export default HeaderCard;
