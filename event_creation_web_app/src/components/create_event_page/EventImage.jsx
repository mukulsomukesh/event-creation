import React, { useContext } from 'react';
import { BiImage } from 'react-icons/bi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import { EventContext } from '../../context/EventContext';


const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESENT;
const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const fileSizeLimit = 10 * 1024 * 1024; // 10 MB limit

export default function EventImage() {
  const { state, dispatch } = useContext(EventContext);


  // handel event details change
  const handleEventDetailsInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FORM_FIELD', field, value });
  };

  // upload image on cloudnary
  const handleImageChange = async (e) => {

    toast('Please wait image will update shortly.', { position: toast.POSITION.TOP_RIGHT });

    const selectedImage = e.target.files[0];

    // check for image size
    if (selectedImage) {
      if (selectedImage.size > fileSizeLimit) {
        alert('File size exceeds the limit of 10MB.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('upload_preset', uploadPreset);

      //  make a post request on cloudnary to upload image
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // toast message
        toast.success('Image successfully changed.', { position: toast.POSITION.TOP_RIGHT });

        //  successful upload, update the image URL in the context state
        handleEventDetailsInputChange('eventImage', response.data.secure_url);
      } catch (error) {

        // error which uploading image
        console.error('Error uploading image:', error);

        // toast message
        toast.success('Somthing went wrong, Uploading image failed.', { position: toast.POSITION.TOP_RIGHT });
      }
    }
  };

  return (
    <>
      <div className='relative w-full rounded-lg overflow-hidden aspect-square'>

        {/* Display the image from the context state */}
        <img className='w-full h-full object-cover aspect-square' alt='Event' src={state.createEventForm.eventImage} />

        {/* START: image input */}
        <div className='absolute bottom-0 right-0'>
          <label htmlFor='image-upload' className='w-full h-full cursor-pointer'>

            {/* Image upload icon */}
            <div className='w-full h-full flex items-center border justify-center bg-primary-50 rounded-lg aspect-square'>
              <BiImage size={'35px'} className='text-gray-500' />
            </div>

            {/* Input type for image */}
            <input
              id='image-upload'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleImageChange}
            />
          </label>
        </div>
        {/* END: image input */}

      </div>

      <ToastContainer />
    </>
  );
}
