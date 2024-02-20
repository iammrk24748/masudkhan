import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogUpdate = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const blog = useLoaderData();

    const { _id, title, description } = blog;
    console.log(_id);

    useEffect(() => {
        setValue("title", blog.title);
        setValue("description", blog.description);
    }, [blog, setValue]);

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://masudurrahman-server.vercel.app/blog/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Blog Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/admin/allBlog')
            } else {
                console.log('Failed to update blog');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            <div className='min-h-[calc(100vh-40px)] text-gray-800 rounded-xl'>
                <h2 className='text-center text-2xl bg-blue-500 mb-20 py-5 text-white'>Update Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                    <label htmlFor="" className='text-blue-500 font-semibold'>Update Title</label>
                    <input defaultValue={title} className='border-2 mt-2 bg-white outline-red-500 w-9/12 px-2 py-4 border-blue-500' {...register("title")} />

                    <label className='mt-10 text-blue-500 font-semibold' htmlFor="">Update Description</label>
                    <textarea
                        defaultValue={description}
                        className='border-2 mt-2 w-9/12 px-2 bg-white h-40 outline-red-500 border-blue-500'
                        {...register("description", { required: true })}
                    />

                    <input className='btn mt-10 bg-blue-500 hover:border-blue-500 hover:text-blue-500 text-white w-9/12' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default BlogUpdate;
