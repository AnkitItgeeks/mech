import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#868d9d] py-4 ">
      <div className="flex justify-between ">
        <div className="">
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-600 hover:text-[#262b31] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.46 4.94c-.83.37-1.73.62-2.68.74.96-.58 1.7-1.5 2.05-2.6-.9.53-1.89.91-2.95 1.12-.85-.91-2.06-1.48-3.4-1.48-2.58 0-4.67 2.1-4.67 4.67 0 .37.04.73.12 1.08-3.88-.2-7.31-2.05-9.61-4.86-.4.69-.63 1.49-.63 2.35 0 1.62.82 3.05 2.06 3.88-.76-.02-1.48-.23-2.1-.57v.06c0 2.26 1.61 4.14 3.74 4.57-.4.12-.83.18-1.28.18-.31 0-.62-.03-.92-.08.62 1.9 2.42 3.29 4.55 3.33-1.67 1.3-3.79 2.08-6.08 2.08-.39 0-.78-.02-1.17-.07 2.17 1.39 4.75 2.2 7.53 2.2 9.04 0 13.98-7.49 13.98-13.98 0-.21 0-.42-.02-.63.96-.69 1.8-1.55 2.46-2.54z" /></svg>
          </a>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-600 hover:text-[#262b31] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 3v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v8h-3v-8h-3v-3h3v-2c0-1.66 1.34-3 3-3h2z" /></svg>
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-600 hover:text-[#262b31]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.15c3.21 0 3.59.01 4.85.07 1.16.05 1.84.2 2.34.34.66.2 1.13.45 1.63.94.5.5.74.97.94 1.63.14.5.29 1.18.34 2.34.06 1.26.07 1.64.07 4.85s-.01 3.59-.07 4.85c-.05 1.16-.2 1.84-.34 2.34-.2.66-.45 1.13-.94 1.63-.5.5-.97.74-1.63.94-.5.14-1.18.29-2.34.34-1.26.06-1.64.07-4.85.07s-3.59-.01-4.85-.07c-1.16-.05-1.84-.2-2.34-.34-.66-.2-1.13-.45-1.63-.94-.5-.5-.74-.97-.94-1.63-.14-.5-.29-1.18-.34-2.34-.06-1.26-.07-1.64-.07-4.85s.01-3.59.07-4.85c.05-1.16.2-1.84.34-2.34.2-.66.45-1.13.94-1.63.5-.5.97-.74 1.63-.94.5-.14 1.18-.29 2.34-.34 1.26-.06 1.64-.07 4.85-.07zM12 0c-3.34 0-3.75.01-5.06.07-1.42.06-2.4.23-3.4.5-1 .29-1.86.67-2.68 1.48s-1.19 1.69-1.48 2.68c-.27 1-.44 1.98-.5 3.4-.06 1.31-.07 1.72-.07 5.06s.01 3.75.07 5.06c.06 1.42.23 2.4.5 3.4.29 1 1 1.86 1.48 2.68s1.69 1.19 2.68 1.48c1 .27 1.98.44 3.4.5 1.31.06 1.72.07 5.06.07s3.75-.01 5.06-.07c1.42-.06 2.4-.23 3.4-.5 1-.29 1.86-1 2.68-1.48s1.19-1.69 1.48-2.68c.27-1 .44-1.98.5-3.4.06-1.31.07-1.72.07-5.06s-.01-3.75-.07-5.06c-.06-1.42-.23-2.4-.5-3.4-.29-1-1-1.86-1.48-2.68s-1.69-1.19-2.68-1.48c-1-.27-1.98-.44-3.4-.5-1.31-.06-1.72-.07-5.06-.07zm0 5.05c-.34 0-.67.01-1 .02-.92.03-1.6.12-2.04.20-.54.09-.93.22-1.34.46-.41.24-.73.56-1.34 1.34-.24.32-.37.65-.46 1.04-.08.44-.17 1.12-.2 2.04-.02.33-.02.66-.02 1 0 .34 0 .67.02 1 .03.92.12 1.6.2 2.04.09.54.22.93.46 1.34.24.41.56.73 1.34 1.34.32.24.65.37 1.04.46.44.08 1.12.17 2.04.2.33.02.66.02 1 .02.34 0 .67 0 1-.02.92-.03 1.6-.12 2.04-.2.54-.09.93-.22 1.34-.46.41-.24.73-.56 1.34-1.34.24-.32.37-.65.46-1.04.08-.44.17-1.12.2-2.04.02-.33.02-.66.02-1 0-.34 0-.67-.02-1-.03-.92-.12-1.6-.2-2.04-.09-.54-.22-.93-.46-1.34-.24-.41-.56-.73-1.34-1.34-.32-.24-.65-.37-1.04-.46-.44-.08-1.12-.17-2.04-.2-.33-.02-.66-.02-1-.02-.34 0-.67 0-1 .02-.92.03-1.6.12-2.04.2-.54.09-.93.22-1.34.46-.41.24-.73.56-1.34 1.34-.24.32-.37.65-.46 1.04-.08.44-.17 1.12-.2 2.04-.02.33-.02.66-.02 1 0 .34 0 .67.02 1-.03.92-.12 1.6-.2 2.04-.09.54-.22.93-.46 1.34-.24.41-.56.73-1.34 1.34-.32.24-.65.37-1.04.46-.44.08-1.12.17-2.04.2-.33.02-.66.02-1 .02z" /></svg>
          </a>
        </div>
        <span className="text-gray-600 text-sm">© 2024 MechaTronics. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
