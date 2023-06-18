import Form from "./components/FormTemplate/Form";
import Users from "./components/Users/Users";

let routes = [
    { path: '/', element: <Form /> },
    { path: '/users', element: <Users />},
]

export default routes;