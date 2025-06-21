import React from 'react';

export const UserContext = React.createContext({
    user: { name: "Default User", email: "" }
});