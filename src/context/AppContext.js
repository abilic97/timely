import React, { createContext, useState,} from 'react'

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [dataContext, setDataContext] = useState({result: []});
    const [startDateContext, setStartDate] =useState();
    const [startDateString, setStartDateString] =useState("0");
    const addNewStartDate = (startDate, dateString) =>
    {
        setStartDate(startDate);
        setStartDateString(dateString)
    };

    return (
      <AppContext.Provider value={{dataContext, startDateContext, startDateString,
       addNewStartDate, setDataContext}}>
        {props.children}
      </AppContext.Provider>
    )
  }
export default AppContextProvider;




