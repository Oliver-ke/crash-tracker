import React, { useState, FC, ReactElement, useEffect } from 'react';
import ItemCard from './components/itemCard/Card'
import HeaderCard from './components/headerCard/HeaderCard'
import SectionDivider from './components/sectionDivider/SectionDivider'
import './App.scss';

type reportType = {
  title: string
  description: string
  severity: string
  id?: string
  tags: string[]
}

const App: FC = (): ReactElement => {
  const [reports, setReports] = useState<reportType[]>([]);

  useEffect(() => {
    const saveReports = localStorage.getItem('reports');
    if (saveReports) {
      setReports(JSON.parse(saveReports));
    }
  }, [])

  const updateReports = (report: reportType) => {
    report.id = Math.random().toString(36).substr(2, 5);
    report.tags = [report.severity];
    const newReport = [report, ...reports];
    localStorage.setItem('reports', JSON.stringify(newReport))
    setReports(newReport)
  }
  const deleteReport = (reportId: string) => {
    const update = reports.filter((report) => report.id !== reportId);
    localStorage.setItem('reports', JSON.stringify(update))
    setReports(update);
  }
  const addTag = ((reportId: string, tag: string) => {
    const newReport = reports.map((report: reportType) => {
      if (report.id === reportId) {
        report.tags = [...report.tags, tag]
        return report
      }
      return report;
    });
    localStorage.setItem('reports', JSON.stringify(newReport))
    setReports(newReport);
  })
  return (
    <div className="app">
      <div className="container">
        <HeaderCard updateReports={updateReports} />
        <SectionDivider reportLength={reports.length} />
        <div className="item-card-container">
          {reports.map((report: reportType) => (
            <ItemCard deleteReport={deleteReport} addTag={addTag} key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
