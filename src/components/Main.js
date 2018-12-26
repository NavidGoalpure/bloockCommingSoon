import React from 'react'
import PropTypes from 'prop-types'
import plattformVideo from '../images/plattform.webm'
import blockchainVideo from '../images/blockchain.webm'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  UNSAFE_componentWillReceiveProps() {
    this.refs.goalVid.pause()
    this.refs.blockchainVid.pause()
  }

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
            <video
              ref="goalVid"
              width="100%"
              poster={pic03}
              controls
              src={plattformVideo}
            >
              متاسفانه مرورگر شما این کلیپ رو پشتیبانی نمی‌کنه!
            </video>
          </span>
          <p>
            همه ما با پلتفرم ها آشنا هستیم. «دیوار» پلتفرمیه که فروشنده های
            کالای دسته دوم رو به خریداران اون کالا ها وصل میکنه. «اسنپ» و «تپسی»
            پلتفرم هایی هستن که راننده ها رو به مسافران وصل می‌کنن. حتی «دیجی
            کالا» که در گذشته خودش انبارداری می‌کرد، امروزه تبدیل به پلتفرمی شده
            که عرضه کنندگان کالاها رو به متقاضیان اون‌ها متصل میکنه.
          </p>
          <p>
            «بلووک» هم یک پلتفرم اجاره کتابه که بر بستر بلاکچین فعالیت می‌کنه.
            بلووک کسانی که کتاب‌های خوبی دارن رو به خواننده‌های اون کتاب ها متصل
            میکنه تا بتونن کتاب‌هاشون رو اجاره بدن و از این راه کسب درآمد کنن.
            از طرف دیگه کسانی که کتاب اجاره می‌کنن هم میتونن کتابی که دوس دارن
            رو با قیمتی بسیار بخونن
            <p>
              این کار با بهینه تر کردن نحوه مصرف ما هزینه مطالعه رو برای انسان و
              طبیعت کمتر می‌کنه - چون باعث میشه درختای کمتری قطع بشن- پس خیلی بی
              راه نیست که «بلووک» رو دوست مشترک کتابخون‌ها و طبیعت بدونیم.
            </p>
          </p>
          {close}
        </article>

        <article
          id="whyBlockchain"
          className={`${
            this.props.article === 'whyBlockchain' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">چرا بلاکچین</h2>
          <span>
            <video
              ref="blockchainVid"
              width="100%"
              poster={pic02}
              controls
              src={blockchainVideo}
            >
              متاسفانه مرورگر شما این کلیپ رو پشتیبانی نمی‌کنه!
            </video>
          </span>
          <p>
            با فراگیر شدن اینترنت «پلتفرم‌های تجاری» تونستن که با متصل کردن
            افراد و خدمات به همدیگه، فرصت های جدیدی برای خلق پول و ارزش به وجود
            بیارن.
          </p>
          <p>
            هرچند این شرکت ها با متصل کردن «تولیدکننده‌ها و مصرف کننده‌ها»
            «راننده‌ها و مسافرها» ، «دوستان و آشنایان» و… ساختارهای جدید و مفیدی
            رو توی جامعه به وجود آوردن، اما مشکل واقعی وقتی خودش رو نشون داد
            منافع حاصل از اون به صورت ناعادلانه تقسیم شد. این کمپانی ها با قرار
            گرفتن در گلوگاه های حیاتی این تبادلات، سود و قدرت بیشتری رو نسبت به
            کاربرانی به دست می آورد که سازندگان اون ارزش بودن.مثلا به نظر شما
            ارزش یک گروه تلگرامی رو اعضاش می‌سازن یا ادمینش؟
          </p>
          <p>
            با رشد و گسترش بلاکچین و کسب و کارهای مبتنی بر اون، دنیا می‌تونه یک
            قدم دیگه به سمت عادلانه شدن برداره. در مرحله قبلی و با رشد اینترنت
            «پلتفرم‌ها» این فرصت رو به افراد دادن تابتونن دارایی‌های کوچیکشون رو
            به هم پیوند بدن و در قالب یک محصول بزرگ اما متنوع با «تولید انبوه»
            مقابله کنن.
          </p>
          <p />
          حالا با اومدن جنبش جدیدبلاکچین برای اولین بار این فرصت به وجود اومده
          که منافع حاصل از این تبادلات به کاربرانی که این به وجود آوردنده این
          ارزش‌ها هستن برسه.
          <p />
          <p>
            برای اطلاع از جزییات بیشتر و اینکه چطور بلاکچین می‌تونه در حل این
            مشکل «عصای جادویی» ما باشه می‌تونید به این
            <a href="https://mrnewid.ir/%D8%B3%D9%87%D9%85%C2%BB%20%D9%85%D8%A7%D8%B1%D9%88%20%D8%AF%D8%B2%D8%AF%DB%8C%D8%AF%DB%8C%D9%86%D8%8C%20%D8%AF%D8%A7%D8%B1%DB%8C%D9%86%20%D8%A8%D8%A7%D9%87%D8%A7%D8%B4%20%D9%BE%D8%B2%20%D9%85%DB%8C%E2%80%8C%D8%AF%DB%8C%D9%86/">
              &#160; مقاله &#160;
            </a>
            مراجعه کنین
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
            واژه «کسب و کار اجتماعی» نخستین بار توسط پروفسور محمد یونس،
            اقتصاددان بنگلادشی و برنده جایزه صلح نوبل سال ۲۰۰۶، به کار گرفته شد.
            کسب و کار اجتماعی، کسب و کاریست که هدف از تاسیس آن حل یک مشکل
            اجتماعیست؛ به عبارت دیگه یک کسب و کار اجتماعی ایجاد می‌شه تا یک یا
            چند مشکل اجتماعی مثل: فقر، اعتیاد، بیکاری، طلاق، کار کودکان، مشکلات
            فرهنگی، مشکلات محیط زیستی و … رو برطرف کنه.
          </p>
          <h3>ویژگی‌های کسب و کار اجتماعی</h3>
          <p>
            هر کسب و کار برای اینکه یک «کسب و کار اجتماعی» به حساب بیاد باید سه
            تا ویژگی داشته باشه:
            <br />
            <br />
            <h4>
              &bull;&#160;هدف اصلی کسب و کارهای اجتماعی، برطرف کردن مشکلات
              اجتماعیه:
            </h4>
          </p>
          <p style={{ paddingRight: '1em' }}>
            بر خلاف کسب و کارهای تجاری که هدفشون حداکثر کردن سود سهامدارانشونه،
            کسب و کار اجتماعی با هدف برطرف کردن یک یا چند مشکل اجتماعی فعالیت
            می‌کنه. بنابراین کسب و کارهایی که هدف اصلی اون‌ها کسب سود حداکثری
            برای صاحبانشونه، حتی اگه فعالیت‌های اجتماعی هم انجام بدن، کسب و کار
            اجتماعی نامیده نمی‌شن.
          </p>

          <h4>&bull;&#160;از نظر اقتصادی خودگردان هستن :</h4>
          <p style={{ paddingRight: '1em' }}>
            کسب و کارهای اجتماعی باید تمامی هزینه‌های خودشون رو از طریق فروش
            محصولات یا خدمات، تأمین کنن؛ بنابراین سازمان‌های خیریه علی‌رغم اینکه
            هدف اونها کاملا اجتماعیه «کسب و کار اجتماعی» نیستن،‌ چون از نظر
            اقتصادی خودگردان نیستن و هزینه‌هاشون از طریق دریافت کمک‌ها و هدایای
            مردمی و دولتی، تأمین می‌شه
          </p>
          <h4>
            &bull;&#160;در کسب و کار اجتماعی سودی میان سهامداران تقسیم نمیشه:
          </h4>
          <p style={{ paddingRight: '1em' }}>
            طبق شرط دوم هر کسب و کار اجتماعی باید از طریق درآمدی که از تجارت
            بدست می‌آره، هزینه‌های خودش رو پوشش بده. اگه درآمدهای یک کسب و کار
            اجتماعی بیشتر از هزینه‌های اون باشه و پس از پرداخت هزینه ها سود به
            دست اومده بین سهامداران تقسیم نمیشه، بلکه برای گسترش دامنه
            فعالیت‌های اجتماعی مجدداً در کسب و کار اجتماعی، سرمایه‌گذاری می‌شه.
            <br />
            البته توجه کنین که پولی که سرمایه گذاران در ابتدا سرمایه گذاری کردن
            بهشون برمی‌گرده و «سود» به میزان پولی میگیم که بعد از بازپرداخت همه
            دیون هنوز توی سیستم باقی می‌مونه.
          </p>

          <p>
            در جمع‌بندی «کسب و کار اجتماعی» رو می‌تونیم کسب و کاری تعریف کنیم که
            «هدف اصلیش اجتماعیه» ، «ضرر ده نیست» و «سودی بین سهامداران تقسیم
            نمی‌کنه»
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
          <h2 className="major">تو را من چشم در راهم</h2>
          <p>
            اگه برنامه‌نویس،‌ سرمایه گذار،‌ تولید کننده محتوا هستین یا هر
            امکانات و مهارت دیگه ای دارین که فکر می‌کنین می‌تونه به «بلووک» کمک
            کنه، با یک پیام خوشحالمون کنین.
          </p>
          <form
            name="bloock-contact"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
          >
            <div className="field half first">
              <label htmlFor="name">نام</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="family">نام خانوادگی</label>
              <input type="text" name="family" id="family" />
            </div>
            <div className="field half first">
              <label htmlFor="email">ایمیل</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field half">
              <label htmlFor="coolab">زمینه همکاری</label>
              <input type="text" name="collab" id="collab" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="ارسال" className="special" />
              </li>
              <li>
                <input type="reset" value="پاک کن" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/NavidGoalpure"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/NavidGoalpure"
                className="icon fa-github"
              >
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
