import React from 'react';
import Card from "./Card";

const Tours = (props) => {

    function removeHandler(id) {
        props.removeTours(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Loveble Tours</h2>
            </div>
            <div className='cards'>
                {
                    props.tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeHandler}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;