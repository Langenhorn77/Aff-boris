<template>
  <ul class="social" :class="{ 'social-footer': isInFooter }">
    <li class="social__item" v-for="link in socialLinks">
      <a class="social__link" :href=link.link target="_blank">
        <svg :width=link.image.width :height=link.image.height :viewBox=link.image.viewBox>
          <path :d=link.image.pathD />
        </svg>
        <span>{{link.count}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Social",
    data() {
      return {
        socialLinks: [
          {
            image: {
              width: '21',
              height: '12',
              viewBox: '0 0 21 12',
              pathD: 'M20.578 10.5667C20.5222 10.4733 20.177 9.72313 18.5158 8.18136C16.7768 6.56691 17.0104 6.82907 19.105 4.03753C20.3807 2.33742 20.8908 1.2992 20.7311 0.855352C20.5793 0.432273 19.641 0.543883 19.641 0.543883L16.5211 0.562052C16.5211 0.562052 16.2901 0.530905 16.1175 0.63343C15.9501 0.734658 15.8424 0.968259 15.8424 0.968259C15.8424 0.968259 15.3479 2.28422 14.6886 3.40291C13.2987 5.76358 12.742 5.88817 12.5149 5.74152C11.9867 5.4002 12.119 4.36846 12.119 3.63651C12.119 1.34851 12.4655 0.394637 11.4429 0.148058C11.1029 0.0662971 10.8537 0.01179 9.98546 0.00270551C8.87196 -0.00897457 7.92847 0.00659887 7.39508 0.267454C7.03949 0.441358 6.76565 0.829396 6.93307 0.851459C7.13942 0.878712 7.60662 0.977344 7.8545 1.31477C8.17505 1.74953 8.16337 2.72806 8.16337 2.72806C8.16337 2.72806 8.34766 5.42097 7.7338 5.7558C7.31202 5.9855 6.73451 5.517 5.49512 3.37436C4.8605 2.27773 4.38032 1.0643 4.38032 1.0643C4.38032 1.0643 4.28818 0.838481 4.12336 0.717786C3.9235 0.571136 3.64318 0.524416 3.64318 0.524416L0.676437 0.542585C0.676437 0.542585 0.231296 0.555563 0.0677747 0.748934C-0.0775775 0.921539 0.0560946 1.27713 0.0560946 1.27713C0.0560946 1.27713 2.37913 6.71097 5.00845 9.4506C7.42104 11.9618 10.1594 11.797 10.1594 11.797H11.4001C11.4001 11.797 11.7751 11.7555 11.9659 11.5491C12.1424 11.3596 12.1359 11.004 12.1359 11.004C12.1359 11.004 12.1112 9.33899 12.8847 9.09371C13.6465 8.85232 14.6251 10.703 15.662 11.4154C16.4459 11.954 17.0415 11.8359 17.0415 11.8359L19.8149 11.797C19.8149 11.797 21.2658 11.7074 20.578 10.5667Z'
            },
            count: '105',
            link: 'http://vk.com'
          },
          
          {
            image: {
              width: '16',
              height: '13',
              viewBox: '0 0 16 13',
              pathD: 'M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z'
            },
            count: '96',
            link: 'http://twitter.com'
          },
          
          {
            image: {
              width: '9',
              height: '18',
              viewBox: '0 0 9 18',
              pathD: 'M5.57288 6.42188V4.35938C5.57288 3.79013 6.03488 3.32812 6.60413 3.32812H7.63538V0.75H5.57288C3.86409 0.75 2.47913 2.13497 2.47913 3.84375V6.42188H0.416626V9H2.47913V17.25H5.57288V9H7.63538L8.66663 6.42188H5.57288Z'
            },
            count: '',
            link: 'http://facebook.com'
          }
        ]
      }
    },
    
    props: {
      isInFooter: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .social {
    display: flex;
    justify-content: space-between;
    width: 272px;
    margin-top: 32px;
    
    
    &__item {
      display: flex;
      justify-content: center;
      width: 84px;
      height: 34px;
      box-sizing: border-box;
      border: 0.5px solid #BFBFBF;
      padding-left: 7px;
      padding-right: 7px;
    }
    
    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 34px;
      text-decoration: none;
      color: #848484;
    }
    
    &__link svg {
      margin-right: 12px;
    }
    
    &__link span {
      font-size: 11px;
      letter-spacing: 0.05em;
    }
  }
  
  .social-footer {
    
    width: 159px;
    margin-left: 87px;
    margin-top: 10px;
    
    
    .social__item {
      border: none;
    }
    
    .social__item span {
      display: none;
    }
    
    .social__link svg {
      transform: scale(1.3);
    }
    
    .social__link path {
      fill: #F5F5F5;
    }
  }
  
  @media (min-width: 768px) {
    .social {
      margin-top: 0;
    }
  }
  
  @media (min-width: 1024px) {
    .social {
      width: 302px;
      margin-top: 2px;
      
      &__item {
        width: 94px;
      }
    }
  
    .social-footer {
      width: 162px;
      margin-left: 77px;
    }
  }


</style>
