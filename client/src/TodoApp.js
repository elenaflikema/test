import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Todos from "./todoAppComponents/todos/Todos";
import Users from "./todoAppComponents/users/Users";
import Navbar from "./todoAppComponents/navbar/Navbar";
import { AppContainer, PageContainer } from "./todoAppComponents/StyledItems";
import { useDispatch } from "react-redux";
import { fetchRootTodos } from "./store/actions/todos";

const TodoApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRootTodos());
    }, [dispatch]);

    return (
        <AppContainer>
            <BrowserRouter>
                <PageContainer>
                    <Navbar />
                    <Switch>
                        <Route path ="/todos" exact component={Todos} />
                        <Route path ="/users" exact component={Users} />
                    </Switch>
                </PageContainer>
            </BrowserRouter>
        </AppContainer>
    );
};

export default TodoApp;
