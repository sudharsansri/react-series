import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import appStore from "../../utlis/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {Header} from "../header/header.js";

it("should be true",() => {

    render(
        <BrowserRouter>
           <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
        
        )
    
    const cart=screen.getByRole("button")
    //fireEvent.click(cart)-to trigger the click event
    expect(cart).toBeInTheDocument()
})