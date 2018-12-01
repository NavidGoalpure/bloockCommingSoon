import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Bloock</h1>
                <p>بلووک یک پلتفرم اجازه کتابه که بر بستر بلاکچین فعالیت میکنه. توی بلووک شما میتونید 
                    کتاب‌هاتون رو اجاره بدید یا کتاب‌های دیگران رو اجاره کنید.
                    با این کار هم یک صرفه جویی ۸۰ درصدی تو خرید کتاب اتفاق می‌افته،‌هم درختای کمتری قطع میشه
                    برای اطلاعات بیشتر درباره بلاکچین و تاثیر اون تو جامعه به وبلاگ MrNawid مراجعه کنین.  <a href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>پروژه</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>چرا بلاکچین</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>درباره ما</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>لیست انتظار</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
