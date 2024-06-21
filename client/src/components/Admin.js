import React, { useState } from 'react'
import axios from 'axios'

const Admin = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [tempImage, setTempImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setTempImage(file);

    reader.onload = () => {
      const imageData = reader.result;
      setImage(imageData);
    };

    reader.readAsDataURL(file);
  };
  // console.log(image);

  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', tempImage);
    formData.append('title', title);
    formData.append("price", price);
    formData.append('description', description);
    axios.post('http://localhost:5000/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
      .then(response => {
        setImageUrl(response.data.url);
      })
      .catch(error => {
        console.error(error);
      });

  }

  console.log(title, price, description);
  return (
    <form className='flex flex-col gap-[20px] font-appContent items-center w-1/3 mx-auto' onSubmit={(event) => handleUpload(event)}>
      <h1 className='text-[30px] font-semibold font-appFont'>Add New Project</h1>
      <div className='w-full relative' >
        <div className="w-full flex p-2 border-[3px] rounded border-dashed" >
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
        </div>
      </div>
      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex flex-col items-start w-full'>
          <label className='font-medium tracking-wide'>Title</label>
          <input className='w-full outline-none rounded p-2' type='text' onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <label className='font-medium tracking-wide'>Price</label>
          <input className='w-full outline-none rounded p-2' type='text' onChange={(e) => { setPrice(e.target.value) }} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <label className='font-medium tracking-wide'>Description</label>
          <textarea rows={5} cols={30} className='outline-none rounded p-2 w-full' style={{ resize: 'none' }} onChange={(e) => { setDescription(e.target.value) }} />
        </div>
      </div>
      <div className='w-full'>
        <button className="bg-[#44484f] w-full hover:bg-[#262b31] hover:scale-105 hover:ease-linear duration-300 will-change-transform text-white font-bold p-[5px] rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Admin