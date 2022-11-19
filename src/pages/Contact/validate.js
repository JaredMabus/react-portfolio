export default function validate(data, error) {
    const err = { ...error }
    if ('name' in data && data.name.length === 0) {
        err.name = 'Please provide your name'
    } else if ('name' in data && isValidName(data.name)) {
        delete err.name
    }

    if ('email' in data && data.email.length === 0) {
        err.email = 'Please provide an email'
    } else if ('email' in data && !validateEmail(data.email)) {
        err.email = 'Please provide a valid email'
    } else if ('email' in data && validateEmail(data.email)) {
        delete err.email
    }

    return err;
}


const isValidName = (name) => {
    if (typeof name === 'string' && name.length > 0) {
        return true;
    } else {
        return false;
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};