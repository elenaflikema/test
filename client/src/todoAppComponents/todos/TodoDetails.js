import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoDetailsContainer } from "../StyledItems";
import { selectItem } from "../../store/actions/todos";
import * as api from "../../http/api";

const TodoDetails = () => {

    const dispatch = useDispatch();
    const id = useSelector(state => state.todos.selectedItem);
    const [ todoInfo, setTodoInfo ] = useState(null);

    const onClose = () => {
        dispatch(selectItem(null));
    };

    useEffect(() => {
        const fetchData = async() => {
            return await api.fetchTodoDetailsById(id);
        };
        if (id) {
            fetchData().then(({ data }) => setTodoInfo(data)) ;
        }
        return () => {
            setTodoInfo(null);
        }
    },[ id ]);

    if (!todoInfo) {
        return null;
    } else {
        const { name, creationDate, creator, description } = todoInfo;

        return (
            <TodoDetailsContainer>
                Name: {name}
                <br />
                <br />
                Date: {creationDate}
                <br />
                <br />
                Created by: {creator}
                <br />
                <br />
                Description: {description}
                <br/>
                <button onClick={onClose}>Close</button>
            </TodoDetailsContainer>
        );
    }


};

export default TodoDetails;
