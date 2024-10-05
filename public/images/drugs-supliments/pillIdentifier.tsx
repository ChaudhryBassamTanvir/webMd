import React from 'react'

const pillIdentifier = ({ color }: { color?: string }) => {
  const fillColor = color || "#3557FF";
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="https://www.w3.org/2000/svg"><title>Pill Identifier</title><circle cx="35" cy="35" r="35" fill="white"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M31 28.6682L38.4394 39C38.4394 39 50.9897 33.4469 45.6983 26.7834C40.4069 19.5644 31 28.6682 31 28.6682Z" fill="#D2D9FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.9111 36.1489C45.4513 35.0481 46.8802 33.1781 47.1951 31.3039C47.5113 29.4298 47.0813 27.5448 45.9869 25.9957C44.8924 24.4465 43.2636 23.4184 41.4003 23.1016C39.5371 22.7842 37.6631 23.2161 36.1229 24.3169L25.3211 31.9782C23.7809 33.0791 22.416 34.8568 22.1004 36.7303C22.0337 37.1318 21.9998 37.534 21.9998 37.9323C21.9998 39.3955 22.4493 40.8207 23.3092 42.0385C25.5686 45.2367 29.9929 45.9892 33.1725 43.7173L43.9111 36.1489ZM41.1472 23.9482C42.7693 24.226 44.1871 25.1278 45.1396 26.4868C45.8891 27.5545 46.2798 28.8043 46.2798 30.0885C46.2798 30.4385 46.2505 30.7906 46.1919 31.142C45.9177 32.7863 45.0278 34.2222 43.6865 35.188L38.5493 38.9419L31.4152 28.7677L36.5518 25.0145C37.893 24.0487 39.5245 23.6703 41.1472 23.9482ZM23.041 36.9848C22.7641 38.6291 23.1395 40.2815 24.0933 41.6406C26.0596 44.445 29.9121 45.106 32.6804 43.1129L37.7779 39.4312L30.6439 29.257L25.5457 32.9394C24.2045 33.9045 23.3152 35.3411 23.041 36.9848Z" fill={fillColor}></path><path d="M47.1951 31.3039L46.8253 31.2415L46.8253 31.2418L47.1951 31.3039ZM43.9111 36.1489L44.1272 36.4554L44.1292 36.454L43.9111 36.1489ZM45.9869 25.9957L45.6806 26.2121V26.2121L45.9869 25.9957ZM41.4003 23.1016L41.3374 23.4713L41.3375 23.4713L41.4003 23.1016ZM36.1229 24.3169L36.3399 24.6228L36.341 24.622L36.1229 24.3169ZM25.3211 31.9782L25.1041 31.6723L25.103 31.6731L25.3211 31.9782ZM22.1004 36.7303L21.7306 36.668L21.7304 36.6689L22.1004 36.7303ZM23.3092 42.0385L23.0029 42.2548L23.003 42.2549L23.3092 42.0385ZM33.1725 43.7173L32.9565 43.4108L32.9545 43.4122L33.1725 43.7173ZM45.1396 26.4868L44.8325 26.7021L44.8327 26.7023L45.1396 26.4868ZM41.1472 23.9482L41.2105 23.5785L41.2105 23.5785L41.1472 23.9482ZM46.1919 31.142L46.5618 31.2036L46.5618 31.2036L46.1919 31.142ZM43.6865 35.188L43.4674 34.8837L43.4653 34.8853L43.6865 35.188ZM38.5493 38.9419L38.2422 39.1572L38.4618 39.4703L38.7705 39.2447L38.5493 38.9419ZM31.4152 28.7677L31.194 28.4649L30.897 28.6819L31.1082 28.983L31.4152 28.7677ZM36.5518 25.0145L36.3327 24.7102L36.3306 24.7117L36.5518 25.0145ZM24.0933 41.6406L24.4004 41.4253L24.4003 41.4252L24.0933 41.6406ZM23.041 36.9848L23.4108 37.0471L23.4109 37.0465L23.041 36.9848ZM32.6804 43.1129L32.8995 43.4173L32.9 43.4169L32.6804 43.1129ZM37.7779 39.4312L37.9975 39.7352L38.2973 39.5187L38.085 39.2159L37.7779 39.4312ZM30.6439 29.257L30.9509 29.0417L30.7326 28.7303L30.4243 28.953L30.6439 29.257ZM25.5457 32.9394L25.7647 33.2438L25.7653 33.2434L25.5457 32.9394ZM46.8253 31.2418C46.5313 32.9913 45.1776 34.7828 43.6931 35.8438L44.1292 36.454C45.725 35.3134 47.229 33.3648 47.5649 31.3661L46.8253 31.2418ZM45.6806 26.2121C46.7179 27.6803 47.1251 29.465 46.8253 31.2415L47.5649 31.3663C47.8976 29.3945 47.4448 27.4094 46.2931 25.7793L45.6806 26.2121ZM41.3375 23.4713C43.102 23.7713 44.6434 24.744 45.6806 26.2121L46.2931 25.7793C45.1414 24.1491 43.4252 23.0655 41.4632 22.7319L41.3375 23.4713ZM36.341 24.622C37.8 23.5791 39.5729 23.1707 41.3374 23.4713L41.4633 22.732C39.5012 22.3977 37.5262 22.853 35.9049 24.0118L36.341 24.622ZM25.538 32.2841L36.3399 24.6228L35.906 24.011L25.1041 31.6723L25.538 32.2841ZM22.4702 36.7926C22.7648 35.0437 24.0545 33.3445 25.5392 32.2833L25.103 31.6731C23.5073 32.8137 22.0672 34.6699 21.7306 36.668L22.4702 36.7926ZM22.3748 37.9323C22.3748 37.5553 22.4069 37.1737 22.4703 36.7917L21.7304 36.6689C21.6606 37.09 21.6248 37.5127 21.6248 37.9323H22.3748ZM23.6156 41.8222C22.8001 40.6675 22.3748 39.3178 22.3748 37.9323H21.6248C21.6248 39.4732 22.0984 40.9739 23.0029 42.2548L23.6156 41.8222ZM32.9545 43.4122C29.9445 45.5629 25.7553 44.8511 23.6155 41.8222L23.003 42.2549C25.3819 45.6224 30.0413 46.4155 33.3906 44.0224L32.9545 43.4122ZM43.6951 35.8424L32.9565 43.4108L33.3886 44.0238L44.1271 36.4554L43.6951 35.8424ZM45.4467 26.2716C44.4373 24.8315 42.9322 23.8735 41.2105 23.5785L41.0839 24.3178C42.6064 24.5786 43.9368 25.4241 44.8325 26.7021L45.4467 26.2716ZM46.6548 30.0885C46.6548 28.7274 46.2404 27.4023 45.4465 26.2714L44.8327 26.7023C45.5377 27.7067 45.9048 28.8812 45.9048 30.0885H46.6548ZM46.5618 31.2036C46.6237 30.8321 46.6548 30.4594 46.6548 30.0885H45.9048C45.9048 30.4176 45.8772 30.749 45.822 31.0803L46.5618 31.2036ZM43.9057 35.4924C45.3278 34.4683 46.2714 32.9448 46.5618 31.2036L45.822 31.0803C45.5639 32.6278 44.7277 33.9762 43.4674 34.8837L43.9057 35.4924ZM38.7705 39.2447L43.9078 35.4908L43.4653 34.8853L38.328 38.6391L38.7705 39.2447ZM31.1082 28.983L38.2422 39.1572L38.8563 38.7266L31.7222 28.5524L31.1082 28.983ZM36.3306 24.7117L31.194 28.4649L31.6364 29.0705L36.7731 25.3173L36.3306 24.7117ZM41.2105 23.5785C39.4883 23.2836 37.7552 23.6858 36.3327 24.7102L36.771 25.3188C38.0309 24.4115 39.5606 24.0569 41.0839 24.3178L41.2105 23.5785ZM24.4003 41.4252C23.5031 40.1468 23.1503 38.5942 23.4108 37.0471L22.6712 36.9225C22.3779 38.6641 22.7759 40.4163 23.7864 41.856L24.4003 41.4252ZM32.4613 42.8086C29.8639 44.6787 26.2475 44.0599 24.4004 41.4253L23.7863 41.8559C25.8716 44.8301 29.9604 45.5333 32.8995 43.4173L32.4613 42.8086ZM37.5584 39.1272L32.4609 42.8089L32.9 43.4169L37.9975 39.7352L37.5584 39.1272ZM30.3368 29.4723L37.4709 39.6465L38.085 39.2159L30.9509 29.0417L30.3368 29.4723ZM25.7653 33.2434L30.8635 29.561L30.4243 28.953L25.3261 32.6354L25.7653 33.2434ZM23.4109 37.0465C23.669 35.4995 24.5047 34.1505 25.7647 33.2438L25.3267 32.635C23.9043 33.6585 22.9615 35.1828 22.6711 36.9231L23.4109 37.0465Z" fill={fillColor}></path><circle cx="35" cy="33.5" r="20" stroke={fillColor} stroke-width="2"></circle><path d="M48 49.5L53.75 56.3536" stroke={fillColor} stroke-width="2" stroke-linecap="round"></path></svg>
  )
}

export default pillIdentifier;
