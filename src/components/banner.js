import React from 'react';
import { Slide } from 'react-slideshow-image';
// import React from '../../img/12-1000x400.jpg';


const slideImages = [
    '../../img/12-1000x400.jpg',
    '../../img/154-1000x400.jpg',
    '../../img/486-1000x400.jpg'
];
import { getAll } from "../api/slide";
const Banner = {
    render() {
        // const { data } = await getAll();
        return /* html */ `
        <div class="col-span-9"><img src="https://picsum.photos/1000/400" alt="" class="rounded-l-lg"></div>
        `
    }
}
export default Banner;

{/*  */ }

{/* <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div> */}