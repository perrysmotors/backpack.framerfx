import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

export function logo_wordmarque(props) {
    return (
        <svg
            height="112"
            width="621"
            fill="none"
            viewBox="0 0 621 112"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M584.73 25.0624H597.683C598.417 25.0624 599.061 25.705 599.061 26.4394V38.2821C601.632 26.5312 611.737 22.4919 619.087 24.2362C619.731 24.328 620.098 24.8788 620.098 25.5214V38.5575C620.098 39.3837 619.362 40.0263 618.444 39.8427C604.848 37.1804 599.336 44.5247 599.336 54.8066V83.6329C599.336 84.3673 598.693 85.0099 597.958 85.0099H584.638C583.904 85.0099 583.26 84.3673 583.26 83.6329V26.4394C583.352 25.705 583.995 25.0624 584.73 25.0624Z" />
            <path d="M542.656 36.6297C550.282 36.6297 557.262 41.2198 558.366 49.4821H526.304C528.417 40.5772 535.031 36.6297 542.656 36.6297ZM545.229 72.9838C539.9 72.9838 534.847 71.6985 531.173 68.7608C527.498 65.8231 525.754 62.7936 525.754 59.2133H573.338C574.073 59.2133 574.716 58.5697 574.716 57.8362C574.442 43.6985 569.849 37.0887 565.439 32.5903C560.846 28.0002 553.038 23.7772 542.749 23.7772C532.459 23.7772 524.56 27.5412 519.139 32.8657C513.812 38.1903 509.769 44.9838 509.769 55.2657C509.769 65.5477 513.903 72.3402 518.955 77.3894C524.008 82.4386 532.275 86.2034 544.127 86.2034C555.334 86.2034 564.796 82.2559 571.593 74.4526C572.145 73.81 571.961 72.7993 571.227 72.433L561.765 66.9248C561.305 66.6494 560.662 66.6494 560.203 67.1084C555.517 71.5149 549.546 72.9838 545.229 72.9838Z" />
            <path d="M444.821 83.6331V26.4397C444.821 25.7044 445.464 25.0626 446.199 25.0626H459.519C460.255 25.0626 460.897 25.7044 460.897 26.4397V34.243C464.02 28.8266 469.901 23.8683 479.913 23.8683C490.202 23.8683 501.685 28.9175 501.685 52.1437V83.6331C501.685 84.3676 501.042 85.0102 500.307 85.0102H486.986C486.252 85.0102 485.608 84.3676 485.608 83.6331V52.42C485.608 46.8191 484.231 37.1798 474.31 37.1798C464.389 37.1798 460.897 45.9011 460.897 53.9798V83.6331C460.897 84.3676 460.255 85.0102 459.519 85.0102H446.199C445.464 84.9175 444.821 84.3676 444.821 83.6331Z" />
            <path d="M376.566 83.6331V26.4397C376.566 25.7044 377.209 25.0626 377.944 25.0626H391.264C391.999 25.0626 392.642 25.7044 392.642 26.4397V34.243C395.766 28.8266 401.645 23.8683 411.658 23.8683C421.947 23.8683 433.43 28.9175 433.43 52.1437V83.6331C433.43 84.3676 432.787 85.0102 432.052 85.0102H418.732C417.998 85.0102 417.354 84.3676 417.354 83.6331V52.42C417.354 46.8191 415.976 37.1798 406.055 37.1798C396.133 37.1798 392.642 45.9011 392.642 53.9798V83.6331C392.642 84.3676 391.999 85.0102 391.264 85.0102H377.944C377.118 84.9175 376.566 84.3676 376.566 83.6331Z" />
            <path d="M315.661 54.898C315.661 65.18 321.999 73.076 332.196 73.076C342.393 73.076 348.915 66.1907 348.915 55.6333C348.915 45.076 342.577 36.9963 331.737 36.9963C321.54 36.9963 315.661 44.8923 315.661 54.898ZM348.456 33.5996V26.439C348.456 25.7045 349.099 25.0619 349.834 25.0619H363.154C363.889 25.0619 364.532 25.7045 364.532 26.439V83.6333C364.532 84.3678 363.889 85.0104 363.154 85.0104H349.834C349.099 85.0104 348.456 84.3678 348.456 83.6333V76.1055C345.608 80.5111 339.361 86.2947 329.165 86.2947C309.689 86.2947 299.584 71.4226 299.584 54.8062C299.584 33.1406 314.65 23.8685 328.705 23.8685C337.983 23.7776 344.414 28.1832 348.456 33.5996Z" />
            <path d="M274.965 38.0982C280.936 38.0982 285.346 39.9342 289.48 42.8719C290.123 43.331 291.041 43.1473 291.408 42.5047L296.92 32.9572C297.288 32.3146 297.104 31.5801 296.46 31.2129C290.766 27.3572 283.692 23.7769 274.138 23.7769C264.676 23.7769 255.949 26.3473 249.702 32.6818C243.456 38.9244 240.608 46.3605 240.608 55.1745C240.608 65.8228 245.016 72.6171 249.794 77.39C254.571 82.1637 263.206 86.2031 274.23 86.2031C284.151 86.2031 291.501 82.0719 296.553 78.767C297.104 78.3998 297.288 77.5736 296.92 77.0228L291.501 67.5679C291.133 66.9244 290.214 66.6499 289.57 67.1089C285.989 69.6785 280.843 71.8818 275.057 71.8818C268.535 71.8818 256.684 68.2096 256.684 54.99C256.684 41.7703 268.442 38.0982 274.965 38.0982Z" />
            <path d="M221.132 50.4002C216.907 48.8395 215.438 48.2887 212.222 47.0944C209.007 45.9018 206.159 44.1576 206.159 41.5871C206.159 39.0166 208.548 36.1707 213.417 36.1707C217.641 36.1707 220.214 37.8231 221.684 40.7609C222.051 41.4953 222.878 41.6789 223.522 41.3117L232.892 35.8953C233.534 35.5281 233.718 34.7018 233.351 34.0592C230.778 29.5609 225.726 23.869 213.508 23.869C198.534 23.869 190.817 32.4986 190.817 42.0461C190.817 51.5936 198.626 56.092 205.792 58.9379C213.876 62.2419 214.426 62.4264 215.438 62.7936C217.917 63.8035 220.95 65.3641 220.95 68.2091C220.95 71.0559 217.641 73.6264 212.589 73.6264C207.905 73.6264 202.577 71.6986 200.371 66.2822C200.096 65.5477 199.178 65.1805 198.442 65.6395L188.98 71.0559C188.429 71.4222 188.154 72.0658 188.429 72.7084C191.185 79.8691 199.361 86.2035 212.589 86.2035C226.921 86.2035 236.474 78.5838 236.474 67.8428C236.474 57.1018 229.124 53.3379 221.132 50.4002Z" />
            <path d="M126.054 25.0624H141.119C141.67 25.0624 142.13 25.4296 142.405 25.8886L157.379 64.2624L171.894 25.8886C172.077 25.3378 172.629 25.0624 173.18 25.0624H187.97C188.98 25.0624 189.623 26.0722 189.164 26.8984L152.419 111.174C152.235 111.633 151.684 112 151.224 112H138.18C137.261 112 136.526 110.99 136.985 110.164L149.571 80.6952L124.951 26.8984C124.4 26.0722 125.043 25.0624 126.054 25.0624Z" />
            <path d="M125.502 69.3113C125.135 68.6687 124.216 68.3933 123.573 68.8523C118.429 72.6171 112.366 72.708 107.773 65.6392C103.914 59.6719 99.2293 52.3277 99.2293 52.3277L119.439 27.2654C120.174 26.3474 119.531 25.0621 118.429 25.0621H102.628C102.169 25.0621 101.801 25.2457 101.526 25.6129L84.0717 49.5736V1.37687C84.0717 0.64244 83.4287 -0.000183105 82.6938 -0.000183105H69.3735C68.6386 -0.000183105 67.9955 0.64244 67.9955 1.37687V83.6335C67.9955 84.367 68.6386 85.0106 69.3735 85.0106H82.7856C83.5205 85.0106 84.1636 84.367 84.1636 83.6335V56.9179C84.1636 56.9179 93.0744 70.9638 96.4734 76.1965C101.067 83.3572 107.497 86.2949 114.479 86.2949C121.093 86.2949 125.319 84.5516 130.371 79.5933C130.83 79.1342 130.922 78.4916 130.647 77.9408L125.502 69.3113Z" />
            <path d="M37.7723 38.0982C33.6384 36.7211 31.4337 35.8949 28.1266 34.7932C24.7276 33.5998 18.9402 30.2949 18.9402 24.9703C18.9402 19.6457 22.6148 16.249 30.0557 16.249C36.8537 16.249 40.6201 19.5539 43.1004 24.8785C43.4679 25.6129 44.2947 25.8883 45.0296 25.5211L55.9614 19.1867C56.5126 18.8195 56.7881 18.0851 56.5126 17.4424C53.2055 10.19 45.4889 1.46866 30.2395 1.46866C13.2447 1.46866 2.58844 11.567 2.58844 24.8785C2.58844 38.0982 11.3155 44.9834 23.166 49.0228C27.4836 50.4916 29.229 51.1342 32.9035 52.3277C39.8852 54.7155 43.1004 57.8359 43.1004 62.1506C43.1004 66.4654 40.3445 71.6064 29.5046 71.6064C19.5833 71.6064 16.0924 66.3736 14.0714 61.4162C13.7958 60.6827 12.8772 60.3146 12.1423 60.7736L0.659299 67.3834C0.108116 67.7506 -0.167476 68.3933 0.108116 69.0359C4.51758 79.8687 16.5518 86.2949 30.0557 86.2949C45.9482 86.2949 59.3603 78.2162 59.3603 61.8752C59.3603 45.5351 41.9062 39.4752 37.7723 38.0982Z" />
        </svg>
    )
}

addPropertyControls(logo_wordmarque, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#ffffff",
    },
})
