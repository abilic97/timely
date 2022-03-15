import React from 'react'
import styles from './style.module.css'
import {  useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver';

const ProjectTable = ({ displayFirstRow }) => {
    var Heading = [["ID", "Project", "Start Date", "End Date", "Duration"],];
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const { startDateString, setDataContext, dataContext } = useContext(AppContext);

    useEffect(() => {
        fetchMyAPI();
    }, [])

    async function fetchMyAPI() {
        let result = await fetch('https://localhost:5001/api/timely/grid/', { mode: 'cors' });
        result = await result.json();
        setDataContext({ result })
    }

    async function delteTable() {

        fetch('https://localhost:5001/api/timely/grid', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(() => console.log('Delete successful'));

        setDataContext({ result: [] });
    }
    const exportToExcel = () => {
        const ws = XLSX.utils.book_new();
        XLSX.utils.sheet_add_aoa(ws, Heading);
        XLSX.utils.sheet_add_json(ws, dataContext.result, { origin: 'A2', skipHeader: true });         
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, 'Data' + fileExtension);
    }

    return (
        <div className={styles.tableContainer}>
            {!displayFirstRow && (
                <div>
                    <div className={styles.projectsTitle}>Completed projects</div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={delteTable}>Delete</button>
                        <button className={styles.button} onClick={exportToExcel}>Export</button>
                    </div>
                </div>)}
            <table className={styles.table} >
                <thead>
                    <tr>
                        <th className={styles.tableHeaders}>Project</th>
                        <th className={styles.tableHeaders}>Start date</th>
                        <th className={styles.tableHeaders}>End date</th>
                        <th className={styles.tableHeaders}>Duration date</th>
                    </tr>
                </thead>
                <tbody>
                    {displayFirstRow && (
                        <tr>
                            <td>-</td>
                            <td>{startDateString}</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    )}
                    {
                        dataContext.result.map((item) => (
                            <tr key={item.id}>
                                <td>{item.projectName}</td>
                                <td>{item.projectStartDate}</td>
                                <td>{item.projectEndDate}</td>
                                <td>{item.projectDurationSeconds}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProjectTable