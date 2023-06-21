import Form from "./components/FormTemplate/Form";
import Users from "./components/Users/Users";
import DeleteForm from "./components/DeleteForm/DeleteForm";
import RenameForm from "./components/RenameForm/RenameForm";

let routes = [
    { path: '/', element: <Form /> },
    { path: '/users', element: <Users /> },
    { path: '/delete', element: <DeleteForm /> },
    { path: '/rename', element: <RenameForm /> },
]

export default routes;