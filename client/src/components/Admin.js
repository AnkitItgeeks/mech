import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Admin = () => {
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadDetails, setUploadDetail] = useState({
    title: '',
    price: '',
    description: '',
  });
  const [tempImage, setTempImage] = useState('');
  const [errors, setErrors] = useState({
    image: '',
    title: '',
    price: '',
    description: '',
  });

  const changeHandler = (event) => {
    setUploadDetail({ ...uploadDetails, [event.target.name]: event.target.value })
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      // Handle case where no file is selected (optional)
      console.error('No file selected');
      return;
    }
    const reader = new FileReader();
    setTempImage(file);

    reader.onload = () => {
      const imageData = reader.result;
      setImage(imageData);
    };

    reader.readAsDataURL(file);
  };


  const handleUpload = (event) => {
    event.preventDefault();
    if (!tempImage) {
      setErrors({
        image: 'Image required'
      })
    } else if (!uploadDetails.title) {
      setErrors({
        title: 'Title required'
      })
    } else if (!uploadDetails.price) {
      setErrors({
        price: 'Price required'
      })
    } else if (!uploadDetails.description) {
      setErrors({
        description: 'Description required'
      })
    } else {
      setLoader(true);
      const formData = new FormData();
      formData.append('file', tempImage);
      formData.append('title', uploadDetails.title);
      formData.append("price", uploadDetails.price);
      formData.append('description', uploadDetails.description);
      axios.post('http://localhost:5000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )
        .then(response => {
          // alert("Product Details Uploaded successfully")
          toast.success("Product Details Uploaded successfully");
          setLoader(false);
          setImageUrl(response.data.url);
          setErrors({
            image: '',
            title: '',
            price: '',
            description: '',
          })
          setUploadDetail({
            title: '',
            price: '',
            description: '',
          })
          setTempImage('');
          setImage('');
        })
        .catch(error => {
          console.error(error);
          setLoader(false);
        });
    }
  }
  useEffect(() => {
    if (tempImage) {
      setErrors({
        image: ''
      })
    } else if (uploadDetails.title) {
      setErrors({
        title: ''
      })
    } else if (uploadDetails.price) {
      setErrors({
        price: ''
      })
    } else if (uploadDetails.description) {
      setErrors({
        description: ''
      })
    }
  }, [uploadDetails, image])


  return (
    <form className='flex flex-col gap-[20px] font-appContent items-center w-1/3 mx-auto' onSubmit={(event) => handleUpload(event)}>
      <Toaster/>
      <h1 className='text-[30px] font-semibold font-appFont'>Add New Project</h1>
      <div className='w-full relative' >
        <div className="w-full p-2 border-[3px] rounded border-dashed" >
          <label className="w-full flex justify-center cursor-pointer relative" >
            <input type='file' id='uploadImage' style={{ display: "none" }} accept="image/png, image/gif, image/jpeg,image/jpg" onInput={(event) => { handleImageChange(event) }} />
            {image
              ? <img className="max-w-[70px] rounded-[5px] h-[66px] aspect-auto-1 object-center " src={image} />
              : <label htmlFor='uploadImage' className="flex w-full flex-col items-center" >
                <div className='font-appFont' ><svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
                <div className="sec-heading cursor-pointer" htmlFor='uploadImage'>Select image</div>
              </label>
            }
          </label>
          {errors.image && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{errors.image}</p>}
        </div>
      </div>
      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex flex-col items-start w-full relative'>
          <label className='font-medium tracking-wide'>Title</label>
          <input className='w-full outline-none rounded p-2' name='title' value={uploadDetails.title} type='text' onChange={changeHandler} />
          {errors.title && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{errors.title}</p>}
        </div>
        <div className='flex flex-col items-start w-full relative'>
          <label className='font-medium tracking-wide'>Price</label>
          <input className='w-full outline-none rounded p-2' type='number' name='price' value={uploadDetails.price} onChange={changeHandler} />
          {errors.price && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{errors.price}</p>}
        </div>
        <div className='flex flex-col items-start w-full relative'>
          <label className='font-medium tracking-wide'>Description</label>
          <textarea rows={4} cols={30} className='outline-none rounded p-2 w-full' name='description' value={uploadDetails.description} style={{ resize: 'none' }} onChange={changeHandler} />
          {errors.description && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{errors.description}</p>}
        </div>
      </div>
      <div className='w-full'>
        {loader ?
          <div className="bg-[#44484f] w-full flex justify-center hover:bg-[#262b31] hover:scale-105 hover:ease-linear duration-300 will-change-transform text-white font-bold p-[5px] rounded focus:outline-none focus:shadow-outline" role="status">
            <svg aria-hidden="true" class="w-[24px] h-[24px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          :
          <button className="bg-[#44484f] w-full hover:bg-[#262b31] hover:scale-105 hover:ease-linear duration-300 will-change-transform text-white font-bold p-[5px] rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        }
      </div>
    </form>
  )
}

export default Admin