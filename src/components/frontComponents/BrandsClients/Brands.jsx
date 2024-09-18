import { useEffect, useState } from 'react';



const Brands = () => {

    const [logos, setLogos] = useState([]);


    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setLogos(data))

    }, []);


    return (
        <>
            <div className="container mx-auto  py-8  ">

                <div className=" flex justify-center items-center flex-wrap gap-4 mb-8 py-8 ">

                    {
                        logos.map(logo =>

                            <img
                                key={logo.id}
                                src={`${logo.src}`}
                                alt={logo.alt ? logo.alt : `Logo of ${logo.name}`}
                                className="border border-gray-300 hover:border-[#111827] px-12 py-5 transition-all duration-300 ease-in-out transform hover:scale-105"
                                loading="lazy"
                            />

                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Brands;