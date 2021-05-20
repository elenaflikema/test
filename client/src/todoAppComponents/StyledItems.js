import { CheckBoxOutlineBlank, CheckBox, LabelImportant } from "@styled-icons/material-rounded";

import styled from "styled-components";
import React from "react";

export const CheckBoxBlankStyled = styled(CheckBoxOutlineBlank)`
    color: rgba(0,0,0,0.3);
    &:hover {
        color: deeppink;
        cursor: pointer;
    }    
`;

export const Project = styled(LabelImportant)`
    color: salmon;
    &:hover {
        color: deeppink;
        cursor: pointer;
    }   
`;

export const CheckBoxStyled = styled(CheckBox)`
    color: rgba(0, 255, 0, 0.4);
    &:hover {
        color: deeppink;
        cursor: pointer;
    }    
`;

export const InfoContainer = styled.div`
    margin: 0;    
`;

export const ClickableTitle = styled.span`
    &:hover {
        cursor: pointer;
    }    
`;

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);  
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 98vh;
`;

export const PageContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-self: center;
    flex-grow: 1;  
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const NavbarContainer = styled.div`
    height: 40px;
    color: white;    
    display: flex;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.4); 
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255);
    gap: 15px;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    flex-grow: 1;    
`;

export const TodoDetailsContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1); 
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255);
    width: 50%; 
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const UsersContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1); 
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255);
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const TodoContainer = styled.div`
    margin: 0 5px 5px 20px;
`;