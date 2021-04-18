import React from "react";

const PlaystoreButton = () => {
    return (
        <div className="playstore">
            <a target="_blank" href={process.env.NEXT_PUBLIC_GOOGLE_LINK}>
                <svg width="135" height="40" viewBox="0 0 135 40" fill="none">
                    <path
                        d="M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z"
                        fill="black"
                    ></path>
                    <path
                        d="M130 0.8C131.114 0.8 132.182 1.2425 132.97 2.03015C133.758 2.8178 134.2 3.88609 134.2 5V35C134.2 36.1139 133.758 37.1822 132.97 37.9698C132.182 38.7575 131.114 39.2 130 39.2H5C3.88609 39.2 2.8178 38.7575 2.03015 37.9698C1.2425 37.1822 0.8 36.1139 0.8 35V5C0.8 3.88609 1.2425 2.8178 2.03015 2.03015C2.8178 1.2425 3.88609 0.8 5 0.8H130ZM130 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H130C131.326 40 132.598 39.4732 133.536 38.5355C134.473 37.5979 135 36.3261 135 35V5C135 3.67392 134.473 2.40215 133.536 1.46447C132.598 0.526784 131.326 0 130 0V0Z"
                        fill="#A6A6A6"
                    ></path>
                    <path
                        d="M47.4201 10.24C47.4365 10.6067 47.3785 10.973 47.2496 11.3167C47.1208 11.6604 46.9236 11.9745 46.6701 12.24C46.386 12.5333 46.0432 12.7633 45.6641 12.9149C45.285 13.0666 44.8781 13.1364 44.4701 13.12C44.0598 13.1291 43.6519 13.054 43.2718 12.8992C42.8916 12.7444 42.5473 12.5132 42.2601 12.22C41.9638 11.9325 41.7301 11.5869 41.5735 11.2049C41.4169 10.8229 41.3409 10.4127 41.3501 9.99997C41.3395 9.58557 41.4149 9.17346 41.5715 8.78964C41.7281 8.40583 41.9626 8.05864 42.2601 7.76997C42.7056 7.33466 43.2698 7.04071 43.8819 6.92506C44.4939 6.80942 45.1265 6.87723 45.7001 7.11997C46.0607 7.26821 46.3823 7.49746 46.6401 7.78997L46.1101 8.31997C45.9115 8.08075 45.6599 7.89111 45.3752 7.76613C45.0905 7.64114 44.7806 7.58425 44.4701 7.59997C44.1578 7.59844 43.8483 7.66 43.5603 7.78096C43.2723 7.90193 43.0117 8.0798 42.7941 8.30391C42.5766 8.52803 42.4065 8.79378 42.2941 9.08522C42.1817 9.37666 42.1293 9.6878 42.1401 9.99997C42.1336 10.4661 42.2652 10.9237 42.5184 11.3151C42.7717 11.7065 43.1352 12.0142 43.563 12.1992C43.9909 12.3843 44.464 12.4385 44.9227 12.355C45.3813 12.2715 45.8049 12.054 46.1401 11.73C46.4485 11.396 46.6291 10.964 46.6501 10.51H44.4701V9.78997H47.3801C47.4025 9.93903 47.4158 10.0893 47.4201 10.24Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M52 7.74H49.3V9.64H51.76V10.36H49.3V12.26H52V13H48.52V7H52V7.74Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M55.2801 13H54.5101V7.74H52.8301V7H57.0001V7.74H55.2801V13Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M59.9399 13V7H60.7099V13H59.9399Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M64.1299 13H63.3599V7.74H61.6799V7H65.7999V7.74H64.1299V13Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M73.6099 12.2199C73.3211 12.509 72.9781 12.7383 72.6006 12.8947C72.2231 13.0512 71.8185 13.1317 71.4099 13.1317C71.0013 13.1317 70.5967 13.0512 70.2192 12.8947C69.8417 12.7383 69.4987 12.509 69.2099 12.2199C68.919 11.9298 68.6909 11.5831 68.5395 11.2012C68.3881 10.8194 68.3168 10.4105 68.3299 9.9999C68.3168 9.58933 68.3881 9.18044 68.5395 8.79856C68.6909 8.41669 68.919 8.06998 69.2099 7.7799C69.4925 7.4827 69.8343 7.24813 70.2133 7.09138C70.5923 6.93462 70.9999 6.85917 71.4099 6.8699C71.8193 6.86342 72.2257 6.94082 72.604 7.09732C72.9824 7.25382 73.3247 7.48612 73.6099 7.7799C73.8974 8.07239 74.1235 8.41953 74.2746 8.80083C74.4257 9.18212 74.499 9.58984 74.4899 9.9999C74.503 10.4105 74.4317 10.8194 74.2803 11.2012C74.1289 11.5831 73.9008 11.9298 73.6099 12.2199ZM69.7799 11.7199C69.9929 11.9358 70.2467 12.1072 70.5265 12.2242C70.8063 12.3412 71.1066 12.4014 71.4099 12.4014C71.7132 12.4014 72.0135 12.3412 72.2933 12.2242C72.5731 12.1072 72.8269 11.9358 73.0399 11.7199C73.2614 11.4929 73.4349 11.2236 73.55 10.9281C73.6652 10.6326 73.7195 10.3169 73.7099 9.9999C73.7143 9.68005 73.6536 9.36265 73.5316 9.06697C73.4095 8.77129 73.2286 8.50351 72.9999 8.2799C72.7869 8.06402 72.5331 7.89261 72.2533 7.77562C71.9735 7.65862 71.6732 7.59838 71.3699 7.59838C71.0666 7.59838 70.7663 7.65862 70.4865 7.77562C70.2067 7.89261 69.9529 8.06402 69.7399 8.2799C69.5256 8.51014 69.3594 8.78091 69.2512 9.07628C69.143 9.37166 69.095 9.68569 69.1099 9.9999C69.1003 10.3169 69.1546 10.6326 69.2698 10.9281C69.3849 11.2236 69.5584 11.4929 69.7799 11.7199Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M75.5801 13V7H76.5101L79.4301 11.67V10.51V7H80.2001V13H79.4001L76.3501 8.11V9.26V13H75.5801Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M68.1401 21.7499C67.2976 21.7519 66.4745 22.0037 65.7751 22.4734C65.0756 22.9432 64.5312 23.6098 64.2106 24.3889C63.89 25.1681 63.8076 26.0248 63.9739 26.8508C64.1402 27.6768 64.5477 28.4349 65.1449 29.0292C65.7421 29.6236 66.5021 30.0276 67.3288 30.19C68.1556 30.3524 69.0119 30.2661 69.7896 29.9418C70.5672 29.6175 71.2313 29.07 71.6977 28.3683C72.1642 27.6667 72.4121 26.8425 72.4101 25.9999C72.4183 25.4379 72.3132 24.8799 72.1013 24.3593C71.8893 23.8386 71.5748 23.366 71.1764 22.9694C70.7779 22.5729 70.3038 22.2606 69.7822 22.051C69.2606 21.8415 68.7021 21.7391 68.1401 21.7499ZM68.1401 28.5799C67.6237 28.616 67.1083 28.496 66.6611 28.2353C66.2138 27.9747 65.8553 27.5855 65.6321 27.1184C65.409 26.6512 65.3315 26.1278 65.4098 25.6161C65.4881 25.1043 65.7185 24.628 66.0711 24.249C66.4237 23.8699 66.8821 23.6057 67.3869 23.4907C67.8916 23.3757 68.4193 23.4152 68.9013 23.604C69.3833 23.7929 69.7973 24.1223 70.0896 24.5496C70.3819 24.9769 70.5388 25.4822 70.5401 25.9999C70.5562 26.3279 70.5065 26.6559 70.3938 26.9643C70.2812 27.2728 70.1079 27.5556 69.8842 27.7961C69.6606 28.0366 69.391 28.2298 69.0914 28.3644C68.7919 28.499 68.4684 28.5723 68.1401 28.5799ZM58.8201 21.7499C57.9776 21.7519 57.1545 22.0037 56.4551 22.4734C55.7556 22.9432 55.2112 23.6098 54.8906 24.3889C54.57 25.1681 54.4876 26.0248 54.6539 26.8508C54.8202 27.6768 55.2277 28.4349 55.8249 29.0292C56.4221 29.6236 57.1821 30.0276 58.0088 30.19C58.8356 30.3524 59.6919 30.2661 60.4696 29.9418C61.2472 29.6175 61.9113 29.07 62.3777 28.3683C62.8442 27.6667 63.0921 26.8425 63.0901 25.9999C63.0983 25.4379 62.9932 24.8799 62.7813 24.3593C62.5693 23.8386 62.2548 23.366 61.8564 22.9694C61.4579 22.5729 60.9838 22.2606 60.4622 22.051C59.9406 21.8415 59.3821 21.7391 58.8201 21.7499ZM58.8201 28.5799C58.3037 28.616 57.7883 28.496 57.3411 28.2353C56.8938 27.9747 56.5353 27.5855 56.3121 27.1184C56.089 26.6512 56.0115 26.1278 56.0898 25.6161C56.1681 25.1043 56.3985 24.628 56.7511 24.249C57.1037 23.8699 57.5621 23.6057 58.0669 23.4907C58.5716 23.3757 59.0993 23.4152 59.5813 23.604C60.0633 23.7929 60.4773 24.1223 60.7696 24.5496C61.0619 24.9769 61.2188 25.4822 61.2201 25.9999C61.2362 26.3279 61.1865 26.6559 61.0738 26.9643C60.9612 27.2728 60.7879 27.5556 60.5642 27.7961C60.3406 28.0366 60.071 28.2298 59.7714 28.3644C59.4719 28.499 59.1484 28.5723 58.8201 28.5799ZM47.7401 23.0599V24.8599H52.0601C51.9924 25.7077 51.6399 26.5077 51.0601 27.1299C50.6268 27.5714 50.1056 27.9171 49.5302 28.1444C48.9549 28.3718 48.3382 28.4759 47.7201 28.4499C46.4471 28.4499 45.2262 27.9442 44.326 27.044C43.4258 26.1439 42.9201 24.923 42.9201 23.6499C42.9201 22.3769 43.4258 21.156 44.326 20.2558C45.2262 19.3556 46.4471 18.8499 47.7201 18.8499C48.9405 18.8318 50.119 19.2952 51.0001 20.1399L52.2701 18.8699C51.6741 18.2804 50.9664 17.8158 50.1886 17.5033C49.4107 17.1908 48.5783 17.0366 47.7401 17.0499C46.8511 17.0153 45.9643 17.1605 45.1327 17.4769C44.3012 17.7932 43.5421 18.2742 42.9009 18.8909C42.2596 19.5077 41.7495 20.2475 41.4011 21.0661C41.0527 21.8847 40.873 22.7652 40.873 23.6549C40.873 24.5446 41.0527 25.4251 41.4011 26.2437C41.7495 27.0623 42.2596 27.8022 42.9009 28.4189C43.5421 29.0357 44.3012 29.5166 45.1327 29.833C45.9643 30.1493 46.8511 30.2945 47.7401 30.2599C48.5955 30.2941 49.4485 30.1469 50.243 29.8281C51.0375 29.5092 51.7556 29.0259 52.3501 28.4099C53.4002 27.2563 53.9598 25.7391 53.9101 24.1799C53.9137 23.8046 53.8836 23.4298 53.8201 23.0599H47.7401ZM93.0501 24.4599C92.7893 23.6927 92.3016 23.0227 91.6516 22.5388C91.0016 22.0548 90.2199 21.7797 89.4101 21.7499C88.8631 21.7489 88.3217 21.86 87.8193 22.0765C87.317 22.2929 86.8644 22.6101 86.4895 23.0085C86.1146 23.4068 85.8254 23.8778 85.6397 24.3923C85.4541 24.9068 85.3759 25.454 85.4101 25.9999C85.4016 26.9128 85.6885 27.8039 86.2282 28.5402C86.7679 29.2765 87.5313 29.8184 88.4044 30.0851C89.2774 30.3517 90.2134 30.3288 91.0723 30.0196C91.9313 29.7105 92.6672 29.1318 93.1701 28.3699L91.7201 27.3699C91.5039 27.7302 91.1974 28.0277 90.8307 28.2329C90.4641 28.4382 90.0502 28.544 89.6301 28.5399C89.1967 28.5578 88.768 28.4442 88.4003 28.214C88.0327 27.9837 87.7432 27.6477 87.5701 27.2499L93.2601 24.8999L93.0501 24.4599ZM87.2501 25.8799C87.2298 25.5698 87.2718 25.2588 87.3736 24.9651C87.4753 24.6715 87.6348 24.4012 87.8426 24.1701C88.0504 23.939 88.3023 23.7518 88.5835 23.6195C88.8647 23.4873 89.1696 23.4126 89.4801 23.3999C89.8012 23.3794 90.1213 23.4537 90.4005 23.6138C90.6796 23.7738 90.9056 24.0124 91.0501 24.2999L87.2501 25.8799ZM82.6301 29.9999H84.5001V17.4999H82.6301V29.9999ZM79.5701 22.6999H79.5001C79.2162 22.3909 78.8694 22.1462 78.483 21.9823C78.0966 21.8185 77.6796 21.7392 77.2601 21.7499C76.1673 21.8029 75.1367 22.2743 74.3821 23.0665C73.6274 23.8587 73.2064 24.9108 73.2064 26.0049C73.2064 27.099 73.6274 28.1512 74.3821 28.9433C75.1367 29.7355 76.1673 30.2069 77.2601 30.2599C77.6841 30.2684 78.1047 30.1832 78.4919 30.0103C78.8791 29.8375 79.2234 29.5812 79.5001 29.2599H79.5701V29.8699C79.5701 31.4999 78.7001 32.3699 77.3001 32.3699C76.8324 32.3596 76.3783 32.2106 75.9955 31.9418C75.6127 31.6729 75.3185 31.2964 75.1501 30.8599L73.5301 31.5299C73.8296 32.2822 74.3504 32.9258 75.0235 33.3758C75.6966 33.8257 76.4905 34.0608 77.3001 34.0499C79.4901 34.0499 81.3001 32.7599 81.3001 29.6199V21.9999H79.5701V22.6999ZM77.4201 28.5799C76.7649 28.5391 76.1499 28.25 75.7004 27.7716C75.2509 27.2932 75.0006 26.6614 75.0006 26.0049C75.0006 25.3485 75.2509 24.7167 75.7004 24.2383C76.1499 23.7598 76.7649 23.4708 77.4201 23.4299C77.7403 23.4437 78.0545 23.5218 78.344 23.6596C78.6334 23.7973 78.8922 23.9918 79.1049 24.2316C79.3176 24.4714 79.4799 24.7515 79.5822 25.0553C79.6844 25.3591 79.7245 25.6803 79.7001 25.9999C79.7274 26.3206 79.6893 26.6435 79.5883 26.9491C79.4872 27.2546 79.3252 27.5365 79.1121 27.7777C78.8989 28.0189 78.6391 28.2143 78.3483 28.3522C78.0575 28.4901 77.7417 28.5676 77.4201 28.5799ZM101.81 17.4999H97.3301V29.9999H99.2001V25.2599H101.81C102.343 25.2982 102.878 25.2263 103.382 25.0486C103.886 24.871 104.348 24.5915 104.739 24.2274C105.13 23.8634 105.442 23.4227 105.655 22.9328C105.869 22.4428 105.979 21.9142 105.979 21.3799C105.979 20.8456 105.869 20.317 105.655 19.8271C105.442 19.3372 105.13 18.8965 104.739 18.5324C104.348 18.1684 103.886 17.8888 103.382 17.7112C102.878 17.5336 102.343 17.4616 101.81 17.4999ZM101.81 23.4999H99.2001V19.2399H101.85C102.418 19.2399 102.962 19.4654 103.363 19.8667C103.765 20.268 103.99 20.8124 103.99 21.3799C103.99 21.9475 103.765 22.4918 103.363 22.8931C102.962 23.2945 102.418 23.5199 101.85 23.5199L101.81 23.4999ZM113.35 21.7099C112.669 21.6679 111.991 21.8265 111.399 22.1659C110.807 22.5054 110.328 23.0109 110.02 23.6199L111.67 24.3099C111.837 24.0093 112.087 23.7634 112.39 23.6019C112.694 23.4405 113.038 23.3703 113.38 23.3999C113.617 23.3722 113.858 23.392 114.088 23.4582C114.317 23.5245 114.531 23.6358 114.718 23.7856C114.904 23.9355 115.058 24.1209 115.172 24.3311C115.286 24.5413 115.356 24.7721 115.38 25.0099V25.1299C114.779 24.8138 114.109 24.6491 113.43 24.6499C111.65 24.6499 109.83 25.6499 109.83 27.4699C109.848 27.8568 109.943 28.2361 110.11 28.5855C110.277 28.9348 110.513 29.247 110.803 29.5035C111.093 29.7601 111.432 29.9557 111.799 30.0787C112.166 30.2018 112.554 30.2498 112.94 30.2199C113.409 30.2459 113.877 30.1466 114.295 29.9322C114.714 29.7178 115.067 29.3961 115.32 28.9999H115.38V29.9999H117.18V25.1899C117.18 22.9999 115.52 21.7299 113.39 21.7299L113.35 21.7099ZM113.12 28.5599C112.51 28.5599 111.66 28.2499 111.66 27.4999C111.66 26.4999 112.72 26.1599 113.66 26.1599C114.254 26.1453 114.841 26.2903 115.36 26.5799C115.297 27.123 115.04 27.6249 114.635 27.9926C114.231 28.3604 113.707 28.569 113.16 28.5799L113.12 28.5599ZM123.74 21.9999L121.6 27.4199H121.54L119.32 21.9999H117.32L120.65 29.5799L118.75 33.7899H120.75L125.82 21.9999H123.74ZM106.94 29.9999H108.8V17.4999H106.94V29.9999Z"
                        fill="white"
                    ></path>
                    <path
                        d="M10.4399 7.53997C10.1212 7.93403 9.96391 8.43441 9.99994 8.93997V31.06C9.96591 31.5704 10.1348 32.0735 10.4699 32.46L10.5399 32.54L22.8999 20.15V19.85L10.5099 7.46997L10.4399 7.53997Z"
                        fill="url(#paint0_linear_app_goog_lld)"
                    ></path>
                    <path
                        d="M26.9999 24.28L22.8999 20.15V19.85L26.9999 15.72L27.0899 15.78L31.9999 18.56C33.3999 19.35 33.3999 20.65 31.9999 21.45L27.1099 24.23L26.9999 24.28Z"
                        fill="url(#paint1_linear_app_goog_lld)"
                    ></path>
                    <path
                        d="M27.1199 24.23L22.8999 20L10.4399 32.46C10.7225 32.7115 11.0842 32.8562 11.4623 32.869C11.8404 32.8818 12.211 32.7619 12.5099 32.53L27.1199 24.23Z"
                        fill="url(#paint2_linear_app_goog_lld)"
                    ></path>
                    <path
                        d="M27.1199 15.78L12.5099 7.47997C12.213 7.24488 11.8426 7.12203 11.464 7.133C11.0854 7.14397 10.7228 7.28808 10.4399 7.53997L22.8999 20L27.1199 15.78Z"
                        fill="url(#paint3_linear_app_goog_lld)"
                    ></path>
                    <path
                        opacity="0.2"
                        d="M26.9999 24.1299L12.5099 32.3799C12.2219 32.5973 11.8708 32.7149 11.5099 32.7149C11.1491 32.7149 10.798 32.5973 10.5099 32.3799L10.4399 32.4499L10.5099 32.5299C10.798 32.7473 11.1491 32.8649 11.5099 32.8649C11.8708 32.8649 12.2219 32.7473 12.5099 32.5299L27.1199 24.2299L26.9999 24.1299Z"
                        fill="black"
                    ></path>
                    <path
                        opacity="0.12"
                        d="M10.4399 32.3199C10.1187 31.9233 9.96126 31.4188 9.99988 30.9099V31.0599C9.96585 31.5703 10.1348 32.0735 10.4699 32.4599L10.5399 32.3899L10.4399 32.3199Z"
                        fill="black"
                    ></path>
                    <path
                        opacity="0.12"
                        d="M32 21.3L27 24.13L27.09 24.23L32 21.44C32.2898 21.3174 32.5413 21.119 32.7278 20.8656C32.9143 20.6122 33.0291 20.3132 33.06 20C32.9975 20.2846 32.869 20.5505 32.6849 20.7763C32.5007 21.0021 32.2662 21.1815 32 21.3Z"
                        fill="black"
                    ></path>
                    <path
                        opacity="0.25"
                        d="M12.51 7.61998L32 18.7C32.2662 18.8185 32.5007 18.9979 32.6849 19.2237C32.869 19.4495 32.9975 19.7154 33.06 20C33.0291 19.6868 32.9143 19.3878 32.7278 19.1344C32.5413 18.881 32.2898 18.6825 32 18.56L12.51 7.47998C11.12 6.67998 10 7.33998 10 8.93998V9.08998C10 7.48998 11.12 6.82998 12.51 7.61998Z"
                        fill="white"
                    ></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear_app_goog_lld"
                            x1="21.7999"
                            y1="8.70997"
                            x2="5.01993"
                            y2="25.49"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.01" stopColor="#00A1FF"></stop>
                            <stop offset="0.26" stopColor="#00BEFF"></stop>
                            <stop offset="0.51" stopColor="#00D2FF"></stop>
                            <stop offset="0.76" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_app_goog_lld"
                            x1="33.8299"
                            y1="20"
                            x2="9.6399"
                            y2="20"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.41" stopColor="#FFBD00"></stop>
                            <stop offset="0.78" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_app_goog_lld"
                            x1="24.8299"
                            y1="22.3"
                            x2="2.06994"
                            y2="45.05"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_app_goog_lld"
                            x1="7.29994"
                            y1="0.179969"
                            x2="17.4599"
                            y2="10.34"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.07" stopColor="#2DA771"></stop>
                            <stop offset="0.48" stopColor="#15CF74"></stop>
                            <stop offset="0.8" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <style jsx>{`
                    @media (max-width: 768px) {
                        svg {
                            width: 70%;
                        }
                    }
                    @media (max-width: 480px) {
                        svg {
                            width: 80px;
                            margin: 5px;
                        }
                    }
                `}</style>
            </a>
        </div>
    );
};

export default PlaystoreButton;
