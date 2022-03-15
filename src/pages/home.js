import React from 'react';
import StartButton from '../Components/StartButton';
import AppContextProvider from "../context/AppContext";


const HomePage = () => {
    return (
        <div>
            <AppContextProvider>
                <StartButton />
            </AppContextProvider>
        </div>
    )
}
export default HomePage