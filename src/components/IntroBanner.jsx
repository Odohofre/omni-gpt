import people from '../assets/people.png';

export default function IntroBanner() {
  return (
    <div className="w-full mt-2.5 flex items-end justify-around  sm:justify-between  px-[8px]">
      <div className="relative h-[124px] w-[195px]">
        <div className="h-[60px] w-[188px] mt-[60px] bg-yellow-300 rounde-full rounded-br-full rounded-l-full"></div>
        <img className="absolute -top-1 right-[2.68px] flex-shrink-0 z-30" src={people} width={195} height={124} alt="" />
      </div>
      <div className="flex justify-center items-center w-[61px] h-[60px] bg-lilac rounded-full">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.82063 0.0149572L-1.31069e-06 0.0149574L-1.45305e-07 26.6758L4.83558 26.6758L4.83557 8.37402L5.02989 8.28438C5.14948 8.44873 5.25411 8.63547 5.39611 8.78487C10.5904 13.9841 15.7922 19.1833 20.994 24.3825C22.2646 25.6524 23.5277 26.9149 24.7982 28.1773C24.9103 28.2894 25.0224 28.379 25.142 28.4686L26.6741 30L30 26.6758L28.4529 25.1295C28.3558 24.995 28.2436 24.868 28.1166 24.741C21.6592 18.2943 15.2018 11.8402 8.75187 5.38597C8.60986 5.24404 8.47534 5.09465 8.2287 4.84067L26.5994 4.84067L26.5994 7.44652e-07L7.07773 1.59797e-06C6.32287 1.63097e-06 5.56054 1.66429e-06 4.80568 1.69729e-06L4.82063 0.0149572Z"
            fill="#F4FAFF"
          />
        </svg>
      </div>
    </div>
  );
}
