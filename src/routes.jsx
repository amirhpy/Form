import Form from "./components/FormTemplate/Form";
import Users from "./components/Users/Users";
import DeleteForm from "./components/DeleteForm/DeleteForm";

let routes = [
    { path: '/', element: <Form /> },
    { path: '/users', element: <Users /> },
    { path: '/deleteuser', element: <DeleteForm /> }
]

export default routes;