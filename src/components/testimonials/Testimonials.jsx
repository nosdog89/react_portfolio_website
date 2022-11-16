import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: AVTR1,
    name: 'Emma Webber',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut reprehenderit quidem consequatur nobis ad quisquam architecto error cumque voluptas sint, ab, debitis possimus odio.',
  },

  {
    image: AVTR2,
    name: 'Dave Smith',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut reprehenderit quidem consequatur nobis ad quisquam architecto error cumque voluptas sint, ab, debitis possimus odio.',
  },

  {
    image: AVTR3,
    name: 'Mike Jacob',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut reprehenderit quidem consequatur nobis ad quisquam architecto error cumque voluptas sint, ab, debitis possimus odio.',
  },

  {
    image: AVTR4,
    name: 'Hemah Ali',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut reprehenderit quidem consequatur nobis ad quisquam architecto error cumque voluptas sint, ab, debitis possimus odio.',
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({index, image, name, testimonial}) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={image} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {testimonial}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials