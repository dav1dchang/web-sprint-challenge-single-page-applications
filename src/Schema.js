import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Please enter a name for the order')
        .min(2, 'Name must be at least two characters'),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'Size of pizza is required'),
    pepperoni: yup.boolean(),
    bellpepper: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    instructions: yup.string(),
})