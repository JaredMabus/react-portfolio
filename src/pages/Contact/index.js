import { useState } from 'react';
import PageContainer from "../../components/PageContainer";
import {
    Button,
    Stack,
    Typography,
    TextField,
    FormControl,
    Input,
    FormHelperText,
    InputLabel
} from "@mui/material";
import validate from "./validate";
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from "@react-spring/web";


export default function Contact() {
    const theme = useTheme();
    const animateStyles = useSpring({
        from: { x: 0, y: 10, opacity: 0 },
        to: { x: 0, y: 0, opacity: 1 },
        delay: 250,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateData = async () => {
        setError(validate(formData));
        return validate(formData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = await validateData()

        if (Object.keys(error).length === 0) {
            console.log(Object.keys(error).length === 0)
            console.log("Thanks, message sent")
            console.log(formData)
        } else {
            console.log(error)
        }
    }

    return (
        <>
            <PageContainer>
                <animated.div style={animateStyles}>
                    <Stack sx={{ justifySelf: 'center' }}>
                        <Stack
                            sx={{
                                width: { xs: '100%', sm: '75%', md: '50%' },
                                maxWidth: 500,
                                alignSelf: 'center',
                                my: 4,
                                mt: 10,
                                px: 3,
                                py: 2,
                                backgroundColor: theme.palette.secondary.light,
                                boxShadow: 'rgba(0 0 0 / 10%) 2px 2px 5px 2px',
                                borderRadius: 2,
                                border: `1px solid ${theme.palette.secondary.main}`
                            }}
                            spacing={2}
                        >
                            <Typography sx={{ alignSelf: 'start' }} variant='h5'>Contact</Typography>
                            <Stack sx={{ width: '100%' }} spacing={4}>
                                <FormControl error={error.name ? true : false}>
                                    <InputLabel htmlFor='name-input'>Name</InputLabel>
                                    <Input
                                        type='text'
                                        id='name-input'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        label='Name'
                                    />
                                    {error.name && (<FormHelperText id='name-input-ht'>{error.name}</FormHelperText>)}
                                </FormControl>
                                <FormControl error={error.email ? true : false}>
                                    <InputLabel htmlFor='email-input'>Email</InputLabel>
                                    <Input
                                        type='email'
                                        id='email-input'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        label='Email'
                                    />
                                    {error.email && (<FormHelperText id='name-input-ht'>{error.email}</FormHelperText>)}
                                </FormControl>
                                <TextField
                                    id='message-input'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    label='Message'
                                    multiline
                                    rows={4}
                                    maxRows={10}
                                    variant='outlined'
                                    error={error.message ? true : false}
                                    helperText={error.message ? `${error.message}` : ""}
                                />
                                <Button type='contained' sx={{ width: 200, alignSelf: 'center', justifySelf: 'end' }} onClick={handleSubmit}>Submit</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </animated.div>
            </PageContainer>
        </>
    )
};