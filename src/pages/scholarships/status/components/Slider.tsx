import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useEffect } from "react";

function SwipeToSlide() {
  const sliderRef = useRef<Slider>(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  useEffect(() => {
    play();
  }, []);
  const settings = {
  infinite: true,
  slidesToShow: 4, // Ajusta según tus necesidades
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 10,
  cssEase: "linear",
  nextArrow: <></>,
  prevArrow: <></>,
};


  return (
    <div className="slider-container bg-[#EAE4EC] rounded-md py-8">
      <Slider {...settings}>
        <div>
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119845)">
              <path
                d="M43.383 41.1749C23.1431 50.8074 10.582 42.7482 2.5412 37.8531C2.04364 37.5446 1.19797 37.9253 1.93171 38.7681C4.61049 42.0161 13.3894 49.845 24.8485 49.845C36.3154 49.845 43.1372 43.5881 43.9906 42.4966C44.8382 41.4143 44.2394 40.8173 43.3828 41.1749H43.383ZM49.0673 38.0357C48.5238 37.3279 45.7623 37.196 44.0244 37.4094C42.2838 37.6168 39.6712 38.6806 39.8983 39.3193C40.0149 39.5585 40.2528 39.4512 41.4485 39.3437C42.6475 39.2241 46.0064 38.8002 46.7063 39.7151C47.4094 40.6364 45.635 45.025 45.3109 45.7327C44.9978 46.4405 45.4305 46.623 46.0187 46.1516C46.5988 45.6804 47.6489 44.4601 48.3536 42.7332C49.0535 40.9968 49.4803 38.5746 49.0671 38.0357H49.0673Z"
                fill="#FF9900"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.7739 21.5201C29.7739 24.0475 29.8378 26.1553 28.5603 28.3998C27.5293 30.2248 25.896 31.347 24.0711 31.347C21.5801 31.347 20.1293 29.4491 20.1293 26.648C20.1293 21.1185 25.0838 20.1149 29.7739 20.1149V21.5201ZM36.3161 37.3327C35.8872 37.7159 35.2667 37.7434 34.7832 37.4878C32.6299 35.6995 32.2465 34.8692 31.0604 33.1628C27.5019 36.7944 24.9836 37.8801 20.3667 37.8801C14.9102 37.8801 10.6582 34.5132 10.6582 27.7703C10.6582 22.5056 13.5143 18.9196 17.5744 17.1678C21.0966 15.6165 26.0146 15.3428 29.7739 14.9141V14.0746C29.7739 12.5325 29.8924 10.7076 28.9892 9.37556C28.1953 8.18023 26.6807 7.68748 25.3484 7.68748C22.8758 7.68748 20.6677 8.9557 20.1293 11.5835C20.0197 12.1676 19.591 12.7425 19.0071 12.7698L12.7111 12.0947C12.182 11.9759 11.5981 11.5472 11.7441 10.735C13.1949 3.10712 20.0836 0.807617 26.2516 0.807617C29.4087 0.807617 33.5329 1.64714 36.0239 4.03781C39.181 6.98489 38.8798 10.9175 38.8798 15.1968V25.3067C38.8798 28.3451 40.139 29.6772 41.3251 31.3197C41.7448 31.9036 41.8361 32.6064 41.3069 33.0442C39.9838 34.1481 37.6297 36.2013 36.3341 37.351L36.3159 37.3327"
                fill="black"
              />
              <path
                d="M43.383 41.1749C23.1431 50.8074 10.582 42.7482 2.5412 37.8531C2.04364 37.5446 1.19797 37.9253 1.93171 38.7681C4.61049 42.0161 13.3894 49.845 24.8485 49.845C36.3154 49.845 43.1372 43.5881 43.9906 42.4966C44.8382 41.4143 44.2394 40.8173 43.3828 41.1749H43.383ZM49.0673 38.0357C48.5238 37.3279 45.7623 37.196 44.0244 37.4094C42.2838 37.6168 39.6712 38.6806 39.8983 39.3193C40.0149 39.5585 40.2528 39.4512 41.4485 39.3437C42.6475 39.2241 46.0064 38.8002 46.7063 39.7151C47.4094 40.6364 45.635 45.025 45.3109 45.7327C44.9978 46.4405 45.4305 46.623 46.0187 46.1516C46.5988 45.6804 47.6489 44.4601 48.3536 42.7332C49.0535 40.9968 49.4803 38.5746 49.0671 38.0357H49.0673Z"
                fill="#FF9900"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.7739 21.5201C29.7739 24.0475 29.8378 26.1553 28.5603 28.3998C27.5293 30.2248 25.896 31.347 24.0711 31.347C21.5801 31.347 20.1293 29.4491 20.1293 26.648C20.1293 21.1185 25.0838 20.1149 29.7739 20.1149V21.5201ZM36.3161 37.3327C35.8872 37.7159 35.2667 37.7434 34.7832 37.4878C32.6299 35.6995 32.2465 34.8692 31.0604 33.1628C27.5019 36.7944 24.9836 37.8801 20.3667 37.8801C14.9102 37.8801 10.6582 34.5132 10.6582 27.7703C10.6582 22.5056 13.5143 18.9196 17.5744 17.1678C21.0966 15.6165 26.0146 15.3428 29.7739 14.9141V14.0746C29.7739 12.5325 29.8924 10.7076 28.9892 9.37556C28.1953 8.18023 26.6807 7.68748 25.3484 7.68748C22.8758 7.68748 20.6677 8.9557 20.1293 11.5835C20.0197 12.1676 19.591 12.7425 19.0071 12.7698L12.7111 12.0947C12.182 11.9759 11.5981 11.5472 11.7441 10.735C13.1949 3.10712 20.0836 0.807617 26.2516 0.807617C29.4087 0.807617 33.5329 1.64714 36.0239 4.03781C39.181 6.98489 38.8798 10.9175 38.8798 15.1968V25.3067C38.8798 28.3451 40.139 29.6772 41.3251 31.3197C41.7448 31.9036 41.8361 32.6064 41.3069 33.0442C39.9838 34.1481 37.6297 36.2013 36.3341 37.351L36.3159 37.3327"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119845">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0.339844 0.807617)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="51"
            height="40"
            viewBox="0 0 51 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119935)">
              <path
                d="M42.6658 3.69501C39.4313 2.18053 35.9729 1.07981 32.3574 0.453125C31.9132 1.25656 31.3945 2.33719 31.0369 3.19687C27.1934 2.6184 23.3852 2.6184 19.6124 3.19687C19.2548 2.33719 18.7242 1.25656 18.2763 0.453125C14.6567 1.07981 11.1944 2.18454 7.96005 3.70304C1.43627 13.5693 -0.332221 23.1905 0.552025 32.6751C4.87894 35.9089 9.07223 37.8733 13.1948 39.1588C14.2126 37.7568 15.1205 36.2665 15.9026 34.6957C14.4131 34.1293 12.9865 33.4304 11.6385 32.6188C11.9961 32.3538 12.3459 32.0765 12.6839 31.7914C20.9055 35.6397 29.8382 35.6397 37.9616 31.7914C38.3034 32.0765 38.6532 32.3538 39.0069 32.6188C37.655 33.4343 36.2245 34.1333 34.735 34.6997C35.5171 36.2665 36.421 37.7609 37.4427 39.1628C41.5692 37.8773 45.7665 35.913 50.0934 32.6751C51.131 21.6801 48.321 12.1472 42.6658 3.69501ZM17.0226 26.8422C14.5546 26.8422 12.5306 24.5362 12.5306 21.7283C12.5306 18.9202 14.5113 16.6104 17.0226 16.6104C19.5339 16.6104 21.5577 18.9162 21.5145 21.7283C21.5186 24.5362 19.5339 26.8422 17.0226 26.8422ZM33.6229 26.8422C31.1548 26.8422 29.1308 24.5362 29.1308 21.7283C29.1308 18.9202 31.1116 16.6104 33.6229 16.6104C36.134 16.6104 38.1581 18.9162 38.1148 21.7283C38.1148 24.5362 36.134 26.8422 33.6229 26.8422Z"
                fill="#5865F2"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119935">
                <rect
                  width="50"
                  height="38.7097"
                  fill="white"
                  transform="translate(0.339844 0.453125)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="34"
            height="51"
            viewBox="0 0 34 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119936)">
              <path
                d="M8.33724 50.8073C12.9372 50.8073 16.6706 47.074 16.6706 42.474V34.1406H8.33724C3.73724 34.1406 0.00390625 37.874 0.00390625 42.474C0.00390625 47.074 3.73724 50.8073 8.33724 50.8073Z"
                fill="#0ACF83"
              />
              <path
                d="M0.00390625 25.8079C0.00390625 21.2079 3.73724 17.4746 8.33724 17.4746H16.6706V34.1413H8.33724C3.73724 34.1413 0.00390625 30.4079 0.00390625 25.8079Z"
                fill="#A259FF"
              />
              <path
                d="M0.00390625 9.14095C0.00390625 4.54095 3.73724 0.807617 8.33724 0.807617H16.6706V17.4743H8.33724C3.73724 17.4743 0.00390625 13.7409 0.00390625 9.14095Z"
                fill="#F24E1E"
              />
              <path
                d="M16.6699 0.807617H25.0033C29.6033 0.807617 33.3366 4.54095 33.3366 9.14095C33.3366 13.7409 29.6033 17.4743 25.0033 17.4743H16.6699V0.807617Z"
                fill="#FF7262"
              />
              <path
                d="M33.3366 25.8079C33.3366 30.4079 29.6033 34.1413 25.0033 34.1413C20.4033 34.1413 16.6699 30.4079 16.6699 25.8079C16.6699 21.2079 20.4033 17.4746 25.0033 17.4746C29.6033 17.4746 33.3366 21.2079 33.3366 25.8079Z"
                fill="#1ABCFE"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119936">
                <rect
                  width="33.34"
                  height="50"
                  fill="white"
                  transform="translate(0 0.807617)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119938)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 0.807617C11.1875 0.807617 0 11.9951 0 25.8076C0 36.8701 7.15625 46.2139 17.0938 49.5264C18.3438 49.7451 18.8125 48.9951 18.8125 48.3389C18.8125 47.7451 18.7812 45.7764 18.7812 43.6826C12.5 44.8389 10.875 42.1514 10.375 40.7451C10.0938 40.0264 8.875 37.8076 7.8125 37.2139C6.9375 36.7451 5.6875 35.5889 7.78125 35.5576C9.75 35.5264 11.1562 37.3701 11.625 38.1201C13.875 41.9014 17.4688 40.8389 18.9062 40.1826C19.125 38.5576 19.7812 37.4639 20.5 36.8389C14.9375 36.2139 9.125 34.0576 9.125 24.4951C9.125 21.7764 10.0938 19.5264 11.6875 17.7764C11.4375 17.1514 10.5625 14.5889 11.9375 11.1514C11.9375 11.1514 14.0312 10.4951 18.8125 13.7139C20.8125 13.1514 22.9375 12.8701 25.0625 12.8701C27.1875 12.8701 29.3125 13.1514 31.3125 13.7139C36.0938 10.4639 38.1875 11.1514 38.1875 11.1514C39.5625 14.5889 38.6875 17.1514 38.4375 17.7764C40.0312 19.5264 41 21.7451 41 24.4951C41 34.0889 35.1562 36.2139 29.5938 36.8389C30.5 37.6201 31.2812 39.1201 31.2812 41.4639C31.2812 44.8076 31.25 47.4951 31.25 48.3389C31.25 48.9951 31.7188 49.7764 32.9688 49.5264C42.8438 46.2139 50 36.8389 50 25.8076C50 11.9951 38.8125 0.807617 25 0.807617Z"
                fill="#1B1F23"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119938">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0 0.807617)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="51"
            height="52"
            viewBox="0 0 51 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119937)">
              <path
                d="M50.3398 26.4186C50.3398 24.6964 50.1732 22.9186 49.8954 21.252H25.8398V31.0853H39.6176C39.0621 34.252 37.2287 37.0297 34.5065 38.8075L42.7287 45.1964C47.5621 40.6964 50.3398 34.1408 50.3398 26.4186Z"
                fill="#4280EF"
              />
              <path
                d="M25.8403 51.3075C32.7292 51.3075 38.5069 49.0297 42.7292 45.1408L34.5069 38.8075C32.2292 40.3631 29.2847 41.252 25.8403 41.252C19.1736 41.252 13.5625 36.752 11.5069 30.752L3.0625 37.252C7.39583 45.8631 16.1736 51.3075 25.8403 51.3075Z"
                fill="#34A353"
              />
              <path
                d="M11.5063 30.6966C10.4507 27.5299 10.4507 24.0855 11.5063 20.9188L3.06185 14.3633C-0.549262 21.5855 -0.549262 30.0855 3.06185 37.2522L11.5063 30.6966Z"
                fill="#F6B704"
              />
              <path
                d="M25.8403 10.4187C29.4514 10.3632 33.0069 11.7521 35.6181 14.2521L42.8958 6.91873C38.2847 2.58539 32.1736 0.252055 25.8403 0.30761C16.1736 0.30761 7.39583 5.75206 3.0625 14.3632L11.5069 20.9187C13.5625 14.8632 19.1736 10.4187 25.8403 10.4187Z"
                fill="#E54335"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119937">
                <rect
                  width="50"
                  height="51.1111"
                  fill="white"
                  transform="translate(0.339844 0.251953)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119939)">
              <path
                d="M42.488 42.008H35.2153V30.6186C35.2153 27.9027 35.1668 24.4065 31.4327 24.4065C27.6448 24.4065 27.0653 27.3656 27.0653 30.4209V42.0073H19.7925V18.5861H26.7743V21.7868H26.8721C27.5708 20.5922 28.5805 19.6094 29.7935 18.9432C31.0066 18.2769 32.3777 17.9522 33.7607 18.0035C41.1319 18.0035 42.491 22.852 42.491 29.1595L42.488 42.008ZM11.5865 15.3845C10.7518 15.3847 9.93571 15.1373 9.24162 14.6737C8.54745 14.2101 8.00639 13.5511 7.68684 12.7799C7.36724 12.0088 7.28351 11.1602 7.44622 10.3415C7.60889 9.5228 8.01071 8.77068 8.60086 8.1803C9.19101 7.58998 9.9429 7.18789 10.7616 7.0249C11.5803 6.8619 12.4289 6.94533 13.2001 7.26463C13.9714 7.58392 14.6306 8.12477 15.0945 8.81871C15.5584 9.51265 15.806 10.3286 15.8062 11.1633C15.8062 11.7176 15.6972 12.2664 15.4852 12.7785C15.2732 13.2906 14.9624 13.7559 14.5706 14.1479C14.1787 14.5398 13.7135 14.8508 13.2015 15.063C12.6895 15.2752 12.1407 15.3845 11.5865 15.3845ZM15.2228 42.008H7.94253V18.5861H15.2228V42.008ZM46.1137 0.189866H4.28799C3.33866 0.179153 2.42391 0.545771 1.74475 1.20916C1.0656 1.87254 0.677602 2.77843 0.666016 3.72774V45.727C0.677205 46.6767 1.06497 47.5833 1.74409 48.2473C2.42323 48.9114 3.33819 49.2788 4.28799 49.2686H46.1137C47.0654 49.2806 47.9829 48.9143 48.6647 48.2502C49.3465 47.5862 49.7369 46.6786 49.7501 45.727V3.72471C49.7365 2.77351 49.3459 1.86661 48.6641 1.20323C47.9822 0.539862 47.0649 0.174291 46.1137 0.186836V0.189866Z"
                fill="#0A66C2"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119939">
                <rect
                  width="50"
                  height="49.2424"
                  fill="white"
                  transform="translate(0 0.186523)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119940)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.36907 9.70536C10.9162 10.9624 11.4966 10.8664 14.4019 10.6726L41.7914 9.02798C42.3723 9.02798 41.8893 8.44846 41.6955 8.35217L37.1467 5.06372C36.2751 4.38703 35.1139 3.61209 32.8883 3.80595L6.36706 5.74032C5.39983 5.83622 5.20665 6.31984 5.59182 6.70746L9.36907 9.70536ZM11.0135 16.0885V44.907C11.0135 46.4558 11.7875 47.0352 13.5294 46.9394L43.6305 45.1976C45.3733 45.1018 45.5675 44.0365 45.5675 42.7784V14.1532C45.5675 12.8971 45.0843 12.2197 44.0174 12.3164L12.5615 14.1532C11.4006 14.2508 11.0134 14.8315 11.0134 16.0885H11.0135ZM40.7291 17.6344C40.9221 18.5056 40.7291 19.376 39.8563 19.474L38.406 19.763V41.0386C37.1467 41.7154 35.9855 42.1023 35.0179 42.1023C33.4687 42.1023 33.0807 41.6184 31.9203 40.1687L22.4335 25.2755V39.685L25.4355 40.3624C25.4355 40.3624 25.4355 42.1023 23.0135 42.1023L16.3366 42.4897C16.1427 42.1023 16.3366 41.1361 17.0139 40.9425L18.7563 40.4596V21.4075L16.3371 21.2136C16.143 20.3424 16.6263 19.0862 17.9823 18.9887L25.1451 18.5059L35.0179 33.5928V20.2465L32.5007 19.9576C32.3075 18.8925 33.0807 18.1191 34.0487 18.0232L40.7291 17.6344ZM4.14029 3.12935L31.7266 1.09781C35.1143 0.807265 35.9859 1.00191 38.1152 2.54856L46.9211 8.73783C48.3741 9.80214 48.8584 10.0919 48.8584 11.2521V45.1976C48.8584 47.3251 48.0833 48.5832 45.3738 48.7757L13.3377 50.7103C11.3037 50.8073 10.3357 50.5174 9.27053 49.1627L2.78573 40.749C1.62385 39.2001 1.14062 38.0415 1.14062 36.686V6.51291C1.14062 4.77318 1.91586 3.32194 4.14029 3.12935Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119940">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0 0.807617)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="51"
            height="60"
            viewBox="0 0 51 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119941)">
              <path
                d="M14.3136 56.0659L15.3193 49.6774L13.0789 49.6255H2.38086L9.81548 2.48511C9.83855 2.3428 9.91355 2.21011 10.0232 2.11588C10.1328 2.02165 10.2732 1.96973 10.4193 1.96973H28.4578C34.4463 1.96973 38.579 3.21588 40.7367 5.6755C41.7482 6.82934 42.3925 8.03511 42.704 9.36203C43.0309 10.7543 43.0367 12.4178 42.7175 14.4466L42.6944 14.5947V15.8947L43.7059 16.4678C44.5578 16.9197 45.2348 17.437 45.754 18.0293C46.6194 19.0159 47.179 20.2697 47.4155 21.7562C47.6598 23.2851 47.579 25.1043 47.179 27.1639C46.7175 29.5332 45.9713 31.5966 44.9636 33.2851C44.0367 34.8409 42.8559 36.1312 41.454 37.1312C40.1155 38.0812 38.5251 38.8024 36.7271 39.2639C34.9848 39.7178 32.9982 39.9466 30.8194 39.9466H29.4155C28.4117 39.9466 27.4367 40.3082 26.6713 40.9562C25.904 41.6178 25.3963 42.5216 25.2405 43.5101L25.1348 44.0851L23.3578 55.3447L23.2771 55.7582C23.2559 55.8889 23.2194 55.9543 23.1655 55.9986C23.1175 56.0389 23.0482 56.0659 22.9809 56.0659H14.3136Z"
                fill="#253B80"
              />
              <path
                d="M44.6626 14.7441C44.6088 15.0884 44.5472 15.4403 44.478 15.8018C42.0992 28.0153 33.9607 32.2345 23.5665 32.2345H18.2742C17.0031 32.2345 15.9319 33.1576 15.7338 34.4115L13.0242 51.5961L12.2569 56.4672C12.1281 57.2903 12.7627 58.0326 13.5934 58.0326H22.9799C24.0915 58.0326 25.0357 57.2249 25.2107 56.1288L25.303 55.6518L27.0703 44.4365L27.1838 43.8211C27.3569 42.7211 28.303 41.9134 29.4146 41.9134H30.8184C39.9126 41.9134 47.0319 38.2211 49.1126 27.5365C49.9819 23.073 49.5319 19.3461 47.2319 16.7249C46.5357 15.9345 45.6722 15.2788 44.6626 14.7441Z"
                fill="#179BD7"
              />
              <path
                d="M42.1748 13.7523C41.8113 13.6465 41.4363 13.5504 41.0517 13.4638C40.6651 13.3792 40.269 13.3042 39.8613 13.2388C38.4344 13.0081 36.8709 12.8984 35.1959 12.8984H21.0575C20.7094 12.8984 20.3786 12.9773 20.0825 13.1196C19.4305 13.4331 18.9459 14.0504 18.8286 14.8061L15.8209 33.8561L15.7344 34.4118C15.9325 33.158 17.0036 32.2349 18.2748 32.2349H23.5671C33.9613 32.2349 42.0998 28.0138 44.4786 15.8023C44.5498 15.4407 44.6094 15.0888 44.6632 14.7446C44.0613 14.4254 43.4094 14.1523 42.7075 13.9196C42.5344 13.8619 42.3555 13.8061 42.1748 13.7523Z"
                fill="#222D65"
              />
              <path
                d="M18.8283 14.8058C18.9456 14.05 19.4302 13.4327 20.0822 13.1212C20.3802 12.9788 20.7091 12.9 21.0572 12.9H35.1956C36.8706 12.9 38.4341 13.0096 39.861 13.2404C40.2687 13.3058 40.6648 13.3808 41.0514 13.4654C41.436 13.5519 41.811 13.6481 42.1745 13.7538C42.3552 13.8077 42.5341 13.8635 42.7091 13.9192C43.411 14.1519 44.0629 14.4269 44.6648 14.7442C45.3725 10.2308 44.6591 7.15769 42.2187 4.375C39.5283 1.31154 34.6725 0 28.4591 0H10.4206C9.15136 0 8.06867 0.923077 7.87252 2.17885L0.359053 49.8038C0.210976 50.7462 0.9379 51.5962 1.8879 51.5962H13.0244L15.8206 33.8558L18.8283 14.8058Z"
                fill="#253B80"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119941">
                <rect
                  width="50"
                  height="59.6154"
                  fill="white"
                  transform="translate(0.339844)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_778_119841)">
              <path
                d="M42.8571 0.807617H7.14286C3.19797 0.807617 0 4.00558 0 7.95047V43.6648C0 47.6097 3.19797 50.8076 7.14286 50.8076H42.8571C46.802 50.8076 50 47.6097 50 43.6648V7.95047C50 4.00558 46.802 0.807617 42.8571 0.807617Z"
                fill="#3A48FF"
              />
              <path
                d="M32.2313 21.4859C32.2313 21.4859 29.8206 29.0573 29.6242 29.6823C29.5527 29.0395 27.7849 15.4502 27.7849 15.4502C23.6777 15.4502 21.4813 18.3788 20.3206 21.4681C20.3206 21.4681 17.392 29.0573 17.142 29.7002C17.1242 29.1109 16.6956 21.5573 16.6956 21.5573C16.4456 17.7716 12.9813 15.4681 10.1777 15.4681L13.5706 36.0573C17.8742 36.0395 20.1956 33.1288 21.4099 30.0395C21.4099 30.0395 23.9992 23.3431 24.1063 23.0395C24.1242 23.3252 25.9634 36.0573 25.9634 36.0573C30.2849 36.0573 32.6063 33.3252 33.8563 30.3431L39.9099 15.4681C35.642 15.4681 33.392 18.3788 32.2313 21.4859Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_119841">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0 0.807617)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
