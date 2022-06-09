import React from 'react';
import Axios from 'axios';
import fileDownload from 'js-file-download';
import downloadIcon from '../../assets/icons/download_icon.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

    const download = (e) => {
        e.preventDefault();
        Axios({
            url: "http://localhost:4000",
            method: "GET",
            responseType: "blob"
        })
            .then((res) => {
                // console.log(res);
                fileDownload(res.data, "Mehedi_Web_Developer_Resume.pdf")
            })
    }

    return (
        <div>
            <div className='text-center'>
                <h1>Hi there !</h1> <br />
                <h1>I'M Md Mehedi Al Mamun</h1> <br />
                <Link to="/contact"><button type='button' className='btn btn-secondary text-white font-semibold'>Hire Me</button></Link> <br /> <br />
                <button onClick={(e) => download(e)} type='button' className='btn btn-accent text-white font-semibold'>
                    Download Resume
                    <img src={downloadIcon} alt="" width="30" className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Home;