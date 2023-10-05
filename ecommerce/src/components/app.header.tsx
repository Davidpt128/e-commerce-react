"use client";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Row, Col, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import Logo from "../../public/img/logo.svg";

const { Header } = Layout;
const items: MenuProps["items"] = [
  { label: "Home", key: "" },
  {
    label: "Product",
    key: "product",
    children: [
      {
        label: "Men",
        key: "men",
      },
      {
        label: "Women",
        key: "women",
      },
    ],
  },
  { label: "About us", key: "about" },
  { label: "Contact", key: "contact" },
];

const AppHeader: React.FC = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/${e.key}`);
    setCurrent(e.key);
  };
  return (
    <Header
      className="header"
      style={{
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        zIndex: 1,
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Row style={{ width: "100%" }} justify={"space-between"}>
        <Col>
          <svg
            cursor="pointer"
            onClick={() => {
              router.push("/");
            }}
            width="134"
            height="23"
            viewBox="0 0 134 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="MioCosmetic">
              <path
                d="M9.54417 22.4087C9.45961 22.4087 9.36449 22.3775 9.25879 22.3153C9.1531 22.253 9.07911 22.1182 9.03683 21.9107L4.2489 2.8322C4.22776 2.68696 4.16434 2.62472 4.05865 2.64547C3.95295 2.64547 3.90011 2.71809 3.90011 2.86333L3.26594 20.0433C3.2448 20.6243 3.33993 21.0704 3.55132 21.3816C3.76271 21.6721 4.13263 21.8588 4.6611 21.9418L5.07331 22.0041C5.34811 22.0248 5.48552 22.1493 5.48552 22.3775C5.48552 22.6058 5.32698 22.7199 5.00989 22.7199H0.475623C0.158541 22.7199 0 22.6058 0 22.3775C0 22.1493 0.137402 22.0248 0.412206 22.0041L0.824413 21.9418C1.37402 21.8588 1.74395 21.6721 1.9342 21.3816C2.14559 21.0704 2.26185 20.6243 2.28299 20.0433L2.91715 2.36536C2.93829 1.92963 2.87488 1.63915 2.7269 1.49391C2.57893 1.34867 2.26185 1.23455 1.77566 1.15156L1.04637 1.02706C0.771566 0.964817 0.634164 0.840324 0.634164 0.653585C0.634164 0.425349 0.792705 0.311231 1.10979 0.311231H4.91477C5.57007 0.311231 5.97171 0.622462 6.11968 1.24492L9.95637 16.7754C9.99865 16.9206 10.0621 16.9932 10.1466 16.9932C10.2523 16.9932 10.3157 16.9206 10.3369 16.7754L14.3321 1.08931C14.4589 0.57059 14.7972 0.311231 15.3468 0.311231H19.0883C19.4054 0.311231 19.564 0.425349 19.564 0.653585C19.564 0.840324 19.4265 0.964817 19.1517 1.02706L18.4225 1.15156C17.9785 1.23455 17.6826 1.34867 17.5346 1.49391C17.3867 1.63915 17.3232 1.92963 17.3444 2.36536L17.9785 20.6658C17.9997 21.1015 18.0737 21.392 18.2005 21.5372C18.3273 21.6825 18.6127 21.7966 19.0566 21.8796L19.7859 22.0041C20.0607 22.0663 20.1981 22.1908 20.1981 22.3775C20.1981 22.6058 20.0396 22.7199 19.7225 22.7199H13.9833C13.6662 22.7199 13.5077 22.6058 13.5077 22.3775C13.5077 22.1908 13.6451 22.0663 13.9199 22.0041L14.6492 21.8796C15.0931 21.7966 15.389 21.6825 15.537 21.5372C15.685 21.392 15.7484 21.1015 15.7273 20.6658L15.1882 2.86333C15.1882 2.71809 15.1354 2.64547 15.0297 2.64547C14.9451 2.62472 14.8817 2.67659 14.8394 2.80108L10.0198 21.9107C9.97751 22.1182 9.90352 22.253 9.79783 22.3153C9.71327 22.3775 9.62872 22.4087 9.54417 22.4087Z"
                fill="black"
              />
              <path
                d="M23.6313 3.89039C23.1874 3.89039 22.8069 3.73478 22.4898 3.42355C22.1938 3.11231 22.0459 2.71809 22.0459 2.24086C22.0459 1.76364 22.1938 1.37979 22.4898 1.08931C22.8069 0.778078 23.1874 0.622462 23.6313 0.622462C24.0752 0.622462 24.4451 0.778078 24.7411 1.08931C25.037 1.37979 25.185 1.76364 25.185 2.24086C25.185 2.71809 25.037 3.11231 24.7411 3.42355C24.4451 3.73478 24.0752 3.89039 23.6313 3.89039ZM20.9678 22.7199C20.6507 22.7199 20.4922 22.6058 20.4922 22.3775C20.4922 22.1908 20.6296 22.0663 20.9044 22.0041L21.2849 21.9418C21.8133 21.8588 22.1516 21.7343 22.2995 21.5683C22.4475 21.3816 22.5215 21.0704 22.5215 20.6346V10.1773C22.5215 9.80379 22.4581 9.5548 22.3312 9.43031C22.2255 9.28507 22.0247 9.1917 21.7288 9.1502L21.0629 9.05683C20.7881 9.03609 20.6507 8.92197 20.6507 8.71448C20.6507 8.54849 20.8198 8.43437 21.158 8.37212C21.8133 8.26838 22.3418 8.10239 22.7434 7.87415C23.1451 7.64592 23.5361 7.36581 23.9166 7.03383C24.1069 6.84709 24.2654 6.75372 24.3923 6.75372C24.5825 6.75372 24.6776 6.87821 24.6776 7.1272V20.6346C24.6776 21.0704 24.7411 21.3816 24.8679 21.5683C24.9947 21.7551 25.2378 21.8692 25.5972 21.9107L26.3899 22.0041C26.6224 22.0456 26.7387 22.1597 26.7387 22.3464C26.7387 22.5954 26.5801 22.7199 26.2631 22.7199H20.9678Z"
                fill="black"
              />
              <path
                d="M33.1962 23C32.1182 23 31.1458 22.6473 30.2791 21.9418C29.4335 21.2156 28.7571 20.23 28.2498 18.9851C27.7424 17.7402 27.4888 16.35 27.4888 14.8146C27.4888 13.2792 27.7424 11.8994 28.2498 10.6752C28.7571 9.45106 29.4441 8.47587 30.3108 7.74966C31.1775 7.02345 32.1393 6.66035 33.1962 6.66035C34.2743 6.66035 35.2361 7.02345 36.0817 7.74966C36.9484 8.47587 37.6354 9.45106 38.1427 10.6752C38.6501 11.8994 38.9037 13.2792 38.9037 14.8146C38.9037 16.35 38.6501 17.7402 38.1427 18.9851C37.6565 20.23 36.9801 21.2156 36.1134 21.9418C35.2467 22.6473 34.2743 23 33.1962 23ZM33.1962 22.2219C35.3947 22.2219 36.4939 19.7528 36.4939 14.8146C36.4939 9.89716 35.3947 7.43843 33.1962 7.43843C30.9978 7.43843 29.8986 9.89716 29.8986 14.8146C29.8986 19.7528 30.9978 22.2219 33.1962 22.2219Z"
                fill="black"
              />
              <path
                d="M48.4543 23C46.8901 23 45.516 22.5228 44.3323 21.5683C43.1696 20.6139 42.2607 19.2756 41.6054 17.5535C40.9712 15.8106 40.6541 13.7564 40.6541 11.3911C40.6541 9.1087 41.0029 7.11682 41.7005 5.41542C42.4192 3.69328 43.3704 2.36536 44.5542 1.43166C45.7591 0.477222 47.0909 0 48.5494 0C49.4161 0 50.1771 0.0829946 50.8324 0.248984C51.4877 0.394226 52.0691 0.591339 52.5764 0.840325C52.8301 0.985566 52.9569 1.20343 52.9569 1.49391L53.052 6.22463C53.052 6.57736 52.9252 6.75372 52.6715 6.75372C52.439 6.75372 52.291 6.61885 52.2276 6.34912L51.9105 5.19756C51.4666 3.57916 50.9487 2.45873 50.3568 1.83627C49.7861 1.2138 49.0991 0.902571 48.2958 0.902571C46.8161 0.902571 45.5794 1.80514 44.5859 3.61028C43.6135 5.39468 43.1273 7.98827 43.1273 11.3911C43.1273 13.7149 43.3704 15.6757 43.8566 17.2733C44.364 18.871 45.0087 20.0744 45.7908 20.8836C46.5941 21.6928 47.4397 22.0974 48.3275 22.0974C49.2787 22.0974 50.0397 21.8069 50.6105 21.226C51.2024 20.645 51.6991 19.5246 52.1008 17.8647L52.4813 16.3396C52.5447 16.0284 52.7138 15.8935 52.9886 15.935C53.2211 15.9765 53.3374 16.1529 53.3374 16.4641L53.2106 21.5061C53.2106 21.7966 53.0732 22.0144 52.7983 22.1597C52.291 22.4087 51.6886 22.6058 50.991 22.751C50.3145 22.917 49.469 23 48.4543 23Z"
                fill="black"
              />
              <path
                d="M60.7403 23C59.6622 23 58.6898 22.6473 57.8231 21.9418C56.9776 21.2156 56.3011 20.23 55.7938 18.9851C55.2864 17.7402 55.0328 16.35 55.0328 14.8146C55.0328 13.2792 55.2864 11.8994 55.7938 10.6752C56.3011 9.45106 56.9881 8.47587 57.8548 7.74966C58.7215 7.02345 59.6833 6.66035 60.7403 6.66035C61.8183 6.66035 62.7801 7.02345 63.6257 7.74966C64.4924 8.47587 65.1794 9.45106 65.6867 10.6752C66.1941 11.8994 66.4477 13.2792 66.4477 14.8146C66.4477 16.35 66.1941 17.7402 65.6867 18.9851C65.2005 20.23 64.5241 21.2156 63.6574 21.9418C62.7907 22.6473 61.8183 23 60.7403 23ZM60.7403 22.2219C62.9387 22.2219 64.0379 19.7528 64.0379 14.8146C64.0379 9.89716 62.9387 7.43843 60.7403 7.43843C58.5418 7.43843 57.4426 9.89716 57.4426 14.8146C57.4426 19.7528 58.5418 22.2219 60.7403 22.2219Z"
                fill="black"
              />
              <path
                d="M71.0836 23C70.5974 23 70.0795 22.9378 69.5299 22.8133C68.9803 22.7095 68.5363 22.5747 68.1981 22.4087C68.0079 22.3049 67.9127 22.1286 67.9127 21.8796L67.8176 18.3938C67.8176 18.041 67.955 17.8647 68.2298 17.8647C68.4624 17.8647 68.6209 18.0307 68.7055 18.3627C69.0648 19.8358 69.4982 20.8421 70.0055 21.3816C70.534 21.9211 71.1681 22.1908 71.908 22.1908C72.521 22.1908 73.0283 21.9626 73.43 21.5061C73.8316 21.0289 74.0324 20.3753 74.0324 19.5453C74.0324 18.7154 73.7999 17.9788 73.3348 17.3356C72.8698 16.6924 72.0877 15.9869 70.9884 15.2192C69.8892 14.493 69.086 13.7668 68.5786 13.0406C68.0713 12.2936 67.8176 11.4844 67.8176 10.613C67.8176 9.43031 68.2404 8.47587 69.0859 7.74966C69.9315 7.02345 71.0519 6.66035 72.447 6.66035C72.8698 6.66035 73.282 6.71222 73.6836 6.81597C74.0853 6.89896 74.4446 7.0442 74.7617 7.25169C74.952 7.37618 75.0471 7.54217 75.0471 7.74966L75.1105 11.1732C75.1105 11.4844 74.9837 11.6401 74.73 11.6401C74.582 11.6401 74.4763 11.5986 74.4129 11.5156C74.3495 11.4118 74.2967 11.2873 74.2544 11.1421C73.8316 9.79342 73.4088 8.85972 72.9861 8.341C72.5633 7.80153 72.0454 7.5318 71.4324 7.5318C70.8828 7.5318 70.4283 7.71854 70.0689 8.09202C69.7095 8.46549 69.5299 8.93234 69.5299 9.49256C69.5299 10.2188 69.7518 10.8516 70.1957 11.3911C70.6396 11.9305 71.4429 12.5945 72.6056 13.383C73.6625 14.1299 74.4552 14.9391 74.9837 15.8106C75.5333 16.6613 75.8081 17.5949 75.8081 18.6116C75.8081 19.9396 75.3747 21.0081 74.508 21.8173C73.6413 22.6058 72.4999 23 71.0836 23Z"
                fill="black"
              />
              <path
                d="M77.3179 22.7199C77.0009 22.7199 76.8423 22.6058 76.8423 22.3775C76.8423 22.1908 76.9797 22.0663 77.2545 22.0041L77.635 21.9418C78.0789 21.8588 78.3643 21.7343 78.4911 21.5683C78.6391 21.3816 78.7131 21.0704 78.7131 20.6346V10.1773C78.7131 9.80379 78.6497 9.5548 78.5228 9.43031C78.4172 9.28507 78.2163 9.1917 77.9204 9.1502L77.2545 9.05683C76.9797 9.03609 76.8423 8.92197 76.8423 8.71448C76.8423 8.54849 77.0114 8.43437 77.3496 8.37212C78.005 8.26838 78.5017 8.10239 78.8399 7.87415C79.1993 7.64592 79.5692 7.36581 79.9497 7.03383C80.14 6.84709 80.2985 6.75372 80.4253 6.75372C80.6156 6.75372 80.7107 6.87821 80.7107 7.1272V8.52774C80.7107 8.67298 80.7741 8.7871 80.901 8.8701C81.0278 8.93234 81.1652 8.89084 81.3132 8.7456C82.1799 7.9364 82.9303 7.38656 83.5645 7.09608C84.2198 6.80559 84.8751 6.66035 85.5304 6.66035C86.1434 6.66035 86.6824 6.82634 87.1475 7.15832C87.6337 7.46955 87.993 7.94677 88.2256 8.58999C88.289 8.75598 88.3947 8.85972 88.5426 8.90122C88.7117 8.92197 88.8703 8.85972 89.0183 8.71448C89.8849 7.92603 90.6354 7.38656 91.2695 7.09608C91.9037 6.80559 92.5484 6.66035 93.2037 6.66035C94.0916 6.66035 94.8103 6.99233 95.3599 7.65629C95.9306 8.2995 96.216 9.25395 96.216 10.5196V20.6346C96.216 21.0704 96.2794 21.3816 96.4063 21.5683C96.5542 21.7343 96.8502 21.8484 97.2941 21.9107L97.9917 22.0041C98.2242 22.0456 98.3405 22.1701 98.3405 22.3775C98.3405 22.6058 98.2136 22.7199 97.96 22.7199H92.5379C92.2419 22.7199 92.094 22.6058 92.094 22.3775C92.094 22.1701 92.2102 22.0456 92.4427 22.0041L92.8867 21.9418C93.3728 21.8796 93.6899 21.7551 93.8379 21.5683C93.9859 21.3816 94.0599 21.0704 94.0599 20.6346V10.862C94.0599 9.84529 93.8696 9.12945 93.4891 8.71448C93.1298 8.2995 92.633 8.09202 91.9988 8.09202C91.3647 8.09202 90.7833 8.28913 90.2549 8.68336C89.7476 9.05683 89.3353 9.56518 89.0183 10.2084C88.7012 10.8309 88.5426 11.5259 88.5426 12.2936V20.6346C88.5426 21.0704 88.6166 21.3816 88.7646 21.5683C88.9126 21.7343 89.2191 21.8484 89.6841 21.9107L90.3817 22.0041C90.6142 22.0456 90.7305 22.1701 90.7305 22.3775C90.7305 22.6058 90.6037 22.7199 90.35 22.7199H84.9596C84.6637 22.7199 84.5157 22.6058 84.5157 22.3775C84.5157 22.1701 84.632 22.0456 84.8645 22.0041L85.3084 21.9418C85.7523 21.8796 86.0377 21.7551 86.1645 21.5683C86.3125 21.3816 86.3865 21.0704 86.3865 20.6346V10.862C86.3865 9.84529 86.1962 9.12945 85.8157 8.71448C85.4564 8.2995 84.9596 8.09202 84.3254 8.09202C83.6913 8.09202 83.11 8.28913 82.5815 8.68336C82.0742 9.05683 81.662 9.56518 81.3449 10.2084C81.0278 10.8309 80.8693 11.5259 80.8693 12.2936V20.6346C80.8693 21.0704 80.9327 21.3816 81.0595 21.5683C81.2075 21.7551 81.5034 21.8692 81.9473 21.9107L82.8035 22.0041C83.036 22.0456 83.1522 22.1597 83.1522 22.3464C83.1522 22.5954 82.9937 22.7199 82.6766 22.7199H77.3179Z"
                fill="black"
              />
              <path
                d="M104.463 23C103.449 23 102.54 22.668 101.736 22.0041C100.933 21.3401 100.288 20.4064 99.8023 19.203C99.3372 17.9788 99.1047 16.5679 99.1047 14.9702C99.1047 13.3311 99.3478 11.889 99.834 10.6441C100.32 9.39919 100.986 8.424 101.832 7.71854C102.677 7.01308 103.618 6.66035 104.654 6.66035C105.901 6.66035 106.905 7.1687 107.666 8.18539C108.448 9.18133 108.839 10.8101 108.839 13.0717C108.839 13.7564 108.575 14.0988 108.046 14.0988H102.022C101.599 14.0988 101.388 14.3374 101.388 14.8146C101.388 17.014 101.715 18.6635 102.371 19.7632C103.026 20.8629 103.861 21.4127 104.876 21.4127C105.679 21.4127 106.334 21.1326 106.841 20.5724C107.349 20.0122 107.761 19.0681 108.078 17.7402C108.142 17.512 108.279 17.3978 108.49 17.3978C108.744 17.3978 108.839 17.6053 108.776 18.0203C108.437 19.8669 107.898 21.1637 107.159 21.9107C106.419 22.6369 105.52 23 104.463 23ZM101.927 13.3207H105.129C106.144 13.3207 106.651 12.802 106.651 11.7645C106.651 10.4159 106.482 9.35769 106.144 8.58999C105.806 7.82228 105.298 7.43843 104.622 7.43843C103.798 7.43843 103.1 7.90528 102.529 8.83897C101.98 9.77267 101.62 11.1006 101.451 12.8227C101.409 13.1547 101.567 13.3207 101.927 13.3207Z"
                fill="black"
              />
              <path
                d="M113.991 23C113.251 23 112.638 22.751 112.152 22.253C111.687 21.7343 111.454 20.894 111.454 19.7321V8.09202C111.454 7.84303 111.327 7.71854 111.074 7.71854H110.154C109.816 7.71854 109.647 7.59405 109.647 7.34506C109.647 7.17907 109.742 7.03383 109.932 6.90934C110.63 6.43212 111.19 5.92377 111.613 5.3843C112.035 4.82409 112.405 4.06676 112.722 3.11231C112.87 2.67659 113.05 2.45873 113.261 2.45873C113.494 2.45873 113.61 2.62472 113.61 2.9567V6.41137C113.61 6.70185 113.758 6.84709 114.054 6.84709H116.115C116.453 6.84709 116.622 6.99233 116.622 7.28281C116.622 7.5733 116.453 7.71854 116.115 7.71854H114.054C113.758 7.71854 113.61 7.86378 113.61 8.15426V19.7632C113.61 20.2197 113.684 20.5828 113.832 20.8525C113.98 21.1015 114.255 21.226 114.657 21.226C115.1 21.226 115.46 21.0081 115.735 20.5724C116.031 20.1367 116.221 19.4312 116.305 18.456C116.348 18.1655 116.485 18.0203 116.718 18.0203C116.971 18.0203 117.098 18.1759 117.098 18.4871C117.035 20.0848 116.696 21.2364 116.083 21.9418C115.492 22.6473 114.794 23 113.991 23Z"
                fill="black"
              />
              <path
                d="M120.833 3.89039C120.389 3.89039 120.009 3.73478 119.691 3.42355C119.396 3.11231 119.248 2.71809 119.248 2.24086C119.248 1.76364 119.396 1.37979 119.691 1.08931C120.009 0.778078 120.389 0.622462 120.833 0.622462C121.277 0.622462 121.647 0.778078 121.943 1.08931C122.239 1.37979 122.387 1.76364 122.387 2.24086C122.387 2.71809 122.239 3.11231 121.943 3.42355C121.647 3.73478 121.277 3.89039 120.833 3.89039ZM118.169 22.7199C117.852 22.7199 117.694 22.6058 117.694 22.3775C117.694 22.1908 117.831 22.0663 118.106 22.0041L118.487 21.9418C119.015 21.8588 119.353 21.7343 119.501 21.5683C119.649 21.3816 119.723 21.0704 119.723 20.6346V10.1773C119.723 9.80379 119.66 9.5548 119.533 9.43031C119.427 9.28507 119.226 9.1917 118.93 9.1502L118.265 9.05683C117.99 9.03609 117.852 8.92197 117.852 8.71448C117.852 8.54849 118.022 8.43437 118.36 8.37212C119.015 8.26838 119.544 8.10239 119.945 7.87415C120.347 7.64592 120.738 7.36581 121.118 7.03383C121.309 6.84709 121.467 6.75372 121.594 6.75372C121.784 6.75372 121.879 6.87821 121.879 7.1272V20.6346C121.879 21.0704 121.943 21.3816 122.07 21.5683C122.196 21.7551 122.44 21.8692 122.799 21.9107L123.592 22.0041C123.824 22.0456 123.94 22.1597 123.94 22.3464C123.94 22.5954 123.782 22.7199 123.465 22.7199H118.169Z"
                fill="black"
              />
              <path
                d="M129.669 23C128.739 23 127.893 22.6991 127.132 22.0974C126.392 21.475 125.8 20.5931 125.356 19.452C124.912 18.3108 124.69 16.9517 124.69 15.3748C124.69 13.6112 124.955 12.0758 125.483 10.7686C126.033 9.46144 126.773 8.45512 127.703 7.74966C128.633 7.02345 129.669 6.66035 130.81 6.66035C131.783 6.66035 132.544 6.84709 133.093 7.22057C133.305 7.36581 133.41 7.59405 133.41 7.90528L133.474 11.7023C133.474 12.0135 133.347 12.1691 133.093 12.1691C132.861 12.1691 132.713 12.0343 132.649 11.7645C132.353 10.6234 132.068 9.74154 131.793 9.11908C131.518 8.49662 131.233 8.07127 130.937 7.84303C130.641 7.59405 130.313 7.46955 129.954 7.46955C129.531 7.46955 129.087 7.70816 128.622 8.18539C128.178 8.66261 127.798 9.44069 127.481 10.5196C127.185 11.5778 127.037 12.9783 127.037 14.7212C127.037 16.9414 127.322 18.6116 127.893 19.7321C128.485 20.8525 129.246 21.4127 130.176 21.4127C130.916 21.4127 131.529 21.1119 132.015 20.5101C132.522 19.9084 132.956 18.8191 133.315 17.2422C133.379 17.014 133.505 16.8999 133.696 16.8999C133.949 16.8999 134.044 17.1074 133.981 17.5223C133.748 18.9747 133.421 20.1055 132.998 20.9147C132.596 21.7032 132.11 22.253 131.539 22.5643C130.99 22.8548 130.366 23 129.669 23Z"
                fill="black"
              />
            </g>
          </svg>
        </Col>
        <Col span={16}>
          <Menu
            style={{ justifyContent: "center" }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
        <Col>
          <Row>
            <Col sm={8}>
              <SearchOutlined className="header__icon" />
            </Col>
            <Col sm={8}>
              <UserOutlined className="header__icon" />
            </Col>
            <Col sm={8}>
              <ShoppingCartOutlined className="header__icon" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
