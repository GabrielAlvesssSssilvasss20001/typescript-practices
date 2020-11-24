interface UserInterface{
    name: string,
    password: string,
    email: string,
    address?: string
};


export let createUser = ({name, password, email, address}: UserInterface) => {
    const userObj = {
        name,
        password,
        email,
        address
    };
    return userObj;
};