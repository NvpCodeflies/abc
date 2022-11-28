import { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { FaChevronRight, FaChevronLeft, FaTimes } from 'react-icons/fa';

import './notificationStrip.css';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: { currentSlide?: number; slideCount?: number }) => (
  <button
    {...props}
    className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaChevronLeft />
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
    <FaChevronRight />
  </button>
);

const NotificationStrip = (props: {
  notificationList: {
    notificationBoldtext: string;
    notificationNormalText: string;
    notificationButton: {
      buttonText: string;
      buttonURL: string;
    };
  }[];
  headerHeight: Function;
}) => {
  const { notificationList, headerHeight } = props;
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (isHide) {
      headerHeight();
    }
  }, [isHide]);

  const settings = {
    autoplay: true,
    dots: false,
    slidesToShow: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <>
      {!isHide && (
        <div className="header_notification">
          <div className="header_container">
            <Slider {...settings} className="header_notification-slider">
              {notificationList.map(
                (
                  notification: {
                    notificationBoldtext: string;
                    notificationNormalText: string;
                    notificationButton: {
                      buttonText: string;
                      buttonURL: string;
                    };
                  },
                  idx: number,
                ) => (
                  <div className="header_notification-slider-item" key={idx}>
                    <p>
                      <strong>{notification.notificationBoldtext}</strong>
                      {notification.notificationNormalText}
                      <span>
                        <a href={notification.notificationButton.buttonURL}>
                          {notification.notificationButton.buttonText}
                        </a>
                      </span>
                    </p>
                  </div>
                ),
              )}
            </Slider>
          </div>
          <span
            className="close-slider"
            onClick={() => {
              setIsHide(true);
            }}
          >
            <FaTimes />
          </span>
        </div>
      )}
    </>
  );
};

export default NotificationStrip;
