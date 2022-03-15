import React from 'react';
import ProjectTable from '../Components/ProjectTable';
import AppContextProvider from "../context/AppContext";

const ProjectPage = () => {
    return (
        <div>
            <AppContextProvider>
                <ProjectTable />
            </AppContextProvider>
        </div>
    )
}
export default ProjectPage