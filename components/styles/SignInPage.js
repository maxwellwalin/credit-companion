import styled from "styled-components";

const SignInPage = styled.section`
  .sign-in-detail {
    color: #fff;
  }
  .sign-in-page {
    background: #50b5ff;
    background: linear-gradient(135deg, #50b5ff 0, #0076e5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba($primary, 80)', endColorstr='#0076e5', GradientType=1);
    position: relative;
    overflow: hidden;
    min-height: 83vh;
    width: 100%;
    margin: 0 auto;
    padding: 0 auto;
    .container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    #container-inside {
      position: relative;
      min-width: 60rem;
      max-width: 80rem;
      height: auto;
      min-height: 100%;
      margin: 0 auto;
      padding: 0 auto;
      overflow: visible;
    }
    /* small cirlce */
    #circle-small {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      position: absolute;
      top: 12.5rem;
      left: -9.375rem;
      background: #fff;
      width: 18.75rem;
      height: 18.75rem;
      border-radius: 50rem;
      opacity: 0.4;
    }
    @-webkit-keyframes circle-small-scale {
      0% {
        -webkit-transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
      }
    }
    @keyframes circle-small-scale {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    [dir="rtl"] #container-inside #circle-small {
      right: -9.375rem;
      left: unset;
    }
    /* end small cirlce */
    /* medium cirlce */
    #circle-medium {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
      position: absolute;
      top: 3.125rem;
      left: -18.75rem;
      background: #fff;
      width: 37.5rem;
      height: 37.5rem;
      border-radius: 50rem;
      opacity: 0.3;
    }
    [dir="rtl"] #container-inside #circle-medium {
      right: -18.75rem;
      left: unset;
    }
    /* end medium cirlce */
    /* large circle */
    #circle-large {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
      position: absolute;
      top: -6.25rem;
      left: -28.125rem;
      background: #fff;
      width: 56.25rem;
      height: 56.25rem;
      border-radius: 50rem;
      opacity: 0.2;
    }
    [dir="rtl"] #container-inside #circle-large {
      right: -28.125rem;
      left: unset;
    }
    /* end large circle */
    /* x-large circle */
    #circle-xlarge {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.9s;
      animation-delay: 0.9s;
      position: absolute;
      top: -15.625rem;
      left: -37.5rem;
      background: #fff;
      width: 75rem;
      height: 75rem;
      border-radius: 50rem;
      opacity: 0.1;
    }
    [dir="rtl"] #container-inside #circle-xlarge {
      right: -37.5rem;
      left: unset;
    }
    /* end x-large circle */
    /* xx-large circle */
    #circle-xxlarge {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
      position: absolute;
      top: -25rem;
      left: -46.875rem;
      background: #fff;
      width: 93.75rem;
      height: 93.75rem;
      border-radius: 50rem;
      opacity: 0.05;
    }
    [dir="rtl"] #container-inside #circle-xxlarge {
      right: -46.875rem;
      left: unset;
    }
    /* end xx-large circle */
    /* container */
    div.container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
    }
    @media (min-width: 576px) {
      div.container {
        max-width: 540px;
      }
    }
    @media (min-width: 768px) {
      div.container {
        max-width: 720px;
      }
    }
    @media (min-width: 992px) {
      div.container {
        max-width: 960px;
      }
    }
    @media (min-width: 1200px) {
      div.container {
        max-width: 1140px;
      }
    }
    @media (min-width: 1400px) {
      div.container {
        max-width: 62.5rem;
      }
    }
    /* end container */
    .row {
      --bs-gutter-x: 1rem;
      --bs-gutter-y: 0;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-top: calc(var(--bs-gutter-y) * -1);
      margin-right: calc(var(--bs-gutter-x) * -0.5);
      margin-left: calc(var(--bs-gutter-x) * -0.5);
    }
    .row > * {
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }
  }
  .text-white {
    color: #fff !important;
  }
  .col-md-6 {
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
  }
  .text-center {
    text-align: center !important;
  }
  .pt-5 {
    padding-top: 3.75rem !important;
  }
  .mb-5 {
    margin-bottom: 3.75rem !important;
  }
  .sign-in-logo {
    display: inline-block;
    width: 100%;
  }
  .sign-in-logo img {
    height: 10.125rem;
  }
  @media (max-width: 991.98px) {
    .sign-in-page {
      overflow-y: scroll;
    }
    .sign-in-detail {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
  @media (max-width: 767.98px) {
    .sign-in-detail {
      padding: 3.125rem 1.25rem;
    }
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .overflow-hidden {
    overflow: hidden !important;
  }
  .list-inline {
    padding-left: 0;
    list-style: none;
  }
  .m-0 {
    margin: 0 !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .mb-4 {
    margin-bottom: 1.875rem !important;
  }
  .mb-1 {
    margin-bottom: 0.3125rem !important;
  }
  .bg-white {
    background-color: #fff !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-5 {
    padding-bottom: 3.75rem !important;
  }
  .sign-in-from {
    padding: 0 3.75rem;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mt-4 {
    margin-top: 1.875rem !important;
  }
  .form-group {
    margin-bottom: 1.25rem;
  }
  .form-label {
    margin-bottom: 0.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.8;
    color: #777d74;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control:focus {
    color: #777d74;
    background-color: #fff;
    border-color: #a8daff;
    outline: 0;
    box-shadow: 0 0.125rem 0.25 0 rgba(80, 181, 255, 0.15);
  }
  .d-inline-block {
    display: inline-block !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .form-check {
    position: relative;
    display: inline-block;
    min-height: 1.5rem;
  }
  .form-check-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    line-height: 1.375rem;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }
  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.4em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
  .form-check-input[type="checkbox"] {
    border-radius: 0.25em;
  }
  .form-check-input:active {
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: #a8daff;
    outline: 0;
    box-shadow: 0 0.125rem 0.25 0 rgba(80, 181, 255, 0.15);
  }
  .form-check-input:checked {
    background-color: #50b5ff;
    border-color: #50b5ff;
  }
  .form-check-input[type="checkbox"]:indeterminate {
    background-color: #50b5ff;
    border-color: #50b5ff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  .form-check-input:disabled {
    pointer-events: none;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5;
  }
  .form-check-input:disabled ~ .form-check-label,
  .form-check-input[disabled] ~ .form-check-label {
    opacity: 0.5;
  }
  .btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.8;
  color: #777d74;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #50b5ff;
  border-color: #50b5ff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #449ad9;
  border-color: #4091cc;
}
.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #fff;
  background-color: #449ad9;
  border-color: #4091cc;
  box-shadow: 0 0 0 0 rgba(106, 192, 255, 0.5);
}
.btn-check:active + .btn-primary,
.btn-check:checked + .btn-primary,
.btn-primary.active,
.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #4091cc;
  border-color: #3c88bf;
}
.btn-check:active + .btn-primary:focus,
.btn-check:checked + .btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(106, 192, 255, 0.5);
}
.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #50b5ff;
  border-color: #50b5ff;
}
.float-end {
  float: right !important;
}
.sign-info {
  font-size: 14px;
  border-top: 1px solid #f1f1f1;
  margin-top: 1.875rem;
  padding-top: 1.25rem;
}
.iq-social-media {
  margin: 0;
  padding: 0;
  float: right;
}
.iq-social-media li {
  list-style: none;
  float: left;
  margin-right: 0.625rem;
}
.iq-social-media li:last-child {
  margin-right: 0;
}
.iq-social-media li a {
  height: 1.875rem;
  width: 1.875rem;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.875rem;
  display: inline-block;
  background: rgba(80, 181, 255, 0.2);
  color: #50b5ff !important;
  border-radius: 5px;
}
.iq-social-media li a:hover {
  text-decoration: none;
}
[dir="rtl"] .iq-social-media {
  float: left;
}
`;

export { SignInPage };
