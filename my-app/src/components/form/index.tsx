import React, { useState, FormEvent, ChangeEvent } from 'react';
import { IFormProps } from './types';
import useHttp from '../../hooks/useHttpHook';
import './style.scss';

const Form: React.FC<IFormProps> = ({ onUserAddition }) => {

    const [state, setState] = useState({
        username: "",
        phone: "",
        website: "",
    });

    const { request } = useHttp()

    const onFieldChange = (event: any) => {
        let value = event.target.value;

        setState({ ...state, [event.target.name]: value });
    };

    const fetchRequest = async (body: any) => {
        const res = await request(`https://jsonplaceholder.typicode.com/users`, 'POST', JSON.stringify(body));
        return res;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetchRequest(state)
            .then((response) => response.json())
            .then((user) => onUserAddition(user));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>
                    Username:
                    <input type="text" name='username' onChange={onFieldChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" name='phone' onChange={onFieldChange} />
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input type="email" name='website' onChange={onFieldChange} />
                </label>
            </div>
            <button className='button' type="submit">Submit</button>
        </form>
    );
};

export default Form;
