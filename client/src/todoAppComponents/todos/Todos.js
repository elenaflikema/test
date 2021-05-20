import React, { useState }  from "react";
import TodoEntity from "./TodoEntity";
import TodoDetails from "./TodoDetails";

import { useDispatch, useSelector } from "react-redux";
import { StyledInput, FlexContainer, TodoDetailsContainer } from "../StyledItems";
import { createTodo } from "../../store/actions/todos";

const Todos = () => {

    const [ newTodo, setNewTodo ] = useState('');
    const dispatch = useDispatch();

    const rootTodos = useSelector(state => state.todos.items.filter(({parentId}) => parentId === null));

    const onAddProject = () => {
        dispatch(createTodo ( {
            name: newTodo
        }));
        setNewTodo('');
    };

    const onChange = ({target: {value}}) => {
        setNewTodo(value);
    };

    return (
        <FlexContainer>
            <TodoDetailsContainer>
                <div>
                    { rootTodos.map((todo) => <TodoEntity key={todo._id} {...todo}/>) }
                </div>
                <div>
                    New Project: <StyledInput type='text' value={newTodo} onChange={onChange}/>
                    &nbsp;<button onClick={onAddProject}>Save</button>
                </div>
            </TodoDetailsContainer>
            <TodoDetails />
        </FlexContainer>
    );
};

export default Todos;
