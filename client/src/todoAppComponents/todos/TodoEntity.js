import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos, selectItem } from "../../store/actions/todos";
import { CheckBoxStyled, CheckBoxBlankStyled, Project, TodoContainer, ClickableTitle } from "../StyledItems";
import AddTodo from "./AddTodo";


const TodoEntity = ({ name, _id, isCompleted, isLoaded, parentId }) => {

    const [ showDetails, setShowDetails ] = useState(false);

    const dispatch = useDispatch();
    const children = useSelector(state => state.todos.items.filter(({parentId}) => parentId === _id));

    const onTodoClick = () => {
        openTodoDetails(_id);
        dispatch(fetchTodos({ isLoaded: isLoaded, parentId: _id}));
    };

    const openTodoDetails = () => {
        setShowDetails(prev => !prev);
        dispatch(selectItem(_id));
    };

    const Icon = !parentId ? Project :
        (isCompleted ? CheckBoxStyled : CheckBoxBlankStyled);

    const getCheckbox = () => {
        return (
            <Icon size="20"
                onClick={() => /*dispatch(setCompletedFlag({ id: _id, isCompleted: !isCompleted}))*/ console.info('log')}
            />
        );
    };

    const getClickableItem = () => (
        <ClickableTitle onClick={onTodoClick}>
            {name}
        </ClickableTitle>
    );

    if (!isLoaded || children.length === 0) {
        return (
            <>
                <div>
                    {getCheckbox()}
                    {getClickableItem()}
                </div>
                <TodoContainer>
                    { showDetails && <AddTodo parentId={_id}/> }
                </TodoContainer>
            </>
        );
    }

    return (
        <>
            <div>
                {getCheckbox()}
                {getClickableItem()}
            </div>
            <TodoContainer>
                { showDetails &&
                    <>
                        {children.map(ch => <TodoEntity key={_id} {...ch}/>)}
                        <AddTodo parentId={_id}/>
                    </>
                }
            </TodoContainer>
        </>
    );

};

export default TodoEntity;
