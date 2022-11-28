import Slider from 'react-slick';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import './textSlider.css';

type sliderDataType = {
  id: number;
  sliderText: string;
  ctaText: string;
  ctaLink: string;
}[];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: { currentSlide?: number; slideCount?: number }) => (
  <button
    {...props}
    className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <BsChevronLeft />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: { currentSlide?: number; slideCount?: number }) => (
  <button
    {...props}
    className={'slick-next slick-arrow' + (currentSlide === slideCount! - 1 ? ' slick-disabled' : '')}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount! - 1 ? true : false}
    type="button"
  >
    <BsChevronRight />
  </button>
);

const settings = {
  autoplay: true,
  dots: true,
  slidesToShow: 1,
  arrows: true,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

const TextSlider = ({ sliderData }: { sliderData: sliderDataType }) => {
  return (
    <section className="text-slider_section">
      <div className="container-fluid">
        <Slider {...settings} className="text-slider_wrapper">
          {sliderData.map((slider) => (
            <div key={slider.id} className="text-slider_item">
              <p>{slider.sliderText}</p>
              <a href={slider.ctaLink}>{slider.ctaText}</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TextSlider;
