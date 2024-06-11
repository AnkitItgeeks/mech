import React from 'react';
const posts = [
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
  {
    "id": 1,
    "title": "Robot Arm Project",
    "description": "A mechatronics project that showcases a robotic arm capable of picking and placing objects",
    "image": {
      "url": "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw=",
      "alt": "Robot Arm Project Image"
    },
    "categories": ["Robotics", "Mechatronics", "Automation"],
    "tags": ["Arduino", "Servo Motors", "Robotics"],
    "author": {
      "name": "John Doe",
      "profile_picture": "https://example.com/johndoe.jpg"
    },
    "published_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-05T14:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "project_details": {
      "components": ["Arduino Uno", "Servo Motors", "L298N Motor Driver"],
      "software": ["Arduino IDE", "Python"],
      "features": ["Object detection", "Pick and place functionality"]
    }
  },
]
const ListProject = ({ projects, deleteProject }) => {
  return (
    <div className='flex w-full mx flex-wrap gap-[10px]'>
      {posts.map((item, index) => (
        <div key={index} className='flex flex-col border-[#5c3119] border w-[24%] gap-[10px] group rounded-[5px]'>
          <div className='border w-full overflow-hidden rounded-[5px]'>
            <img className='w-full rounded-[5px] group-hover:scale-105 group-hover:ease-linear  duration-500 will-change-transform ' src={item.image.url} />
          </div>
          <div className='w-full'><p className='text-[#1e1e2f] font-appContent  font-semibold '>{item.title}</p></div>
          <div><p className='text-[#1e1e2f] font-appContent text-[14px]'>{item.description}</p></div>
          <p>$450</p>
        </div>
      ))
      }
    </div>
  );
};

export default ListProject;