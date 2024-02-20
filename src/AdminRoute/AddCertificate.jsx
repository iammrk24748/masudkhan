import React, { useEffect, useState } from 'react';

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddCertificate = ({ loading = false }) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.collegeName.value;
    const qualification = event.target.qualification.value;
    const section = event.target.section.value;
    const year = event.target.year.value;

    const data = { title, qualification, section, year };

    const imageInput = event.target.image;
    const selectedImage = imageInput.files[0];

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch(image_hosting_url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const imageUrl = result.data.url;
        const imageName = selectedImage.name;
        const { title, qualification, section, year } = data;

        const timestampOptions = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        };

        const timestamp = new Date().toLocaleString(
          'en-US',
          timestampOptions
        );
        const newCertificate = {
          title,
          qualification,
          section,
          year,
          image: imageUrl,
          timestamp,
        };

        fetch('https://masudurrahman-server.vercel.app/certificate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCertificate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        setUploadedImageName(imageName);

        // Do something with the submitted data (e.g., save it to the database)
      } else {
        console.error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <div className='min-h-[calc(100vh-40px)] text-gray-800 rounded-xl'>
        <h2 className='text-center text-white text-2xl bg-rose-500 mb-20 py-5'>
          Add Certificate
        </h2>
        <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
          <div className='space-y-6'>
            <div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='collegeName' className='block text-gray-600'>
                  College Name
                </label>
              </div>
              <input
                className='px-10 py-3 w-full bg-white text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='collegeName'
                id='collegeName'
                type='text'
                placeholder='College Name'
                required
              />
            </div>

            <div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='qualification' className='block text-gray-600'>
                  Qualification
                </label>
              </div>
              <input
                className='px-10 py-3 bg-white w-full text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='qualification'
                id='qualification'
                type='text'
                placeholder='Qualification'
                required
              />
            </div>

            <div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='section' className='block text-gray-600'>
                  Section
                </label>
              </div>
              <input
                className='px-10 py-3 bg-white w-full text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='section'
                id='section'
                type='text'
                placeholder='Section'
                required
              />
            </div>

            <div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='year' className='block text-gray-600'>
                  Year
                </label>
              </div>
              <input
                className='px-10 py-3 bg-white w-full text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='year'
                id='year'
                type='text'
                placeholder='Year'
                required
              />
            </div>

            <div className='bg-white rounded-lg'>
              <div className='file_upload px-5 py-3 border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                      onChange={(event) => {
                        const { files } = event.target;
                        if (files && files.length > 0) {
                          setUploadedImageName(files[0].name);
                        } else {
                          setUploadedImageName('');
                        }
                      }}
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      Upload Certificate
                    </div>
                  </label>
                </div>
              </div>
              {uploadedImageName && (
                <div className='mt-2 text-sm text-gray-600'>
                  {uploadedImageName}
                </div>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='px-36 p-3 w-full mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCertificate;
