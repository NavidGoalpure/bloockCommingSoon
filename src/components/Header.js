import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
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
          name="bloock-newsMail"
          method="POST"
          netlify
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bloock-newsMail" value="bloock-newsMail" />

          <div className="field half ">
            {/* <label htmlFor="email">ایمیل</label> */}
            <input
              type="text"
              name="email"
              id="email"
              placeholder="مثلا navid.goalpure@gmail.com"
            />
          </div>
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
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
