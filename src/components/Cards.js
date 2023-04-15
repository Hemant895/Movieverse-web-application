import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
function Cards() {
    const [data, Setdata] = useState([
        {
            name: "Avengers",
            year: "2020",
            Rating: 3.5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        },
        {
            name: "Avengers",
            year: "2020",
            Rating: 4.5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        },
        {
            name: "Avengers",
            year: "2020",
            Rating: 3.5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        },
        {
            name: "Avengers",
            year: "2020",
            Rating: 5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        },
        {
            name: "Avengers",
            year: "2020",
            Rating: 5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        },
        {
            name: "Avengers",
            year: "2020",
            Rating: 5,
            Img: "https://th.bing.com/th/id/OIP.P_ukrAjyOXk1gWxNZKSAYAHaK-?pid=ImgDet&rs=1"

        }
    ]);
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            {data.map((e, i) => {
                return (
                    <div key={i} className="card shadow-lg font-medium p-2 hover:-translate-y-2 cursor-pointer ">
                        <img className="h-72" src={e.Img} />
                        <h1><span className='text-gray-500'>Name : </span>{e.name} </h1>
                        <h1 className='flex items-center'><span className='text-gray-500 '>Rating:</span>
                        <ReactStars 
                        size={20} 
                        half={true}
                        value={e.Rating}
                        edit={false}
                        /></h1>
                        <h1><span className='text-gray-500'>Year : </span>{e.year}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
