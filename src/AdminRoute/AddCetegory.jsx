import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCetegory = () => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const { Title, Description, Category, _id } = notes

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCAL_URL}/notes`)
            .then(res => res.json())
            .then(data => {
                setNotes(data)
            })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newNote = {
            Category: data.Category
        };

        fetch(`${import.meta.env.VITE_LOCAL_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New Category Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/admin/allNote')
            })
            .catch(error => {
                console.error(error);
                // Handle error or display a notification
            });
    };

    return (
        <div>
            <div>
                <div className='bg-blue-500 h-20 flex justify-center  mb-16 items-center'>
                    <h2 className='text-2xl text-white font-bold '>Add Category</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                        <label htmlFor="" className='mt-5'>Category</label>
                        <input className='border-2 bg-white px-5 w-9/12 border-blue-500 h-10' {...register("Category")} />

                        <input className='px-36 p-3 w-9/12 cursor-pointer mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCetegory;
