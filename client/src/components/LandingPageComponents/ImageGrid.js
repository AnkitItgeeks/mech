import React from 'react';
import './ImageGrid.css'
const ImageGrid = ({posts}) => {
    console.log(posts)
    return (
        <div className=" w-full  ">
            <div className='flex w-full overflow-clip scroll-mask gap-12'>
                <p className="flex animate-marquee w-full gap-12" >
                    {posts?.map((image, index) => (
                        <img
                            src={image?.imageUrl}
                            alt={"not foumd"}
                            className='h-60 rounded-md'
                        //   className={`w-full ${image.size === 'small' ? 'h-[40%] w-[60%]' : image.size === 'medium' ? 'h-[60%] w-[80%]' : 'h-[80%] w-[100%]'} object-cover rounded-t-md`}
                        />
                    ))}
                </p>
               
            </div>
        </div>
    );
};

const images = [
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 1',
        title: 'Image 1 Title',
        description: 'Image 1 description',
        size: 'small',
    },
    {
        src: 'https://media.istockphoto.com/id/1465056863/photo/large-production-line-with-industrial-robot-arms-at-modern-bright-factory-solar-panels-are.jpg?s=1024x1024&w=is&k=20&c=V-XuOVwllAknLoIieKLMvMtIe4fBm9ENBSQxF-wbZ6c=',
        alt: 'Image 2',
        title: 'Image 2 Title',
        description: 'Image 2 description',
        size: 'medium',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 3',
        title: 'Image 3 Title',
        description: 'Image 3 description',
        size: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 4',
        title: 'Image 4 Title',
        description: 'Image 4 description',
        size: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 5',
        title: 'Image 5 Title',
        description: 'Image 5 description',
        size: 'medium',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 6',
        title: 'Image 6 Title',
        description: 'Image 6 description',
        size: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 1',
        title: 'Image 1 Title',
        description: 'Image 1 description',
        size: 'small',
    },
    {
        src: 'https://media.istockphoto.com/id/1465056863/photo/large-production-line-with-industrial-robot-arms-at-modern-bright-factory-solar-panels-are.jpg?s=1024x1024&w=is&k=20&c=V-XuOVwllAknLoIieKLMvMtIe4fBm9ENBSQxF-wbZ6c=',
        alt: 'Image 2',
        title: 'Image 2 Title',
        description: 'Image 2 description',
        size: 'medium',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 3',
        title: 'Image 3 Title',
        description: 'Image 3 description',
        size: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 4',
        title: 'Image 4 Title',
        description: 'Image 4 description',
        size: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 5',
        title: 'Image 5 Title',
        description: 'Image 5 description',
        size: 'medium',
    },
    {
        src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 6',
        title: 'Image 6 Title',
        description: 'Image 6 description',
        size: 'large',
    },
];

export default ImageGrid;