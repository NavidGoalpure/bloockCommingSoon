import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="goal"
          className={`${this.props.article === 'goal' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">هدف پروژه</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            همه ما با پلتفرم ها آشنا هستیم. «دیوار» پلتفرمیه که فروشنده های
            کالای دسته دوم رو به خریداران اون کالا کا وصل میکنه «اسنپ» و «تپسی»
            پلتفرم هایی هستن که راننده آژانس ها رو به مسافران وصل می‌کنند. حتی
            «دیجی کالا» که در گذشته خودش انبارداری می‌کرد، امروزه تبدیل به
            پلتفرمی شده که عرضه کنندگان کالاها رو به متقاضیان اون‌ها متصل میکنه.
          </p>
          <p>
            «بلوک» هم یک پلتفرمه اجاره کتابه.به این معنا که کسانی که کتاب‌های
            خوبی دارن رو به خواننده‌های اون کتاب ها متصل میکنه تا بتونن
            کتاب‌هاشون رو اجاره بدن و از این راه کسب درآمد کنن. از طرف دیگه
            کسانی که کتاب اجاره می‌کنن هم میتونن کتابی که دوس دارن بخونن رو با
            قیمتی بسیار کمتر و با حدود «۸۰ درصد» صرفه جویی مطالعه کنن.
            <a href="#work">awesome work</a>.
          </p>
          <p>
            این کار با بهینه تر کردن نحوه مصرف ما هزینه کتاب‌خوانی رو برای انسان
            و طبیعت کمتر می‌کنه. پس خیلی بی راه نیست که «بلووک» رو دوست مشترک
            کتابخون‌ها و طبیعت بدونیم.
          </p>
          <p>
            تو دوس داری با دوست من که دوس داره با خود تو دوست بشه، دوست بشی؟ این
            جمله می‌تونه معرفی کتاب که بهترین دوسته به دیگران برای خوندن باشه یا
            طبیعت که دوست ماست
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="socialBusines"
          className={`${
            this.props.article === 'socialBusines' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">کسب و کار اجتماعی</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            کسب‌وکار اجتماعی نخستین بار توسط پروفسور محمد یونس، اقتصاددان
            بنگلادشی و برنده جایزه صلح نوبل سال ۲۰۰۶، به کار گرفته شد. کسب و کار
            اجتماعی، کسب و کاری است که هدف اصلی تأسیس آن، اجتماعی بوده‌است؛ به
            عبارت دیگر یک کسب و کار اجتماعی ایجاد می‌شود تا یک یا چند مشکل
            اجتماعی نظیر: فقر، اعتیاد، بیکاری، طلاق، کار کودکان، مشکلات فرهنگی،
            مشکلات محیط زیستی و … را برطرف کند.
          </p>
          <h3>ویژگی‌های کسب و کار اجتماعی</h3>
          <p>
            هر کسب و کار برای آنکه یک کسب و کار اجتماعی محسوب شود باید سه ویژگی
            که توسط محمد یونس معرفی شده‌اند را داشته باشد. سه ویژگی لازم کسب و
            کار اجتماعی عبارتند از: هدف اصلی کسب و کارهای اجتماعی، برطرف کردن
            مشکلات اجتماعی است و بر خلاف کسب و کارهای تجاری که برای حداکثر کردن
            سود برای صاحبان خود تأسیس می‌شوند، یک کسب و کار اجتماعی ایجاد می‌شود
            تا یک یا چند مشکل جامعه را برطرف کند؛ بنابراین می‌توان گفت کسب و
            کارهایی که هدف اصلی تأسیس آنها کسب سود حداکثری برای صاحبانشان است
            حتی اگر فعالیت‌های اجتماعی انجام دهند تبدیل به کسب و کار اجتماعی
            نمی‌شوند. از نظر اقتصادی خودگردان هستند؛ کسب و کارهای اجتماعی باید
            تمامی هزینه‌های خود را از طریق فروش محصولات یا خدمات، تأمین کنند؛
            بنابراین سازمان‌های خیریه علی‌رغم آنکه هدف آنها مطلقاً هدفی اجتماعی
            است به علت آنکه از لحاظ اقتصادی خودگردان نیستند و هزینه‌های آنها از
            طریق دریافت کمک‌ها و هدایای مردمی و دولتی، تأمین می‌شود مشمول تعریف
            کسب و کار اجتماعی نمی‌شوند. در کسب و کار اجتماعی سودی میان سهامداران
            تقسیم نمی‌شود. طبق شرط دوم هر کسب و کار اجتماعی باید از طریق درآمدی
            که از تجارت بدست می‌آورد، هزینه‌های خود را پوشش دهد اگر درآمدهای یک
            کسب و کار اجتماعی بیش از هزینه‌های آن باشد سود حاصل شده میان
            سهامداران تقسیم نمی‌شود بلکه برای گسترش دامنه فعالیت‌های اجتماعی
            مجدداً در کسب و کار اجتماعی، سرمایه‌گذاری می‌شود. می‌توان در
            جمع‌بندی بیان کرد که کسب و کار اجتماعی، کسب و کاری است که هدف اصلی
            تأسیس آن اجتماعی است و ضرر ده نیست به این معنا که سود حاصل از
            فعالیت‌های آن برابر یا بیشتر از صفر است و سودی بین سهامداران تقسیم
            نمی‌کند.
            <a href="https://fa.wikipedia.org/wiki/%DA%A9%D8%B3%D8%A8%E2%80%8C%D9%88%DA%A9%D8%A7%D8%B1_%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C">
              منبع: ویکیپدیا
            </a>
            <br />
            <br />
            <p>
              اگه بخش بلاکچین و توضیحات بالا رو خونده باشید،‌متوجه هماهنگی جالبی
              در چهارچوب مفهمومی «بلاکچین» و «کسب و کار اجتماعی« می‌شید. هردوی
              اون‌ها در طلب منفعت جامعه رو در اولویت قرار می‌دن اما نسبت به
              منفعت فردی هم بی تفاوت نیستن. این یکپارچگی مفهمومی انگیزه اصلی ما
              بوده که در پروژه «بلووک» از هر دو مفهموم به خوبی استفاده کنیم. به
              عبارتی بلووک پرنده ایه که یک بالش «بلاکچین» و بال دیگرش «کسب و کار
              اجتماعی« هست و به وسیله این دو بال تلاکش میکنه در آسمون کسب و
              کارهای مدرن پرواز کنه.
            </p>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
