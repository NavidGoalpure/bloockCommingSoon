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
          «بلوک» یک پلتفرم اجازه کتابه که بر بستر بلاکچین فعالیت میکنه. توی
          بلووک شما میتونین کتاب‌هاتون رو اجاره بدین یا کتاب‌های دیگران رو اجاره
          کنین. بلووک فعلا در حال ساخته و هنوز کامل نشده اما با توضیحات پایین
          می‌تونی بهتر بشناسیش و شاید هم دوس داشتی اخبارش رو دنبال کنی. راستی:
        </p>
        <h2> تو دوس داری با «دوست من» دوست بشی؟</h2>
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
