import React from 'react'
import logoPic from '../images/logo.png'

import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        src={logoPic}
        alt="bloock logo"
        style={{ width: '5rem', height: '5rem' }}
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Bloock</h1>

        <p>
          «بلووک» یک پلتفرم اجاره کتابه که بر بستر بلاکچین فعالیت میکنه. توی
          بلووک شما میتونین کتاب‌هاتون رو اجاره بدین یا کتاب‌های دیگران رو اجاره
          کنین. بلووک فعلا در حال ساخته و هنوز کامل نشده اما با توضیحات پایین
          می‌تونی بهتر بشناسیش و شاید هم دوس داشتی اخبارش رو دنبال کنی. راستی:
        </p>
        <h2> ایمیلت رو وارد کن تا از پیشرفت پروژه باخبر بشی</h2>
        <form
          style={{ display: 'flex', justifyContent: 'center', margin: '0' }}
          action="https://getsimpleform.com/messages?form_api_token=9903a95d5d41daf0a8360bf82b852420"
          method="POST"
        >
          {/* برای درست کار کردن فرم در نتلیفای وجود این فیلد هیدن ضروریست */}
          <input type="hidden" name="redirect_to" value="https://bloock.ir" />

          <input
            style={{ borderRadius: '0px 4px 4px 0px' }}
            type="text"
            name="email"
            id="email"
            placeholder="مثلا navid.goalpure@gmail.com"
          />

          <input
            type="submit"
            value="ثبت"
            name="send"
            className="special"
            style={{ borderRadius: '4px 0px 0px 4px' }}
          />
        </form>
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
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('socialBusines')
            }}
          >
            کسب و کار اجتماعی
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            مشارکت
          </a>
        </li>
        <li>
          <a
            href="https://blog.bloock.ir/"
            onClick={() => {
              props.onOpenArticle('socialBusines')
            }}
          >
            وبلاگ
          </a>
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
