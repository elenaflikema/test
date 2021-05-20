import React, { useState }  from "react";
import { createTodo } from "../../store/actions/todos";
import { useDispatch } from "react-redux";

import { CheckBoxBlankStyled, InfoContainer, StyledInput } from '../StyledItems';

const AddTodo = ({ parentId }) => {

    const dispatch = useDispatch();

    const [ newTodo, setNewTodo ] = useState('');

    const onAddTodo = () => {
        dispatch(createTodo ( {
            name: newTodo,
            parentId: parentId
        }));
        setNewTodo('');
    };

    const onChange = ({target: {value}}) => {
        setNewTodo(value);
    };

    return (
        <InfoContainer>
            <CheckBoxBlankStyled
                size="20"
            />
            <StyledInput type='text' value={newTodo} onChange={onChange}/>
            &nbsp;
            {
                newTodo.length > 0 ? (<button onClick={onAddTodo}>Save</button>) : null
            }
        </InfoContainer>
    );
};

export default AddTodo;
