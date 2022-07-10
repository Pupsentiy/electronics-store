import React from 'react'
import { NavLink } from 'react-router-dom'
import './FooterBottom.scss'
import vk from '../../../assets/icons/footer/contact/vk.svg'
import tic from '../../../assets/icons/footer/contact/tic.svg'
import you from '../../../assets/icons/footer/contact/youT.svg'

const FooterBottom = () => {
  return (
    <div className='footer__bottom'>
      <div className="container">
        <div className="footer__row">
          <div className="footer__col">
            <div className="footer__socials">
              <NavLink to='#' className='footer__socials__item'><img src={vk} alt="vk" className='social__img' /></NavLink>
              <NavLink to='#' className='footer__socials__item'> <img src={you} alt="you" className='social__img'/></NavLink>
              <NavLink to='#' className='footer__socials__item'><img src={tic} alt="tic" className='social__img'/></NavLink>
            </div>
            <div className="footer__contacts">
              <NavLink to='#' className='footer__contact__tel'>8 812 703-19-44</NavLink>
              <p className="footer__contacts__time">с 10.00 до 22.00 (МСК)</p>
            </div>
          </div>
          <div className="footer__col">
            <p className="p__medium">О компании</p>
            <ul className="footer__links__list">
              <li><NavLink to='#' className="ui__link">Адреса магазинов</NavLink></li>
              <li><NavLink to='#' className="ui__link">Акции и новости</NavLink></li>
              <li><NavLink to='#' className="ui__link">Услуги</NavLink></li>
              <li><NavLink to='#' className="ui__link">Академия</NavLink></li>
              <li><NavLink to='#' className="ui__link">Блог</NavLink></li>
              <li><NavLink to='#' className="ui__link">Корпоративным клиентам</NavLink></li>
              <li><NavLink to='#' className="ui__link">Вакансии  </NavLink></li>
              <li><NavLink to='#' className="ui__link">Контакты</NavLink></li>
              <li><NavLink to='#' className="ui__link">Обратная связь</NavLink></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="p__medium">Помощь</p>
            <ul className="footer__links__list">
              <li><NavLink to='#' className="ui__link">Где мой заказ?</NavLink></li>
              <li><NavLink to='#' className="ui__link">Обмен и возврат</NavLink></li>
              <li><NavLink to='#' className="ui__link">Гарантии</NavLink></li>
              <li><NavLink to='#' className="ui__link">Сервисные центры Apple</NavLink></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="p__medium">Каталог</p>
            <ul className="footer__links__list--columns-2">
              <li><NavLink to='/apple-mac' className="ui__link">Mac</NavLink></li>
              <li><NavLink to='/apple-iphone' className="ui__link">iPhone</NavLink></li>
              <li><NavLink to='/apple-watch' className="ui__link">Watch</NavLink></li>
              <li><NavLink to='/apple-ipad' className="ui__link">iPad</NavLink></li>
              <li><NavLink to='/accessories' className="ui__link">Аксессуары</NavLink></li>
              <li><NavLink to='/gadjets' className="ui__link">Гаджеты</NavLink></li>
              <li><NavLink to='#' className="ui__link">Распродажа</NavLink></li>
            </ul>
            <div className="footer__mailing">
              <input type="text" placeholder='Подписаться на новости' className='sub__news'/>
              <p className="p__small ">Подписываясь на рассылку, вы соглашаетесь с условиями оферты и политикой конфиденциальности</p>
            </div>
          </div>
          <div className="footer__col">
            <p className="p__medium">Услуги</p>
            <ul className="footer__links__list">
              <li><NavLink to='#' className="ui__link">Сервисные центры</NavLink></li>
              <li><NavLink to='#' className="ui__link">Рассрочка и кредит</NavLink></li>
              <li><NavLink to='#' className="ui__link">Рассрочка от СберБанка</NavLink></li>
              <li><NavLink to='#' className="ui__link">Доставка и оплата</NavLink></li>
              <li><NavLink to='#' className="ui__link">Подарочные сертификаты</NavLink></li>
              <li><NavLink to='#' className="ui__link">Trade-in</NavLink></li>
              <li><NavLink to='#' className="ui__link">Программы страхования вашей техники</NavLink></li>
              <li><NavLink to='#' className="ui__link">Контакты</NavLink></li>
              <li><NavLink to='#' className="ui__link">re:Store | Безопасность</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="footer__row footer__row__copyright">
          <div className="footer__row">
            © re:Store, 2022
            <br />
            <p className='p__small'>
              Мы раскрываем информацию в сети Интернет на странице ООО «Интерфакс-ЦРКИ -
              <br />
              информационного агентства, аккредитованного ЦБ РФ на раскрытие
              информации.
            </p>
          </div>
          <div className="footer__col">
            Политика конфиденциальности
          </div>
          <div className="footer__col">
            Оферта
          </div>
          <div className="footer__col">
            Участник
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom