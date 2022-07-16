// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// function Upload(props) {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileUploadedSuccessfully, setFileUploadedSuccessfully] =
//     useState(false);

//   const fileChangeHandler = (event) => {
//     setSelectedFile(event.target.files[0]);

//     // let files = event.target.files;
//     // console.log(files);

//     // let reader = new FileReader();
//     // reader.readAsDataURL(files[0]);

//     // reader.onload = (e) => {
//     //   console.log('image data :', e.target.result);

//     //   const url = '';
//     //   const formData = { file: e.target.result };
//     //   return axios.post(url, formData).then((response) => {
//     //     console.log('result :', response);
//     //   });
//     // };

//     //https://www.youtube.com/watch?v=sp9r6hSWH_o
//   };

//   fileUploadHandler = () => {
//     const formData = new FormData();
//     formData.append('demofile', selectedFile, selectedFile.name);

//     console.log(formData);

//     //make api call to upload
//     axios
//       .post(
//         'https://q6x9vaobpd.execute-api.us-east-1.amazonaws.com/dev/file-upload',
//         formData
//       )
//       .then(() => {
//         setSelectedFile(null);
//         setFileUploadedSuccessfully(true);
//       });
//   };

//   return (
//     <>
//       <input type="file" name="fileName" onChange={fileChangeHandler} />
//       <button onClick={fileUploadHanlder}>Upload</button>
//     </>
//   );
// }

// Upload.propTypes = {};

// export default Upload;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Upload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploadedSuccessfully, setFileUploadedSuccessfully] =
    useState(false);

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);

    // let files = event.target.files;
    // console.log(files);

    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = (e) => {
    //   console.log('image data :', e.target.result);

    //   const url = '';
    //   const formData = { file: e.target.result };
    //   return axios.post(url, formData).then((response) => {
    //     console.log('result :', response);
    //   });
    // };

    //https://www.youtube.com/watch?v=sp9r6hSWH_o
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('demofile', selectedFile, selectedFile.name);

    console.log(formData);

    //make api call to upload
    axios
      .post(
        'https://xxxxx.execute-api.us-east-1.amazonaws.com/dev/file-upload',
        formData
      )
      .then(() => {
        setSelectedFile(null);
        setFileUploadedSuccessfully(true);
      });
  };

  return (
    <>
      <input type="file" name="fileName" onChange={fileChangeHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </>
  );
}

Upload.propTypes = {};

export default Upload;

//https://www.youtube.com/watch?v=IgAE-ycnb94
