import React from 'react'
import logoPic from '../images/logo.png'

import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        src={logoPic}
        alt="bloock logo"
        style={{ width: '5rem', height: '5rem', marginTop: '0.5rem' }}
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Bloock</h1>

        <p>
          «بلووک» پلتفرم اجاره کتابی بود که می‌خواست، بر بستر بلاکچین فعالیت
          کنه. قرار بود توی بلووک کاربرها بتونن کتاب‌هاشون رو اجاره بدن یا
          کتاب‌های دیگران رو اجاره کنن. ما بنیانگذاران بلووک چند ماهی روی این
          ایده فعالیت کردیم - MVP ساختیم و اعتبارسنجی انجام دادیم- ولی در نهایت
          نتونستیم وجود این نیاز رو توی بازار تایید کنیم. درنهایت تصمیم گرفتیم
          بلووک رو به عنوان یک استارتاپ معلق کنیم و انرژی‌مون رو روی حوزه های
          دیگه ای بزاریم.
          <br /> البته سایت اجاره کتاب برای گرگانی‌ها همچنان فعال می‌مونه تا اگه
          زمانی به این نتیجه رسیدیم شرایط بازار عوض شده بتونیم دوباره کار رو
          پیگیری کنیم. <br />
          کارهایی که کردیم و محتواهایی که منتشر کردیم رو می‌تونین از لینک های
          پایین پیدا کنین
        </p>
        <h2> به امید موفقیت سایر پروژه های بلاکچینی</h2>
        {/*<form
          style={{ display: 'flex', justifyContent: 'center', margin: '0' }}
          action="https://getsimpleform.com/messages?form_api_token=3a2b2dfbb84eeaa8d36aff499a0f6358"
          method="POST"
        >
          // برای درست کار کردن فرم وجود این فیلد هیدن ضروریست
          <input type="hidden" name="redirect_to" value="http://bloock.ir" />

          <input
            style={{ borderRadius: '0px 4px 4px 0px' }}
            type="text"
            name="email"
            id="email"
            placeholder="مثلا navid.goalpure@gmail.com"
          />

          <input
            type="submit"
            value="ثبت ایمیل"
            name="send"
            className="special"
            style={{ borderRadius: '4px 0px 0px 4px' }}
          />
        </form> */}
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('goal')
            }}
          >
            هدف پروژه
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('whyBlockchain')
            }}
          >
            چرا بلاکچین
          </a>
        </li>

        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            تالار خاطرات
          </a>
        </li> */}
        <li>
          <a href="https://bloock-memory.netlify.com/">تالار خاطرات</a>
        </li>
        <li>
          <a href="https://virgool.io/bloock">وبلاگ</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
