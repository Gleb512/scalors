import React from "react";
import {Route, Switch} from "react-router-dom";
import ProjectsListContainer from "./projectsList/projectsList";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route path='/' render={() => <ProjectsListContainer /> } />
                <Route path='/edit:id' render={() =>  <h1>Edit</h1>  } />
            </Switch>
        </div>
    );
}
export default Content